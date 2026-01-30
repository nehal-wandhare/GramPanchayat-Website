"use client";

import React, { useState } from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function DeathCertificate() {
  const [form, setForm] = useState({
    deceasedName: "",
    guardianName: "",
    dateOfDeath: "",
    placeOfDeath: "",
    causeOfDeath: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      !form.deceasedName ||
      !form.guardianName ||
      !form.dateOfDeath ||
      !form.placeOfDeath ||
      !form.causeOfDeath
    ) {
      alert("कृपया सर्व माहिती भरा");
      return;
    }

    setRecords([...records, form]);

    setForm({
      deceasedName: "",
      guardianName: "",
      dateOfDeath: "",
      placeOfDeath: "",
      causeOfDeath: "",
    });
  };

  return (
    <>
      <GrampanchayatHeader />
      <div className="death-container">
        <h2 className="death-title">
          मृत्यू दाखला <span>(Death Certificate)</span>
        </h2>

        <p className="death-subtitle">
          ग्रामपंचायतीकडून दिलेल्या मृत्यू प्रमाणपत्राची नोंद येथे केली जाते.
        </p>

        <div className="form-card">
          <input
            type="text"
            name="deceasedName"
            placeholder="मृत व्यक्तीचे नाव"
            value={form.deceasedName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="guardianName"
            placeholder="वडिलांचे / पालकांचे नाव"
            value={form.guardianName}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dateOfDeath"
            value={form.dateOfDeath}
            onChange={handleChange}
          />

          <input
            type="text"
            name="placeOfDeath"
            placeholder="मृत्यूचे ठिकाण"
            value={form.placeOfDeath}
            onChange={handleChange}
          />

          <input
            type="text"
            name="causeOfDeath"
            placeholder="मृत्यूचे कारण"
            value={form.causeOfDeath}
            onChange={handleChange}
          />

          <button type="button" onClick={handleAdd} className="death-btn">
            नोंद जोडा
          </button>
        </div>
      </div>

      {/* Records Section */}
      <div className="records">
        <h4>📄 नोंदवलेले मृत्यू दाखले:</h4>

        {records.length === 0 ? (
          <p className="empty-text">अजून कोणतीही नोंद नाही.</p>
        ) : (
          records.map((item, index) => (
            <div className="record" key={index}>
              {item.deceasedName} — {item.guardianName} — {item.dateOfDeath} —{" "}
              {item.placeOfDeath} — {item.causeOfDeath}
            </div>
          ))
        )}
      </div>

      <GrampanchayatFooter/>
    </>
  );
}
