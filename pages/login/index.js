import React from "react";
import { loginInputs } from "../../jsonData/FormInput_data";
import style from "../../styles/authfrom.module.css";
import FormComponent from "../../utilsComponents/form/FormComponent";
import Layout from "../../Components/layouts/Layout";
import { loginAccount } from "../../Actions/authAction";

export default function Login() {
  return (
    <>
      <Layout>
        <div className={style.page_mainContainer}>
          <div className={style.form_mainContainer}>
            <FormComponent
              formTitle="LOGIN"
              btnText={"LOGIN"}
              styles={style}
              customInputs={loginInputs}
              apiFunction={loginAccount}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
