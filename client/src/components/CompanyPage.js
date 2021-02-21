import React, { useEffect, useState } from "react";
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
              <p>{review[1]}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div>{props.company}</div>
      {showReviews()}
    </div>
  );
}
