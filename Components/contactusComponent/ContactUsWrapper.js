import React from "react";
import styles from "./css/contactus.module.css";
import ContactUsHero from "./ContactUsHero";
import ContactUsFormSection from "./ContactUsFormSection";
export default function ContactUsWrapper() {
  return (
    <>
      <div>
        <ContactUsHero />
      </div>
      <div>
        <ContactUsFormSection />
      </div>
    </>
  );
}
