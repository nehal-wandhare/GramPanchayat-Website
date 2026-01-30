import React from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function CommitteePage() {
  const members = [
    {
      name: "श्री. गणेश वारलु वांढरे",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 9765233515",
      image: "/images/member1.jpg",
    },
    {
      name: "श्री. रवींद्र बंडू टेकाम",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 7597468352",
      image: "/images/member2.jpg",
    },
    {
      name: "सौ. प्रेमलता गंगाधर बोढे",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 9623837574",
      image: "/images/member3.jpg",
    },
    {
      name: "सौ. लीलाबाई तुकाराम भिवनकर",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 8888979670",
      image: "/images/member3.jpg",
    },
    {
      name: "सौ. छाया बंडू मडावी",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 8766539837",
      image: "/images/member3.jpg",
    },
    {
      name: "सौ. पूजा सुरेश वाघमारे",
      role: "ग्रामपंचायत सदस्य",
      phone: "+91 7972989124",
      image: "/images/member3.jpg",
    },
    {
      name: "श्री. रुपेश मनोहर धुडसे",
      role: "ग्रामपंचायत कर्मचारी",
      phone: "+91 8459785349",
      image: "/Images/karmachariIcons/dhudase.jpeg",
    },
    {
      name: "श्री. सोमेश्वर नामदेव शेंडे",
      role: "ग्रामपंचायत कर्मचारी",
      phone: "+91 9579624438",
      image: "/Images/karmachariIcons/shende.jpeg",
    },
    {
      name: "श्री. हितेश छबन बोबडे",
      role: "ग्रामपंचायत कर्मचारी",
      phone: "+91 9370655793",
      image: "/Images/karmachariIcons/hitesh.jpeg",
    },
    {
      name: "श्री. नितिन होरे",
      role: "ग्रामपंचायत कर्मचारी",
      phone: "+91 7972989124",
      image: "/Images/karmachariIcons/hore.jpeg",
    },

    // 👉 Add remaining members here
  ];
  return (
    <>
      <GrampanchayatHeader />
      <div className="committee-container">
        {/* Header */}
        <div className="committee-header">
          <img
            src="/Images/karmachariIcons/emblem.jpg"
            alt="Ashoka Emblem"
            className="emblem"
          />
          <h2>ग्रामपंचायत कार्यकारी समिती</h2>
          <p>The Governing Body — Committed to Community Service</p>
        </div>

        {/* Cards */}
        <div className="committee-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-image">
                <img src={member.image} alt="" />
              </div>

              <h4>{member.name}</h4>

              <span className="role">{member.role}</span>

              <div className="phone">📞 {member.phone}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="committee-footer">
          © 2025 Gram Panchayat — All Rights Reserved.
        </footer>
      </div>

      <GrampanchayatFooter/>
    </>
  );
}
