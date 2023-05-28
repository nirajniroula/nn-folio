import { useRef, useState } from "react";
import { Bounded } from "../../components/Bounded";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

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
        className="w-full rounded  py-3 pl-3 pr-7 placeholder-slate-400"
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
        className="h-40 w-full rounded py-3 pl-3 pr-7 placeholder-slate-400"
      />
    </Field>
  );
};
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isSending) {
      setIsSending(true);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            form?.current?.reset();
            setShowSuccessAlert(true);
            setTimeout(function () {
              setShowSuccessAlert(false);
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setShowErrorAlert(true);
            setTimeout(function () {
              setShowErrorAlert(false);
            }, 5000);
          }
        )
        .catch((error) => {
          console.log(error);
          setShowErrorAlert(true);
          setTimeout(function () {
            setShowErrorAlert(false);
          }, 5000);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <Bounded as="section" size="small" yPadding="sm" >
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6 pb-8">
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
          className={clsx(
            "ml-auto inline-flex items-center gap-2",
            isSending ? "animate-pulse" : "animate-none"
          )}
        >
          Send message
          <span
            aria-hidden={true}
            className={clsx(
              "text-xl",
              isSending ? "animate-spin" : "animate-none"
            )}
          >
            &#9655;
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
