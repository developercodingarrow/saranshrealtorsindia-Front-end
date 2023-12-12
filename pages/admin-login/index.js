import React from "react";
import { adminloginInputs } from "../../jsonData/FormInput_data";
import style from "../../utilsComponents/form/css/authfrom.module.css";
import FormComponent from "../../utilsComponents/form/FormComponent";
import Layout from "../../Components/layouts/Layout";
import { adminLogin } from "../../Actions/authAction";

export default function LoginAdminPage() {
  return (
    <>
      <Layout>
        <div className={style.page_mainContainer}>
          <div className={style.form_mainContainer}>
            <FormComponent
              formTitle="ADMIN LOGIN"
              btnText={"LOGIN"}
              styles={style}
              customInputs={adminloginInputs}
              apiFunction={adminLogin}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
