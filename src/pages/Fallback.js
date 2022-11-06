import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Fallback() {
  return (
    <div>
      <h1 className='errorMessage'>Sorry, an Unexpected Error Occured.</h1>

      <Link to='/' className='back-link'>
        Go back to the Home Page
      </Link>
    </div>
  );
}
