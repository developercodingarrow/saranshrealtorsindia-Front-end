import React from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../form/FormInput";
import toast, { Toaster } from "react-hot-toast";
import { singUpNewAccount, authenticate } from "../../Actions/authAction";
import AuthBtn from "../buttons/AuthBtn";

export default function FormComponent(props) {
  const router = useRouter();
  const { formTitle, customInputs, btnText, styles, apiFunction } = props;
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "all", // Use "onChange" mode for real-time validation as the user types
  });

  const handleFormSubmit = async (formdata) => {
    try {
      const jsonData = JSON.stringify(formdata);
      // This function pass as props
      const result = await apiFunction(formdata);
      const { data } = result;

      if (data.status === "Success") {
        toast.success(data.message);

        // ONly For LOGIN PAGE
        if (data.apiFor === "Login") {
          authenticate(data, () => {
            router.push("/super-admin");
          });
        }
      } else if (data.status === "error") {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const SignUpInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "User Name",
      lable: "Name",
      validation: {
        required: "Name is required.",
      },
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "email",
      lable: "email",
      validation: {
        required: "Email is required.",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address.",
        },
      },
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      lable: "password",
      validation: {
        required: "Password is required.",
      },
    },
    {
      id: 4,
      name: "passwordConfirm",
      type: "text",
      placeholder: "Confirm password",
      lable: "Confirm password",
      validation: {
        required: "Confirm Password is required.",
        validate: (value) =>
          value === watch("password") || "Passwords do not match.",
      },
    },
  ];

  const inputsToRender = customInputs ? customInputs : SignUpInputs;
  return (
    <>
      <Toaster position="top-right" />
      <div className={styles.FormTitle}>
        <h3>{formTitle}</h3>
      </div>
      <div className={styles.form_filedContainer}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {inputsToRender.map((input) => {
            return (
              <div className={styles.filedBox} key={input.id}>
                <Controller
                  name={input.name}
                  control={control}
                  defaultValue=""
                  rules={input.validation}
                  render={({ field }) => (
                    <>
                      <FormInput
                        key={input.id}
                        {...input}
                        {...field}
                        labelClassName={styles.form_lable} // CSS class for the label
                        inputClassName={styles.from_input}
                      />
                      {errors[input.name] && (
                        <p className={styles.error}>
                          {errors[input.name].message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            );
          })}
          <div>
            <AuthBtn className={styles.btn} type="submit" disabled={!isValid}>
              {btnText}
            </AuthBtn>
          </div>
        </form>
      </div>
    </>
  );
}
