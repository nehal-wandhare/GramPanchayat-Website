"use client";

import React, { useState } from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import Grampanchayatfooter from "../Components/Footer/GrampanchayatFooter";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function SamparkPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!");

    // Clear form after success
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <>
      <GrampanchayatHeader />

      <div className="contact-page">
        <h2 className="page-title d-flex justify-content-center">
          संपर्क माहिती
        </h2>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card-address">
            <h4>📍 पत्ता</h4>
            <p>
              ग्रामपंचायत विहिरगांव <br />
              ता. राजुरा, जि. चंद्रपूर <br />
              महाराष्ट्र - 442905
            </p>
          </div>

          <div className="info-card-phone">
            <h4>📞 फोन</h4>
            <p>9423410040</p>
            <p>
              कार्यालयीन वेळ <br />
              सकाळी ९:०० ते दुपारी ५:००
            </p>
          </div>

          <div className="info-card-email">
            <h4>✉ ई-मेल</h4>
            <p></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>📞 संपर्क करा</h3>
          <p className="form-subtitle">
            तुमचे प्रश्न, सूचना आणि अभिप्राय आमच्यासाठी महत्त्वाचे आहेत.
          </p>

          <form onSubmit={handleSubmit}>
            <label>पूर्ण नाव</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>संपर्क क्रमांक</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>ई-मेल</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>पत्ता</label>
            <textarea
              rows="2"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label>संदेश</label>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">✉️ संदेश पाठवा</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="map-section">
          <h2 className="locationTitle">📍 ग्रामपंचायत विहिरगांव - स्थान</h2>
          <p className="locationSubtitle">
            ग्रामपंचायत विहिरगांव, तालुका राजुरा, जिल्हा चंद्रपूर
          </p>

          <div className="mapWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30045.156007774756!2d79.43293535604953!3d19.727753773375436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2cca6d14189c1%3A0x184fa821ff5c932e!2sVihirgaon%2C%20Maharashtra%20442905!5e0!3m2!1sen!2sin!4v1769191770058!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <GrampanchayatFooter/>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}
