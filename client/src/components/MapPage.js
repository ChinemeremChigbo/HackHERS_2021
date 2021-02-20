import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import firebase from "../config.js";
import { Fab, makeStyles, Slide } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateInjusticeDialog from "./mapComponents/CreateInjusticeDialog";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    zIndex: 999,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: 5,
  },
}));

const MapPage = (props) => {
  const position = [43.468, -80.5373];
  const classes = useStyles();
  const [clickPos, setClickPos] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  // useEffect(() => {
  //   console.log(clickPos && clickPos.lat);
  // }, [clickPos]);
  const handleClick = (e) => {
    e.stopPropagation();
    setOpenDialog(true);
  };
  const ClickMarker = () => {
    useMapEvents({
      click: (e) => {
        console.log("map click");
        if (clickPos) {
          setClickPos(null);
        } else {
          setClickPos(e.latlng);
        }
      },
    });
    if (clickPos) {
      return <Marker position={clickPos}></Marker>;
    } else {
      return null;
    }
  };
  return (
    <React.Fragment>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickMarker />
      </MapContainer>
      <Slide
        // remove strict mode to get rid of error
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
        location={clickPos ? [clickPos.lat, clickPos.lng] : null}
      />
    </React.Fragment>
  );
};

export default MapPage;
