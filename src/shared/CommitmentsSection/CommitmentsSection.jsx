import { useContext, useEffect } from "react";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";

import { AuthContext } from "../../providers/AuthProvider";

const CommitmentsSection = () => {
  const { darkMode } = useContext(AuthContext);
  const commitments = [
    {
      title: "Specialized Focus on Women and Children",
      icon: "https://i.ibb.co/b22bfNj/Font-Awesome-Person-Breastfeeding.png",
      strengths: [
        "Tailored healthcare solutions for women and children",
        "Expert care for maternal and child health issues",
        "Compassionate, patient-centered approach",
      ],
    },
    {
      title: "Evidence-Based Healthcare",
      icon: "https://i.ibb.co/z5V33Sf/Evidence-Based-Healthcare.png",
      strengths: [
        "Services built on scientific research and clinical evidence",
        "Continuous updates to stay in line with healthcare advancements",
        "Commitment to high-quality, reliable care",
      ],
    },
    {
      title: "Global Expertise, Local Understanding",
      icon: "https://i.ibb.co/Srt91xN/fa-earth-europe.png",
      strengths: [
        "International standards of healthcare delivery",
        "Customized solutions for local needs and challenges",
        "Global partnerships with local impact",
      ],
    },
    {
      title: "Comprehensive Health Tracking Tools",
      icon: "https://i.ibb.co/4fZ4MHg/fa-toolbox.png",
      strengths: [
        "Mobile apps for tracking maternal and child health milestones",
        "Personalized health insights and recommendations",
        "User-friendly interface for seamless healthcare management",
      ],
    },
    {
      title: "Commitment to Privacy and Security",
      icon: "https://i.ibb.co/SdwkGD6/fa-file-shield.png",
      strengths: [
        "Advanced data protection and encryption",
        "Strict privacy policies for consultations and records",
        "Secure platforms for telemedicine and health tracking",
      ],
    },
    {
      title: "Continuous Learning and Adaptation",
      icon: "https://i.ibb.co/phdZy5Q/fa-book.png",
      strengths: [
        "Ongoing research to stay ahead of healthcare trends",
        "Investment in new technologies and methodologies",
        "Adaptation to the evolving needs of healthcare",
      ],
    },
  ];

  return (
    <section className=" container mx-auto px-2 lg:px-0">
      <div className="space-y-2 flex flex-col items-center justify-center text-center xl:w-8/12 mx-auto mb-4 md:mb-8">
        <HeadingAndTittle
          heading={`Our Commitments`}
          tittle={`At Smart Healthcare and Research Ltd., we are not just healthcare providers—we are your dedicated partners in maternal and child health. Our focus on excellence, innovation, and compassion sets us apart in the healthcare sector. Here’s why you should trust us with your healthcare needs:`}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-8">
        {commitments.map((commitment, index) => (
          <div
            key={index}
            className={`${
              darkMode && "bg-slate-800 "
            } flex gap-4 items-center  p-4 rounded-3xl shadow-lg bg-green-200 `}
            data-aos="fade-up" // AOS fade-up animation
          >
            <div className="flex flex-col items-center justify-center md:flex-row gap-4">
              <img
                className="w-16"
                src={commitment.icon}
                alt={commitment.title}
              />{" "}
              {/* Add descriptive alt text */}
              <div>
                <h3 className="text-2xl font-semibold">{commitment.title}</h3>
                <br />
                <h3 className="font-semibold">Key Strengths:</h3>
                <ul className="list-disc list-inside">
                  {commitment.strengths.map((strength, idx) => (
                    <li key={idx}>{strength}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommitmentsSection;
