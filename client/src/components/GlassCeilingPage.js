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
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const handleReview = (event) => {
    if (loggedIn) {
      setReview(event.target.value);
    }
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
    if (loggedIn && event.target.value>0) {
      setRating(event.target.value);
    }
  };

  const handleCompanySelection = () => {
    if (company === inputValue && company) {
      setIsCompany(true);
    }
  };

  const postView = () => {
    return (
      <div style={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        width: "800px",
        height: "7700px",
        transition: "0.3s",
        borderRadius: "5px",
        backgroundColor: "#cccbe4",
        paddingTop: "50px",
        marginTop: "-1030px",
      }}>
      <div>
        <p className = "glass-ceiling-header"> Post a review</p>
        <br />
        <input
          className = "glass-ceiling-input"
          placeholder="Post a review"
          value={review}
          type="text"
          onChange={handleReview}
        />
        <br />
        <input
          className = "glass-ceiling-input"
          placeholder="Rating"
          value={rating}
          type="number"
          onChange={handleRating}
        />
        <br />
        <button className = "glass-ceiling-button-post" onClick={handlePost}>Post</button>
      </div>
      </div>
    );
  };

  const companyForm = () => {
    return (
      <div className="glass-ceiling-card">
        <p className="glass-ceiling-text">Glass Ceiling</p>
        <br />

        <br />
        <Autocomplete
          className = "glass-ceiling-company-selector"
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
