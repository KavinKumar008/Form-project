import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaAmazon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SecondPage = () => {
  const [cname, setCname] = useState("");
  const [ctype, setCtype] = useState("");
  const [cstrength, setCstrength] = useState("");
  const [show, setShow] = useState(false);

  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();
  const item = { cname, ctype, cstrength };

  const handleSubmit = () => {
    // e.preventDefault();
    // setShow(true);
    navigate("/fourthPage", { state: data, state: item });
  };

  const handleReset = () => {
    setCname("");
    setCtype("");
    setCstrength("");
  };

  const companyValue = [
    "Select Company Type",
    "A-Stress Level Low",
    "A-Stress Level Medium",
    "A-Stress Level High",
  ];

  const companyStrengthValue = [
    "Select Team Strength",
    "Select Team Group",
    "Select Team Two",
    "Select Team Individual",
  ];

  return (
    <div>
      <main className={styles.mainContainer}>
        <section className={styles.firstSection}>
          <h1 className={styles.firstSectionHeading}>
            <FaAmazon className={styles.imgAmazon} /> Simple Flow
          </h1>
          <span className={styles.spanElement}>1/2</span>
          <p className={styles.firstCustomPara}>Customize Your Organization</p>
          <p className={styles.firstSetupPara}>
            Setup your organization for members that may join later.
          </p>
        </section>
        <section className={styles.formContainer}>
          <form className={styles.formBoxes}>
            <label htmlFor="cname" className={styles.labelTag}>
              <p className={styles.labelName}>
                Company Name<span>*</span>
              </p>
              <input
                type="text"
                id="cname"
                name="cname"
                className={styles.inputField}
                value={cname}
                onChange={(e) => setCname(e.target.value)}
              />
            </label>
            <label htmlFor="ctype" className={styles.labelTag}>
              <p className={styles.labelName}>
                Company Type<span>*</span>
              </p>
              <select
                name="ctype"
                id="ctype"
                className={styles.inputField}
                value={ctype}
                onChange={(e) => setCtype(e.target.value)}
              >
                {companyValue.map((item, index) => {
                  return (
                    <option className={styles.options} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
            <label htmlFor="cstrength" className={styles.labelTag}>
              <p className={styles.labelName}>
                Team Strength<span>*</span>
              </p>
              <select
                name="cstrength"
                id="cstrength"
                className={styles.inputField}
                value={cstrength}
                onChange={(e) => setCstrength(e.target.value)}
              >
                {companyStrengthValue.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </label>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleSubmit}
            >
              Continue
            </button>
          </form>
        </section>
        <div className={styles.resetBtn}>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className={styles.showingData}>
          {show ? (
            <>
              <li>{cname}</li>
              <li>{ctype}</li>
              <li>{cstrength}</li>
            </>
          ) : (
            <span>{show}</span>
          )}
        </div>
      </main>

      <h1>{data.mail}</h1>
      <h1>{data.password}</h1>
    </div>
  );
};

export default SecondPage;
