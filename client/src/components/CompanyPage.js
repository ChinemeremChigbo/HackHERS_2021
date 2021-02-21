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
      <div style={{ fontSize: "50" }} className="glassceiling-reviews">
        {reviews.map((review, i) => {
          return (
            <div key={i} style={{ width: 800, margin: '0 auto' }}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 300,
                  color: "#393E41",
                  textAlign: "center",
                }}
              >
                {review[0]}
              </div>
              <div>
                <Rating
                  style={{
                    marginTop: 10,
                    color: "#393E41",
                    textAlign: "left",
                    fontSize: "30px",
                  }}
                  name="customized-10"
                  value={review[1]}
                  max={10}
                  readOnly
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{showReviews()}</div>;
}
