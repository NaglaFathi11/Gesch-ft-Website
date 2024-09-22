import contactStyle from "./Contact.module.css";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactDetails from "./ContactDetails/ContactDetails";
import { useState } from "react";
import * as yup from "yup";
import Breadcrumb from "../../Components/BreadCrumbs/BreadCrumbs";
import SuccessfulMessage from "./SuccessfulMessage/SuccessfulMessage";

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState({
    userName: "",
    email: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});

  const userSchema = yup.object().shape({
    userName: yup
      .string()
      .min(4, "User name must be at least 4 characters")
      .required("This field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("This field is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(100, "Message cannot exceed 100 characters")
      .required("This field is required"),
    subject: yup.string().optional(),
  });
  const [successfulMessage, setSuccessfulMessage] = useState(false);

  function updateSuccessfulMessage() {
    setSuccessfulMessage();
  }

  async function submissionForm(event) {
    event.preventDefault();

    try {
      await userSchema.validate(formInputs, { abortEarly: false });
      setErrors({});
      setFormInputs({
        userName: "",
        email: "",
        message: "",
        subject: "",
      });
      setSuccessfulMessage(true);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
        setErrors(validationErrors);
      });
    }
  }

  function handleOnChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFormInputs({ ...formInputs, [name]: value });
  }

  return (
    <>
      <Breadcrumb title={"contact"} />
      <ContactHeader />
      <div className={contactStyle.contactContainer}>
        <ContactDetails />
        <div className={contactStyle.contactForm}>
          <form onSubmit={submissionForm}>
            <div className={contactStyle.formContentWrapper}>
              <label htmlFor="userName" className={contactStyle.label}>
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                id="userName"
                value={formInputs.userName}
                name="userName"
                onChange={handleOnChange}
                className={
                  errors.userName
                    ? contactStyle.inputError
                    : contactStyle.inputSuccess
                }
              />
              {errors.userName && (
                <p className={contactStyle.error}>{errors.userName}</p>
              )}
            </div>

            <div className={contactStyle.formContentWrapper}>
              <label htmlFor="email" className={contactStyle.label}>
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                id="email"
                value={formInputs.email}
                name="email"
                onChange={handleOnChange}
                className={
                  errors.email
                    ? contactStyle.inputError
                    : contactStyle.inputSuccess
                }
              />
              {errors.email && (
                <p className={contactStyle.error}>{errors.email}</p>
              )}
            </div>

            <div className={contactStyle.formContentWrapper}>
              <label htmlFor="subject" className={contactStyle.noAsterisk}>
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                id="subject"
                value={formInputs.subject}
                name="subject"
                onChange={handleOnChange}
              />
            </div>

            <div className={contactStyle.formContentWrapper}>
              <label htmlFor="message" className={contactStyle.label}>
                Message
              </label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                id="message"
                value={formInputs.message}
                name="message"
                onChange={handleOnChange}
                className={
                  errors.message
                    ? contactStyle.inputError
                    : contactStyle.inputSuccess
                }
              ></textarea>
              {errors.message && (
                <p className={contactStyle.error}>{errors.message}</p>
              )}
            </div>

            <button type="submit" className={contactStyle.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <SuccessfulMessage
        successfulMessage={successfulMessage}
        updateSuccessfulMessage={updateSuccessfulMessage}
      />
    </>
  );
};

export default ContactForm;
