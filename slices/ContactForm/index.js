import { useRef, useState } from "react";
import { Bounded } from "../../components/Bounded";
import emailjs from "@emailjs/browser";

const Field = ({ label, children }) => {
  return (
    <label>
      <p className="text-sm leading-10 text-slate-500">{label}</p>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label} className>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-40 w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};
const TEMPLATE_ID = "template_yb3uo1y";
const SERVICE_ID = "service_kurqgrd";
const PUBLIC_KEY = "gB0rOJ0pIByrlvWB6";

const ContactForm = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setShowSuccessAlert(true);
        setTimeout(function () {
          setShowSuccessAlert(false);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        setShowErrorAlert(true);
        setTimeout(function () {
          setShowErrorAlert(false);
        }, 3000);
      }
    );
  };

  return (
    <Bounded as="section" size="small" yPadding="sm">
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
        <InputField label="Name" name="user_name" placeholder="John Doe" />
        <InputField
          label="Email Address"
          name="user_email"
          type="email"
          placeholder="john.doe@example.com"
        />
        <TextareaField
          label="Message"
          name="message"
          placeholder="Write your message here…"
        />
        <button
          type="submit"
          className="ml-auto inline-flex items-center gap-2"
        >
          Send message
          <span aria-hidden={true} className="text-xl">
            &rarr;
          </span>
        </button>
      </form>

      {showSuccessAlert && (
        <div className="toast z-10">
          <div className="alert alert-success">
            <div>
              <span>Message sent successfully!</span>
            </div>
          </div>
        </div>
      )}
      {showErrorAlert && (
        <div className="toast z-10">
          <div className="alert alert-error">
            <div>
              <span>Message not sent!</span>
            </div>
          </div>
        </div>
      )}
    </Bounded>
  );
};

export default ContactForm;
