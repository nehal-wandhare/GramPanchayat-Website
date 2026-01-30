import React from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function SarpanchPage() {
  return (
    <>
      <GrampanchayatHeader />
      <div className="sarpanch-page">
        <div className="main-card">
          {/* Header */}
          <div className="page-header">
            <div className="gp-logo">GP</div>
            <div>
              <h1>ग्रामपंचायत विहिरगांव</h1>
              <p>पंचायत समिती राजुरा जिल्हा चंद्रपूर</p>
            </div>
          </div>

          <hr className="custom-hr" />

          {/* Sarpanch Profile */}
          <div className="profile-card">
            <img
              src=" /Images/sarpanch/sarpanch.jpeg"
              alt="Sarpanch"
              className="profile-img"
            />

            <div className="profile-info">
              <h2>सन्माननीय सरपंच : श्री नीलकंठ गोविंदा खेडेकर</h2>
              <p className="quote">‘प्रत्येक नागरिकाच्या आवाजाला महत्त्व’</p>
              <p className="phone">phone no : 9823871528</p>
            </div>
          </div>

          {/* Message Section */}
          <div className="message-card my-5">
            <h3>सरपंचांचा संदेश</h3>
            <p>
              मी, <b>श्री नीलकंठ गोविंदा खेडेकर</b> , ग्रामपंचायत विहिरगांव
              नेतृत्वाची जबाबदारी स्वीकारताना हे सुनिश्चित केले आहे की,
              ग्रामपंचायतीचे दरवाजे प्रत्येक सामान्य नागरिकासाठी खुले असतील.
              माझ्या नेतृत्वाखालील कारभार ‘ऑफिस-केंद्रित नसून, जनता-केंद्रित’
              आहे.
            </p>
          </div>
        </div>
      </div>

      <div className="upsarpanch-page">
        <div className="upsarpanch-container">
          {/* Header */}
          <div className="upsarpanch-header">
            <div className="gp-badge">GP</div>

            <div className="header-text">
              <h1>ग्रामपंचायत विहिरगांव</h1>
              <p>पंचायत समिती राजुरा जिल्हा चंद्रपूर</p>
            </div>
          </div>

          <hr className="custom-hr" />

          {/* Profile Card */}
          <div className="profile-highlight">
            <img
              src="/Images/sarpanch/upsarpanch.jpeg"
              alt="Up Sarpanch"
              className="profile-photo"
            />

            <div className="profile-details">
              <h2>सन्माननीय उपसरपंच: श्री रामभाऊ पंढरीनाथ देवईकर </h2>
              <p className="profile-quote">‘तुमचा अनुभव, माझ्या कामाची दिशा’</p>
              <p className="profile-phone">phone no : 9552800495</p>
            </div>
          </div>

          {/* Message Section */}
          <div className="message-box">
            <h3>उपसरपंचांचा संदेश</h3>
            {/* <hr className="section-hr" /> */}

            <p>
              मी, <b>श्री रामभाऊ पंढरीनाथ देवईकर</b> , ग्रामपंचायत विहिरगांव
              गावकऱ्यांशी सतत संवाद साधण्यावर विश्वास ठेवतो. उपसरपंच म्हणून,
              माझी जबाबदारी केवळ प्रशासकीय कामे पाहण्याची नाही, तर प्रत्येक
              वयोगटातील नागरिकांच्या समस्या समजून घेऊन त्या सोडवण्याची आहे.
            </p>
          </div>
        </div>
      </div>
      <GrampanchayatFooter/>
    </>
  );
}
