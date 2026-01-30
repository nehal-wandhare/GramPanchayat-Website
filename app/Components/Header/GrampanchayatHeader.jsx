"use client";

import React, { useEffect } from "react";
import "./GrampanchayatHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

export default function GrampanchayatHeader() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="header-container">
      {/* Top Bar */}
      <div className="topBar">
        <span>ग्रामपंचायत विहिरगांव | पंचायत समिती राजुरा, जि. चंद्रपूर</span>
      </div>

      {/* Header */}
      <div className="container-fluid headerSection">
        <div className="header-side"></div>
        <div className=" d-flex justify-content-center flex-column gap-3 header-center">
          <div className=" text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="Ashoka Emblem"
              className="emblem"
            />
          </div>

          <div className="text-center">
            <div className="titleBox">
              <h1>ग्रामपंचायत विहिरगांव</h1>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-end leaders">
          <img src="/Images/headerIcons/raje.jpg" alt="leader" />
          <img src="/Images/headerIcons/gm.jpg" alt="leader" />
          <img src="/Images/headerIcons/tujdojimaharaj.jpeg" alt="leader" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light customNav">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gpNavbar"
            aria-controls="gpNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="gpNavbar">
            <ul className="navbar-nav mx-auto text-center gap-4">
              <li className="nav-item">
                <Link className="nav-link navLink" href="/">
                  मुख्य पृष्ठ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/grampanchayatInfo">
                  ग्रामपंचायत-बद्दल
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/gram-adhikari">
                  ग्रामपंचायत-अधिकारी
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/sarpanch">
                  सरपंच / उपसरपंच
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/karmachari">
                  सदस्य / कर्मचारी
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/gramSabha">
                  ग्रामसभा
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle navLink"
                  href="#"
                  id="dakhaleDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  दाखले
                </Link>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="dakhaleDropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="/birth-certificate">
                      जन्म दाखला
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/death-certificate">
                      मृत्यू दाखला
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/marriage-certificate"
                    >
                      विवाह दाखला
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link navLink" href="/vikas">
                  विकास कामे
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/chayaChitra">
                  छायाचित्र
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navLink" href="/sampark">
                  संपर्क
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
