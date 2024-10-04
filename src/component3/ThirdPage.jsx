import React from "react";
import styles from "./styles.module.css";
import { FaAmazon } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { GiSchoolBag } from "react-icons/gi";
import { HiOutlineUpload } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";

const ThirdPage = () => {
  const buttonValue = ["Upload Logo", "Edit Logo"];
  return (
    <div>
      <main className={styles.mainContainer}>
        <p className={styles.back}>
          <IoIosArrowBack className={styles.arrowBack} />
          Back
        </p>
        <section className={styles.firstSection}>
          <h1 className={styles.firstSectionHeading}>
            <FaAmazon className={styles.imgAmazon} /> Simple Flow
          </h1>
          <span className={styles.spanElement}>2/2</span>
          <p className={styles.firstCustomPara}>Customize Your Organization</p>
          <p className={styles.firstSetupPara}>
            Setup your organization for members that may join later.
          </p>
        </section>
        <section className={styles.bagContainer}>
          <GiSchoolBag className={styles.bagImg} />
        </section>
        <section className={styles.twoBtns}>
          {/* {buttonValue.map((item, index) => {
            <div key={index}>
              <button className={styles.logoBtn}>
                <HiOutlineUpload className={styles.image} />
                {item}
              </button>
              ;
            </div>;
          })} */}
          <button className={styles.logoBtn}>
            <HiOutlineUpload className={styles.image} />
            Upload Logo
          </button>
          <button className={styles.logoBtn}>
            <FiEdit3 className={styles.image} />
            Edit Logo
          </button>
        </section>
        <div className={styles.btns}>
          <button type="submit" className={styles.thrdPageBtn}>
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default ThirdPage;
