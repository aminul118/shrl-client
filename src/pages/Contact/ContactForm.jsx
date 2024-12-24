import emailjs from "emailjs-com"; // Correct package for React
import Swal from "sweetalert2";

const ContactForm = () => {
  const handleEmail = (e) => {
    e.preventDefault();

    // Collect form data
    const form = new FormData(e.target);
    const first = form.get("first");
    const last = form.get("last");
    const phone = form.get("phone");
    const email = form.get("email");
    const message = form.get("message");

    // Send email using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_ServiceId,
        import.meta.env.VITE_TemplateId,

        e.target, // The form element
        import.meta.env.VITE_PublicKey
      )
      .then(
        (result) => {
          //   console.log("SUCCESS!", result.text);
          Swal.fire({
            title: "Good job!",
            text: "Email sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          //   console.log("FAILED...", error.text);
          Swal.fire({
            title: "So Sad!",
            text: "Something went wrong! Try again",
            icon: "error",
          });
        }
      );
  };

  return (
    <div>
      <form
        onSubmit={handleEmail}
        className="grid md:grid-cols-2 gap-4 px-6 py-3 max-w-3xl w-full mx-auto"
      >
        <input
          type="text"
          name="first"
          placeholder="First Name *"
          className="px-6 py-3 rounded-full w-full"
          required
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name *"
          className="px-6 py-3 rounded-full w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          className="px-6 py-3 rounded-full w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="px-6 py-3 rounded-full w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Message *"
          className="px-6 py-3 rounded-lg w-full h-48 md:col-span-2 resize-none"
          required
        />
        <button type="submit" className="btn btn-warning md:col-span-2">
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
