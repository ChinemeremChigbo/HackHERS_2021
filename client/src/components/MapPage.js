import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { Map, TileLayer, Marker, useMapEvents } from "react-leaflet";
import firebase from "../config.js";
import { Fab, makeStyles, Slide } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import CreateInjusticeDialog from "./mapComponents/CreateInjusticeDialog";
import DisplayInjustice from "./mapComponents/DisplayInjustice";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    zIndex: 999,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: 5,
  },
  paper: {
    position: "absolute",
    left: "0%",
    right: "0%",
    zIndex: 999,
  },
}));

const MapPage = (props) => {
  const position = [43.468, -80.5373];
  const classes = useStyles();
  const [clickPos, setClickPos] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [storyMarkers, setStoryMarkers] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [openStory, setOpenStory] = useState(false);
  const [dataPoints, setDataPoints] = useState([]);
  const database = firebase.database().ref("/stories/");
  useEffect(() => {
    if (!openDialog) {
      database.on("value", (snapshot) => {
        if (snapshot.val()) {
          setStoryMarkers(
            Object.values(snapshot.val()).map((element) => {
              return (
                <Marker
                  position={element.position}
                  key={element.position[0]}
                  eventHandlers={{
                    click: () => {
                      setOpenStory(true);
                      setSelectedData(element.body);
                    },
                  }}
                ></Marker>
              );
            })
          );
          Object.values(snapshot.val()).map((element) => {
            setDataPoints((prev) => [
              ...prev,
              { coordinate: [element.position[0], element.position[1]] },
            ]);
          });
        }
      });
    } //eslint-disable-next-line
  }, [openDialog]);
  const handleClick = (e) => {
    e.stopPropagation();
    setOpenDialog(true);
  };
  const ClickMarker = () => {
    if (clickPos) {
      setClickPos(null);
    } else {
      //setClickPos({ lat: e.latlng.lat, lng: e.latlng.lng });
    }
    if (clickPos) {
      return <Marker position={clickPos}></Marker>;
    } else {
      return null;
    }
  };
  return (
    <React.Fragment>
      <Map center={position} zoom={13} scrollWheelZoom={true}>
        <HeatmapLayer
          points={dataPoints}
          longitudeExtractor={(m) => m.coordinate[1]}
          latitudeExtractor={(m) => m.coordinate[0]}
          intensityExtractor={(m) => 100}
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickMarker />
        {storyMarkers}
      </Map>
      <Slide
        direction="left"
        in={clickPos ? true : false}
        mountOnEnter
        unmountOnExit
      >
        <Fab color="primary" className={classes.fab} onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Slide>
      <CreateInjusticeDialog
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
        position={clickPos && [clickPos.lat, clickPos.lng]}
        removeClickMarker={() => setClickPos(null)}
      />
      <DisplayInjustice
        open={openStory}
        handleClose={() => {
          setOpenStory(false);
        }}
        body={selectedData}
      />
    </React.Fragment>
  );
};

export default MapPage;
