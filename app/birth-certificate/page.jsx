"use client";

import React, { useState } from "react";
import "./page.css";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";


export default function BirthCertificate() {
  const [form, setForm] = useState({
    childName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    birthPlace: "",
  });

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      !form.childName ||
      !form.fatherName ||
      !form.motherName ||
      !form.dateOfBirth ||
      !form.birthPlace
    ) {
      alert("कृपया सर्व माहिती भरा");
      return;
    }

    setList([...list, form]);

    setForm({
      childName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      birthPlace: "",
    });
  };

  return (
    <>
      <GrampanchayatHeader/>
      <div className="birth-container">
        <h2 className="title">जन्म दाखला (Birth Certificate)</h2>
        <span>
          ग्रामपंचायतीकडून दिलेल्या जन्म प्रमाणपत्राची नोंद येथे करता येईल.
        </span>

        <div className="form-card">
          <input
            type="text"
            name="childName"
            placeholder="मुलाचे पूर्ण नाव"
            value={form.childName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="fatherName"
            placeholder="वडिलांचे नाव"
            value={form.fatherName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="motherName"
            placeholder="आईचे नाव"
            value={form.motherName}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
          />

          <input
            type="text"
            name="birthPlace"
            placeholder="जन्मस्थान"
            value={form.birthPlace}
            onChange={handleChange}
          />

          <button type="button" onClick={handleAdd}>
            नोंद जोडा
          </button>
        </div>
      </div>
      <div className="records">
        <h4>📄 नोंदवलेले जन्म दाखले:</h4>

        {list.length === 0 ? (
          <p className="empty-text">अजून कोणतीही नोंद नाही.</p>
        ) : (
          list.map((item, index) => (
            <div className="record" key={index}>
              {item.childName} — {item.dateOfBirth} — {item.birthPlace}
            </div>
          ))
        )}
      </div>

      <GrampanchayatFooter/>
    </>
  );
}
