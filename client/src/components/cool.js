import React, { useEffect } from "react";
import Data from "../fortune500.json";
import Quotes from "../quotes.json";
import firebase from "../config.js";

export default function Cool() {
  useEffect(() => {
    const db = firebase.database();
    Data.map((company) => {
      for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * 20) + 1;
        let postData = {
          review: Quotes.review[index],
          rating: Quotes.rating[index],
        };
        company = company.split(".").join("");
        company = company.split("#").join("");
        company = company.split("$").join("");
        company = company.split("[").join("");
        company = company.split("]").join("");
        let newPostKey = db
          .ref("Company")
          .child(`${company.toLowerCase()}`)
          .push().key;
        let updates = {};
        updates[newPostKey] = postData;
        db.ref("Company").child(`${company.toLowerCase()}`).update(updates);
      }
    });
  }, []);

  return (
    <div>
      <p>bruh</p>
    </div>
  );
}
