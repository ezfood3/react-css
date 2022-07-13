import React from "react";
// import styles from "./CSSModuleTest.module.css";
import styles from "./CSSModuleTest.module.scss";
import classNames from "classnames/bind";

// CSS Module 사용시
// className = {styles.클래스이름} 형태로 사용
// :global로 정의한 클래스는
// className = "클래스이름" 형태로 사용

const cx = classNames.bind(styles);

const CSSModuleCom = () => {
  return (
    <>
      {/* className = {styles.클래스이름} */}
      <div className={styles.wrapper}>
        {/* className = "클래스이름" */}
        안녕하세요, 저는<span className="something"> CSS Module Test </span>
        입니다.
      </div>
      <br></br>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는<span className="something"> CSS Module Test </span>
        입니다.
      </div>
      <br></br>
      <div className={[styles.wrapper, styles.inverted].join(" ")}>
        안녕하세요, 저는<span className="something"> CSS Module Test </span>
        입니다.
      </div>
      <br></br>
      <div className={cx("wrapper", "inverted")}>
        안녕하세요, 저는<span className="something"> ClassNames Test </span>
        입니다.
      </div>
    </>
  );
};

export default CSSModuleCom;
