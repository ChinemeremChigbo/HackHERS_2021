import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config.js";
import CompanyPage from "./CompanyPage";

export default function GlassCeilingPage() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [company, setCompany] = useState("");
  const [isCompany, setIsCompany] = useState(false);

  const handleReview = (event) => {
    setReview(event.target.value);
  };

  const handlePost = () => {
    if (rating && review && isCompany) {
      var db = firebase.database();
      var postData = {
        review: review,
        rating: rating,
      };
      var newPostKey = db
        .ref("Company")
        .child(`${company.toLowerCase()}`)
        .push().key;
      var updates = {};
      updates[newPostKey] = postData;
      setReview("");
      setRating(0);
      setIsCompany(false);
      setCompany("");
      return db
        .ref("Company")
        .child(`${company.toLowerCase()}`)
        .update(updates);
    }
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleCompanySelection = () => {
    setIsCompany(true);
  };

  const postView = () => {
    return (
      <div>
        <p>Post a review</p>
        <br />
        <input
          placeholder="Post a review"
          value={review}
          type="text"
          onChange={handleReview}
        />
        <br />
        <input
          placeholder="Rating"
          value={rating}
          type="number"
          onChange={handleRating}
        />
        <br />
        <button onClick={handlePost}>Post</button>
      </div>
    );
  };

  return (
    <div>
      <p>Glass Ceiling Page</p>
      <br />
      <p>Select a company</p>
      <br />
      <input
        placeholder="Company"
        value={company}
        type="text"
        onChange={handleCompany}
      />
      <button onClick={handleCompanySelection}>Submit</button>
      <br />
      {isCompany ? <CompanyPage company={company.toLowerCase()} /> : null}
      {isCompany ? postView() : null}
    </div>
  );
}
