import React from "react";
import style from "../../styles/authfrom.module.css";
import FormComponent from "../../utilsComponents/form/FormComponent";
import Layout from "../../Components/layouts/Layout";
import { singUpNewAccount } from "../../Actions/authAction";

export default function SignUp() {
  return (
    <>
      <Layout>
        <div className={style.page_mainContainer}>
          <div className={style.form_mainContainer}>
            <FormComponent
              formTitle="REGISTER"
              btnText={"SIGN UP"}
              styles={style}
              apiFunction={singUpNewAccount}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
