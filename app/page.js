"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GrampanchayatHeader from "./Components/Header/GrampanchayatHeader";
import GrampanchayatFooter from "./Components/Footer/GrampanchayatFooter";


export default function Home() {
  const images = [
    "/Images/mainPageIcons/timelineImage.jpg",
    "/Images/mainPageIcons/timelineImage2.jpg",
    "/Images/mainPageIcons/timelineImage3.jpg",
    "/Images/mainPageIcons/timelineImage4.jpg",
    "/Images/mainPageIcons/timelineImage5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        
        <GrampanchayatHeader/>
        <div className={styles.second_container}>
          {/* Contact Strip */}
          <div className={styles.contactStrip}>
            <div className={styles.contactText}>
              ग्रामपंचायत विहिरगांव | पंचायत समिती राजुरा, जि. चंद्रपुर |
              संपर्क:- 9423410040
            </div>
          </div>

          {/* Hero Section */}
          <div className={styles.pageBg}>
            <div
              className={styles.heroSection}
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            >
              <div className={styles.heroOverlay}>
                <h1>ग्रामपंचायत "विहिरगांव"</h1>
                <p>आमच्या गावाचा सर्वांगीण विकास हेच आमचे ध्येय!</p>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.gpSection}>
          <h2 className={styles.title}>ग्रामपंचायत प्रतिनिधी</h2>

          <div className={styles.gpContainer}>
            {/* TABLE */}
            <div className={` ${styles.tableWrapper}`}>
              <table>
                <thead>
                  <tr>
                    <th>अ.क्र.</th>
                    <th>सदस्याचे नाव</th>
                    <th>पद</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>श्री. गणेश वारलु वांढरे</td>
                    <td>सदस्य</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>श्री. रवींद्र बंडू टेकाम</td>
                    <td>सदस्य</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>सौ. प्रेमलता गंगाधर बोढे</td>
                    <td>सदस्य</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>सौ. लीलाबाई तुकाराम भिवनकर</td>
                    <td>सदस्य</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>सौ. छाया बंडू मडावी</td>
                    <td>सदस्य</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>सौ. पूजा सुरेश वाघमारे</td>
                    <td>सदस्य</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <h2 className={styles.locationTitle}>
            📍 ग्रामपंचायत विहिरगांव - स्थान
          </h2>
          <p className={styles.locationSubtitle}>
            ग्रामपंचायत विहिरगांव, तालुका राजुरा, जिल्हा चंद्रपूर
          </p>

          <div className={styles.mapWrapper}>
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
        </section>

        <GrampanchayatFooter/>
      </div>
    </>
  );
}
