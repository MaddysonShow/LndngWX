import React from "react";
import BenefitItem from "../BenefitItem/BenefitItem";
import OfferBtn from "../../ui/OfferBtn/OfferBtn";
import "./benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__title">
        Вместе с
        <span className="benefits__title--highlighted">
          {" "}
          бесплатной
          <br />
          консультацией{" "}
        </span>
        мы дарим:
      </div>

      <div className="benefits__grid">
        <BenefitItem
          header="Виджеты"
          mobileHeader="30 виджетов"
          description="30 готовых решений"
          classes="benefitItem--mobileOrder-1"
        />
        <BenefitItem
          header="Dashboard"
          classes="benefitItem--mobileOrder-2"
          description="с показателями вашего бизнеса"
        />
        <BenefitItem
          header="Skype Аудит"
          description="отдела продаж и CRM системы"
          classes="benefitItem--mobileOrder-0"
        />
        <BenefitItem
          header="35 дней"
          mobileHeader="месяц amocrm"
          description="использования CRM"
          classes="benefitItem--mobileOrder-3"
        />
      </div>

      <OfferBtn text="Получить консультацию" />
    </section>
  );
};

export default Benefits;
