import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Data from "../fortune500.json";
import firebase from "../config.js";
import CompanyPage from "./CompanyPage";
import "./GlassCeilingPage.css";

export default function GlassCeilingPage() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();
  const [company, setCompany] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  const handleCompanySelection = () => {
    if (company === inputValue && company) {
      setIsCompany(true);
    }
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

  const companyForm = () => {
    return (
      <div className="glass-ceiling-card">
        <p className="glass-ceiling-text">Glass Ceiling</p>
        <br />
        <p className="glass-ceiling-sub-text">Select a company</p>
        <br />
        <Autocomplete
          className="glass-ceiling-input"
          inputValue={inputValue}
          onChange={(event, newValue) => {
            setCompany(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          value={company}
          options={Data}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a company"
              variant="outlined"
            />
          )}
        />
        <button
          className="glass-ceiling-button-submit"
          onClick={handleCompanySelection}
        >
          Submit
        </button>
      </div>
    );
  };

  return (
    <div className="glass-ceiling-page-div">
      <div className="glass-ceiling-page">
        {isCompany ? null : companyForm()}
        {isCompany ? <CompanyPage company={company.toLowerCase()} /> : null}
        {isCompany ? postView() : null}
      </div>
    </div>
  );
}
