import Swal from "sweetalert2";
import HeadingAndTittle from "./HeadingAndTittle";
import { Helmet } from "react-helmet";

const AddScrolling = () => {
  const handleAddText = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    fetch("https://shrl-server.vercel.app/scrolling", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Scrolling Text added Successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div
      className="flex justify-center items-center min-h-[calc(100vh-464px)] "
      data-aos="fade-up"
    >
      <div className="w-full max-w-4xl">
        <HeadingAndTittle
          heading={`Add Scrolling Text`}
          tittle={`This text will scrolling in the upcoming Event tab. And top of the page`}
        />

        <div>
          <form onSubmit={handleAddText} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Scrolling Text</span>
              </label>
              <textarea
                type="text"
                name="text"
                placeholder="Scrolling Text"
                class="input input-bordered h-32"
              />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Add Text</button>
            </div>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Add Scrolling text</title>
      </Helmet>
    </div>
  );
};

export default AddScrolling;
