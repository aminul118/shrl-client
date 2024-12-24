import Swal from "sweetalert2";
import HeadingAndTittle from "./HeadingAndTittle";
import { Helmet } from "react-helmet";
import axios from "axios";

const AddScrolling = () => {
  const handleAddText = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/scrolling`,
        {
          text,
        }
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Scrolling Text added Successfully!",
          icon: "success",
        });
        e.target.reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add scrolling text.",
        icon: "error",
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-[calc(100vh-464px)]"
      data-aos="fade-up"
    >
      <div className="w-full max-w-4xl">
        <HeadingAndTittle
          heading="Add Scrolling Text"
          tittle="This text will scroll in the upcoming Event tab and at the top of the page."
        />

        <div>
          <form onSubmit={handleAddText} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Scrolling Text</span>
              </label>
              <textarea
                name="text"
                placeholder="Scrolling Text"
                className="input input-bordered h-32"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Text
              </button>
            </div>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Add Scrolling Text</title>
      </Helmet>
    </div>
  );
};

export default AddScrolling;
