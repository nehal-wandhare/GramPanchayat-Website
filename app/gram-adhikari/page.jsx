import React from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function GramAdhikari() {
  return (
    <>
      <GrampanchayatHeader />
      <div className="card-section">
        <div className="card-wrapper">
          <div className="gp-card">
            {/* Header */}
            <div className="gp-title">
              <div className="gp-header">
                <span>ग्रामपंचायत विहिरगांव</span>
                <p>पंचायत समिती राजुरा | जिल्हा चंद्रपूर</p>
              </div>
            </div>

            {/* Officer Section */}
            <div className="officer-box">
              <img src="/Images/gramAdhikariIcons/sachiv.jpeg" alt="Officer" />

              <div className="officer-details">
                <h2>हितेंद्र सुदाम गिरसावळे</h2>
                <p className="role">ग्रामपंचायत अधिकारी (ग्रामसेवक)</p>
                <p>कार्यरत ग्रामपंचायत : ग्रामपंचायत विहिरगांव</p>
                <p className="phone">📞 9423410040</p>
              </div>
            </div>

            <hr />

            {/* Official Info */}
            <div className="section">
              <h3>अधिकृत माहिती</h3>

              <div className="info-grid ">
                <div className="info-row">
                  <span>तालुका</span>
                  <b>राजुरा</b>
                </div>

                <div className="info-row">
                  <span>जिल्हा</span>
                  <b>चंद्रपूर</b>
                </div>
                <div className="info-row">
                  <span>पिनकोड</span>
                  <b>442905</b>
                </div>
                {/* <div className="info-row">
                  <span>ई-मेल</span>
                  <strong>gpawalgaon3403@gmail.com</strong>
                </div> */}
              </div>
            </div>

            <hr />

            {/* Duties */}
            <div className="section">
              <h4>मुख्य कर्तव्य व जबाबदाऱ्या</h4>
              <ul>
                <li>ग्रामपंचायत प्रशासनाची अंमलबजावणी</li>
                <li>ग्रामसभा आयोजन व कार्यवृत्त तयार करणे</li>
                <li>शासकीय योजना राबविणे (मनरेगा, PMAY, SBM)</li>
                <li>जन्म–मृत्यू व इतर नोंदी</li>
                <li>ग्रामपंचायत अभिलेख व्यवस्थापन</li>
              </ul>
            </div>

            <hr />

            {/* Highlights */}
            <div className="gs-section">
              <h4>आमच्या कामगिरीची झलक</h4>

              <div className="highlight-row">
                <div className="hl blue">
                  💧 <b>पाणीपुरवठा सुधारणा</b>
                  <p>नवीन नळ योजना व टाकी उभारली.</p>
                </div>

                <div className="hl green">
                  🌱 <b>स्वच्छता अभियान</b>
                  <p>SBM अंतर्गत गाव स्वच्छता.</p>
                </div>

                <div className="hl yellow">
                  🛠️ <b>देखभाल सेवा</b>
                  <p>रस्ते व नाली दुरुस्ती.</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="footer-section">
              <p>
                सदर माहिती <b>महाराष्ट्र ग्रामीण सेवा पोर्टल (GRS)</b> द्वारे
                तयार करण्यात आली आहे. <br /> © जिल्हा परिषद चंद्रपूर |
                ग्रामविकास विभाग
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <GrampanchayatFooter/>
    </>
  );
}
