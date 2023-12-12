import React from "react";
import "./benefitItem.scss";
const BenefitItem = ({ header, description, mobileHeader, classes }) => {
  const propsClassesStr = classes ? classes : "";
  const classNameStr = "benefitItem " + propsClassesStr;

  return (
    <>
      <div className={classNameStr}>
        <div className="benefitItem__header">{header}</div>
        <div className="benefitItem__mobileHeader">
          {mobileHeader ? mobileHeader : header}
        </div>
        <div className="benefitItem__description">{description}</div>
      </div>
    </>
  );
};

export default BenefitItem;
