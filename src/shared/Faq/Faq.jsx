import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Importing icons from react-icons
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";

const Faq = () => {
  // State to manage the active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Toggle the accordion open/close
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-2 lg:px-0" >
    
        <div>
         <HeadingAndTittle heading={`FAQ Section`}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center ">
          {/* Left */}
          <div>
            <img
              className="w-[600px] mx-auto my-8"
              src="https://i.ibb.co/k9D8KqW/faq.png"
              alt="FAQ"
            />
          </div>

          {/* Right */}
          <div>
            {/* 1st */}
            <div className="mt-8 ">
              <div
                className="text-xl font-medium cursor-pointer flex items-center"
                onClick={() => toggleAccordion(0)}
              >
                <span>Why join the SHRL?</span>
                <div className="ml-2">
                  {activeIndex === 0 ? (
                    <AiOutlineMinus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              {activeIndex === 0 && (
                <div className="mt-2">
                  <p>
                    Scopes for medical professionals: SHRL provides a unique
                    opportunity for networking and developing evidence-based
                    knowledge and skills with proper tools. Check out{" "}
                    <strong className="text-blue-600 underline">
                      <a href="./services.html">Our Key Services</a>
                    </strong>{" "}
                    to learn more.
                  </p>
                  <br />
                  <p>
                    Scopes for patients and aware citizens: You have the
                    opportunity to empower yourself with knowledge to maintain
                    maternal and child health in the most evidence-based
                    approach.
                  </p>
                </div>
              )}
            </div>

            {/* 2nd */}
            <div className="mt-8">
              <div
                className="text-xl font-medium cursor-pointer flex items-center"
                onClick={() => toggleAccordion(1)}
              >
                <span>How to join SHRL?</span>
                <div className="ml-2">
                  {activeIndex === 1 ? (
                    <AiOutlineMinus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              {activeIndex === 1 && (
                <div className="mt-2">
                  <p>Fill out the following form to join our team.</p>
                  <p>
                    <strong className="underline text-blue-600">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScRMCIkgGCYeqs_m6Ak6b67jIVFZ6GfVMEsNix2i9Mwgu3IOg/viewform">
                        Google Form
                      </a>
                    </strong>
                  </p>
                  <br />
                  <p>
                    Your response form will be reviewed and we shall contact you
                    for further procedures.
                  </p>
                </div>
              )}
            </div>

            {/* 3rd */}
            <div className="mt-8">
              <div
                className="text-xl font-medium cursor-pointer flex items-center"
                onClick={() => toggleAccordion(2)}
              >
                <span>What services do we provide?</span>
                <div className="ml-2">
                  {activeIndex === 2 ? (
                    <AiOutlineMinus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              {activeIndex === 2 && (
                <div className="mt-2">
                  <p>
                    Check out the{" "}
                    <strong className="underline text-blue-600">
                      <a href="./services.html">Our Key Services</a>
                    </strong>
                  </p>
                </div>
              )}
            </div>

            {/* 4th */}
            <div className="mt-8">
              <div
                className="text-xl font-medium cursor-pointer flex items-center"
                onClick={() => toggleAccordion(3)}
              >
                <span>Does SHRL have any certified training?</span>
                <div className="ml-2">
                  {activeIndex === 3 ? (
                    <AiOutlineMinus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              {activeIndex === 3 && (
                <div className="mt-2">
                  <p>
                    Check the segment of{" "}
                    <strong className="underline text-blue-600">
                      <a href="./events.html">Events</a>
                    </strong>{" "}
                    to learn about our upcoming training events.
                  </p>
                </div>
              )}
            </div>

            {/* 5th */}
            <div className="mt-8">
              <div
                className="text-xl font-medium cursor-pointer flex items-center"
                onClick={() => toggleAccordion(4)}
              >
                <span>
                  Do medical graduates and non-medical postgraduates have scopes
                  to join SHRL?
                </span>
                <div className="ml-2">
                  {activeIndex === 4 ? (
                    <AiOutlineMinus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </div>
              {activeIndex === 4 && (
                <div className="mt-2">
                  <p>
                    Yes. To join, fill out the{" "}
                    <strong className="underline text-blue-600">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScRMCIkgGCYeqs_m6Ak6b67jIVFZ6GfVMEsNix2i9Mwgu3IOg/viewform">
                        Form
                      </a>
                    </strong>{" "}
                    and we’ll get back to you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
    
    </section>
  );
};

export default Faq;
