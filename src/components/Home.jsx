import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
   <>
    <Helmet>‍
        <title>AltSchoolSSE-Marvellous</title>‍
        <meta name="description" content= "API Github fetch"></meta>
     </Helmet>
    <div className='home-text'>
      <span className='welc'>Hi there!</span>
      <span className='name'>I am Marvellous</span>
      <h6 style={{ fontWeight: "300" }}>
        Software Engineer | Writer | Christian
      </h6>
      <Link to='unknown/404'>Test 404</Link>
    </div>
    </>
  );
}
