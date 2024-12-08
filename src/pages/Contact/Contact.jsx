import { useContext } from "react";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import ContactForm from "./ContactForm";
import { AuthContext } from "../../providers/AuthProvider";

const Contact = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div
      className={`${
        !darkMode ? "bg-contact-bg bg-no-repeat" : ""
      } bg-cover min-h-[calc(100vh-400px)]`}
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <HeadingAndTittle
          heading={`Get in Touch`}
          tittle={`For any inquiries, please fill out the form below and a member of our team will get back to you shortly.`}
        />
        <div className="w-full max-w-3xl mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
