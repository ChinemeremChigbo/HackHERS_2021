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
      <div>
        {reviews.map((review, i) => {
          return (
            <div key={i}>
              <p>{review[0]}</p>
              <Rating
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
