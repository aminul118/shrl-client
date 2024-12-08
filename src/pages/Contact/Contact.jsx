import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
      <div className="bg-contact-bg bg-no-repeat bg-cover " data-aos="fade-up">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-400px)]">
          <HeadingAndTittle
            heading={`Get in Touch`}
            tittle={`For any inquiries, please fill out the form below and a member of our team will get back to you shortly.`}
          />
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    );
};

export default Contact;