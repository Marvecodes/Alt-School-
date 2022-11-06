import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";
import Fallback from "../pages/Fallback";
import ErrorBoundary from "./ErrorBoundary";
import { Helmet } from "react-helmet";

const PAGE = 10;
export default function Repos() {
  const [currentPage, setCurrentPage] = useState(0);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch users repositories from Github API

    fetchDataFromGithub();
  }, []);

  function fetchDataFromGithub() {
    fetch("https://api.github.com/users/MarveCodes/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  //0,10,20,30...
  const offset = currentPage * PAGE;

  const currentPageData = datas
    .slice(offset, offset + PAGE)
    .map((res, index) => {
      console.log(res);
      return (
        <div className='repoContainer' key={index}>
          <div className='repo'>
            <h2 className='repo-title'>{res.name}</h2>
            <img
              className='card-image'
              alt={res?.name?.first}
              src={res?.picture?.medium}
            />
            <a
              href={res.svn_url}
              target='_blank'
              rel='noopener noreferrer'
              className='repo-link'
            >
              Repo Link
            </a>
          </div>
        </div>
      );
    });

  //Assuming total pages here = 50
  const pageCount = Math.ceil(datas.length / PAGE);

  return (
   <> 
     <Helmet>‍
        <title>AltSchoolSSE-Marvellous</title>‍
        <meta name="description" content= "API Github fetch"></meta>
     </Helmet>
    <div className='Repos'>
      {loading && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className='loader'></div>
        </div>
      )}
      {!loading && (
        <ErrorBoundary>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <img
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              src={datas?.[0].owner?.avatar_url}
              alt='Logo'
            ></img>
            <h1> {datas?.[0].owner?.login}</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {currentPageData}
          </div>
          <ReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
          />
        </ErrorBoundary>
      )}
    </div>
   </>
  );
}
