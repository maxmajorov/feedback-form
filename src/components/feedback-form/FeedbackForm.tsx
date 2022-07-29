import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "../../common/components/Button/Button";
import { Title } from "../../common/components/Title/Title";
import classes from "./FeedbackForm.module.scss";
import axios from "axios";
import { handlePhoneInput } from "../../utils/phone-mask";

type FeedbackFormPropsType = {
  setStatus: (status: null | string) => void;
};

export const FeedbackForm: React.FC<FeedbackFormPropsType> = ({
  setStatus,
}) => {
  const [btnDisable, setBtnDisable] = useState(false);

  const formik = useFormik({
    initialValues: {
      sender: "",
      email: "",
      phone: "",
      birthday: "",
      textMessage: "",
    },

    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.sender) {
        errors.sender = "Required";
      } else if (
        !/^([a-zA-Z]+){3,30}\s([a-zA-Z]+){3,30}$/gm.test(values.sender)
      ) {
        errors.sender = "Invalid name";
      }

      if (!values.phone) {
        errors.phone = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.birthday) {
        errors.birthday = "Required";
      }

      if (!values.textMessage) {
        errors.textMessage = "Required";
      } else if (values.textMessage.length < 10) {
        errors.textMessage = "The message length is less than 10 characters";
      } else if (values.textMessage.length > 300) {
        errors.textMessage = "Long message! Use less than 300 characters";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setBtnDisable(true);
      axios
        .post("https://gmail-smtp-nodejs.herokuapp.com/send-message", values)
        .then((res) => {
          setStatus(res.data);
          setBtnDisable(false);
        });

      formik.resetForm();
    },
  });

  return (
    <section id="contacts" className={classes.contactsBlock}>
      <div className={classes.container}>
        <Title title="get in touch" />
        <div className={classes.inputField}>
          <div className={classes.col_8}>
            <form
              onSubmit={formik.handleSubmit}
              className={classes.form}
              noValidate
            >
              <div className={classes.formRow}>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      id="sender"
                      type="text"
                      name="sender"
                      placeholder="First name / Last name"
                      onChange={formik.handleChange}
                      value={formik.values.sender.toUpperCase()}
                      className={classes.formInput}
                    />
                    {formik.touched.sender && formik.errors.sender ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.sender}
                      </div>
                    ) : null}
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+7(999)999-99-99"
                      onChange={formik.handleChange}
                      value={handlePhoneInput(formik.values.phone)}
                      className={classes.formInput}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div
                        style={{ top: "145px" }}
                        className={classes.errorMessage}
                      >
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_6}>
                  <div className={classes.formGroup}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className={classes.formInput}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.email}
                      </div>
                    ) : null}

                    <input
                      id="birthday"
                      type="date"
                      name="birthday"
                      placeholder="Birthday"
                      className={classes.formInput}
                      onChange={formik.handleChange}
                      value={formik.values.birthday}
                    />
                    {formik.touched.birthday && formik.errors.birthday ? (
                      <div
                        style={{ top: "145px" }}
                        className={classes.errorMessage}
                      >
                        {formik.errors.birthday}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_12}>
                  <div className={classes.formGroup}>
                    <textarea
                      id="textMessage"
                      name="textMessage"
                      placeholder="Your message"
                      className={classes.formInput}
                      onChange={formik.handleChange}
                      value={formik.values.textMessage}
                      maxLength={301}
                    />
                    {formik.touched.textMessage && formik.errors.textMessage ? (
                      <div className={classes.errorMessage}>
                        {formik.errors.textMessage}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes.col_12}>
                  <Button disabled={btnDisable} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==== TYPES ====

type FormikErrorType = {
  sender?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  textMessage?: string;
};
