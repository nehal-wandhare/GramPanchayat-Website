"use client";

import React, { useState } from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function SabhaPage() {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const emptyForm = {
    date: "",
    time: "",
    venue: "",
    agenda: "",
    notes: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const [records, setRecords] = useState([
    {
      date: "2025-11-10",
      time: "05:00",
      venue: "ग्रामपंचायत भवन",
      agenda: "पाणी पुरवठा आणि रस्ते दुरुस्ती",
      notes: "समाप्तीपर्यंत उपस्थित राहावे",
    },
    {
      date: "2025-12-05",
      time: "10:30",
      venue: "कार्यालय सभा कक्ष",
      agenda: "अर्थसंकल्प मंजुरी",
      notes: "वकील आणि लेखापाल सहभागी",
    },
  ]);

  /* OPEN NEW FORM */
  const handleAddNew = () => {
    setFormData(emptyForm);
    setEditIndex(null);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "तुम्हाला ही नोंद खरंच हटवायची आहे का?",
    );

    if (confirmDelete) {
      const updatedRecords = records.filter((_, i) => i !== index);
      setRecords(updatedRecords);
    }
  };

  /* OPEN EDIT FORM */
  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* SAVE / UPDATE */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = formData;
      setRecords(updated);
    } else {
      setRecords([...records, formData]);
    }

    setShowForm(false);
    setFormData(emptyForm);
    setEditIndex(null);
  };

  return (
    <>
      <GrampanchayatHeader />
      <div className="sabha-page">
        <div className="sabha-container">
          {/* HEADER */}
          <div className="sabha-header">
            <h2>सर्व माहिती</h2>
            <div className="header-actions">
              <input type="text" placeholder="शोधा (तारीख/स्थळ/अजेंडा)" />
              <button
                className={showForm ? "cancel-btn" : "primary-btn"}
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "फॉर्म बंद करा" : "नवीन सभा जोडा"}
              </button>
            </div>
          </div>

          <hr className="section-divider" />

          {/* FORM */}
          {showForm && (
            <form className="sabha-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>तारीख</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>वेळ</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label>स्थळ / Venue</label>
              <input
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="उदा. ग्रामपंचायत भवन"
                required
              />

              <label>अजेंडा</label>
              <input
                name="agenda"
                value={formData.agenda}
                onChange={handleChange}
                placeholder="उदा. पाणी पुरवठा, रस्ते"
                required
              />

              <label>नोंद</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="उदा. सभाप्रतिनिधी उपस्थित राहावे"
              />

              <div className="form-actions">
                {editIndex !== null ? (
                  <>
                    <button type="submit" className="update-btn">
                      अद्यतनित करा
                    </button>

                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => {
                        setShowForm(false);
                        setEditIndex(null);
                        setFormData(emptyForm);
                      }}
                    >
                      रद्द करा
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="add-btn">
                      सभा जोडा
                    </button>

                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setShowForm(false)}
                    >
                      रद्द करा
                    </button>
                  </>
                )}
              </div>
            </form>
          )}

          {/* TABLE */}
          <div className="table-wrapper">
            <table className="sabha-table">
              <thead>
                <tr>
                  <th>तारीख</th>
                  <th>वेळ</th>
                  <th>स्थळ</th>
                  <th>अजेंडा</th>
                  <th>नोंद</th>
                  <th>कृती</th>
                </tr>
              </thead>

              <tbody>
                {records.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.venue}</td>
                    <td>{item.agenda}</td>
                    <td>{item.notes}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        सुधारणा
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        डिलीट
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <GrampanchayatFooter/>
    </>
  );
}
