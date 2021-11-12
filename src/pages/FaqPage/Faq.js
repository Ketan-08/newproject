import React from "react";
import PageBanner from "../../components/commonComponent/PageBanner/PageBanner";
import faqData from "../../components/Data/FaqData.js";
// import FaqComponent from "../../components/FaqComponent/FaqComponent";
import "./Fag.css";

const Faq = () => {
  return (
    <div>
      <PageBanner title="faq" dontShowTitle={true} menu={true} />
      <div className="faqcont">
        {faqData.map((curElem) => {
          return (
            <div className="faqcomp">
              {/* <FaqComponent Data={curElem} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
