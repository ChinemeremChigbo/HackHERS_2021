import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import firebase from "../config.js";

export default function CompanyPage(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    var db = firebase.database();
    db.ref("Company")
      .child(`${props.company}`)
      .once("value")
      .then((snapshot) =>
        Object.values(snapshot.val()).map((obj) => {
          setReviews((prev) => [...prev, [obj.review, obj.rating]]);
        })
      );
  }, []);

  const showReviews = () => {
    return (
      <div style={{fontSize: "50"}}>
        {reviews.map((review, i) => {
          return (

            <div  key={i}>
              <p style={{
                    position: "relative",
                    marginTop: "215px",
                    marginLeft: "50px",
                    fontSize: "20px",
                    fontWeight: 300,
                    color: "#393E41",
                    textAlign: "left",
                    fontSize:"15px"}}>{review[0]}</p>
              <Rating 
              style={{
                position: "relative",
                marginTop: 10,
                marginLeft: -540,
                color: "#393E41",
                textAlign: "left",
                fontSize:"30px"}}
                name="customized-10"
                value={review[1]}
                max={10}
                readOnly
              />
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{showReviews()}</div>;
}
