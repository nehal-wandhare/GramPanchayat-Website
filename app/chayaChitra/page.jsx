import React from "react";
import "./page.css";
import GrampanchayatHeader from "../Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "../Components/Footer/GrampanchayatFooter";

export default function PhotoGallery() {
  const photos = [
    { id: 1, img: "/Images/chayaIcons/img1.jpeg" },
    { id: 2, img: " /Images/chayaIcons/img2.jpeg " },
    { id: 3, img: " /Images/chayaIcons/img3.jpeg " },
    { id: 4, img: " /Images/chayaIcons/img4.jpeg " },
    { id: 5, img: " /Images/chayaIcons/img5.jpeg " },
    { id: 6, img: " /Images/chayaIcons/img6.jpeg " },
    { id: 7, img: " /Images/chayaIcons/img7.jpeg " },
    { id: 8, img: " /Images/chayaIcons/img8.jpeg " },
    { id: 9, img: " /Images/chayaIcons/img9.jpeg " },
    { id: 10, img: " /Images/chayaIcons/img10.jpeg " },
    { id: 11, img: " /Images/chayaIcons/img11.jpeg " },
    { id: 12, img: " /Images/chayaIcons/img12.jpeg " },
  ];

  return (
    <>
      <GrampanchayatHeader />
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2>📸 गावाचा विकास – छायाचित्रांतून</h2>

          <button className="gallery-btn">📄 प्रमाणपत्रे पहा</button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-card" key={photo.id}>
              <img src={photo.img} alt="Village Development" />
            </div>
          ))}
        </div>
      </div>
      <GrampanchayatFooter/>
    </>
  );
}
