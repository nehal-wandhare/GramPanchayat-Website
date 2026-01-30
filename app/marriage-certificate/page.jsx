"use client";

import React, { useState } from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import Grampanchayatfooter from "../Components/Footer/GrampanchayatFooter";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function MarriageCertificate() {
  const [form, setForm] = useState({
    groomName: "",
    brideName: "",
    marriageDate: "",
    marriagePlace: "",
    certificateNumber: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      !form.groomName ||
      !form.brideName ||
      !form.marriageDate ||
      !form.marriagePlace ||
      !form.certificateNumber
    ) {
      alert("कृपया सर्व माहिती भरा");
      return;
    }

    setRecords([...records, form]);

    setForm({
      groomName: "",
      brideName: "",
      marriageDate: "",
      marriagePlace: "",
      certificateNumber: "",
    });
  };

  return (
    <>
      <GrampanchayatHeader />

      <div className="marriage-container">
        <h2 className="marriage-title">
          विवाह दाखला <span>(Marriage Certificate)</span>
        </h2>

        <p className="marriage-subtitle">
          येथे विवाह प्रमाणपत्राची नोंद केली जाते.
        </p>

        <div className="form-card">
          <input
            type="text"
            name="groomName"
            placeholder="वधूचे नाव"
            value={form.groomName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="brideName"
            placeholder="वराचे नाव"
            value={form.brideName}
            onChange={handleChange}
          />

          <input
            type="date"
            name="marriageDate"
            value={form.marriageDate}
            onChange={handleChange}
          />

          <input
            type="text"
            name="marriagePlace"
            placeholder="विवाहाचे ठिकाण"
            value={form.marriagePlace}
            onChange={handleChange}
          />

          <input
            type="text"
            name="certificateNumber"
            placeholder="प्रमाणपत्र क्रमांक"
            value={form.certificateNumber}
            onChange={handleChange}
          />

          <button type="button" onClick={handleAdd} className="marriage-btn">
            नोंद जोडा
          </button>
        </div>
      </div>

      {/* Records Section */}
      <div className="records">
        <h4>📄 नोंदवलेले विवाह दाखले:</h4>

        {records.length === 0 ? (
          <p className="empty-text">अजून कोणतीही नोंद नाही.</p>
        ) : (
          records.map((item, index) => (
            <div className="record" key={index}>
              {item.groomName} &amp; {item.brideName} — {item.marriageDate} —{" "}
              {item.marriagePlace} — {item.certificateNumber}
            </div>
          ))
        )}
      </div>

      <GrampanchayatFooter/>
    </>
  );
}
