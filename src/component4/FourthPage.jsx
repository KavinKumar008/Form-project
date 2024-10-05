import React from "react";
import styles from "./styles.module.css";
import { FaAmazon } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useLocation } from "react-router-dom";

const FourthPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <main className={styles.mainContainer}>
        <section className={styles.firstSection}>
          <h1 className={styles.firstSectionHeading}>
            <FaAmazon className={styles.imgAmazon} /> Simple Flow
          </h1>
        </section>
        <section className={styles.tickContainer}>
          <TiTick className={styles.tickImg} />
        </section>
        <section className={styles.firstSection}>
          <p className={styles.firstCustomPara}>
            Account created successfully!
          </p>
          <p className={styles.firstSetupPara}>
            Welcome aboard! Start your success journey with Simple Flow
          </p>
        </section>
        <div className={styles.fBtn}>
          <button type="submit" className={styles.fourthPageBtn}>
            Let's Start
          </button>
        </div>
        {
          <ul>
            <li>{data.mail}</li>
            <li>{data.password}</li>
            <li>{data.cname}</li>
            <li>{data.ctype}</li>
            <li>{data.cstrength}</li>
          </ul>
        }
      </main>
    </div>
  );
};

export default FourthPage;
