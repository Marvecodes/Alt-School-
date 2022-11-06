import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function Notfound() {
  return (
  <>
  <h1 className='errorMessage'>The Requested content is unavailable</h1>;
  <Link to="/" className='back-link'>Go back to the Home Page</Link>
  </>
  );
}
