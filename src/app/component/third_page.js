import { CgProfile } from "react-icons/cg";
import { MdOutlineLanguage } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaSolarPanel } from "react-icons/fa";

export default function Home3() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-300 to-white">
      <section className="container px-4 ">
        <p className="text-black font-semibold text-center shadow">
          STACKKAROO aims to simplify the remote hiring process and allows
          global companies to tap into top tech talent from India. Also, it
          assists Indian talent to find their dream jobs on a global level.
        </p>
        <h1 className="mt-5 text-center text-2xl text-orange-400 font-bold">
          Our Rigorous Hiring Process
        </h1>
        <p className="text-center text-black font-semibold mb-10">
          To make sure, our Talent get the Best Opportunities
        </p>

        <div className="flex flex-col mb-2  ">
          <section className="flex items-center mb-4 flex-wrap">
            <CgProfile className="text-3xl text-blue-400" />
            <h2 className="text-lg text-blue-500 font-semibold px-2">
              Profile Screening and Shortlisting
            </h2>
            <p className="text-black">
              We evaluate applications based on minimum criteria, professional
              experience, and background checks of candidates.
            </p>
          </section>

          <section className="flex  items-center mb-4 flex-wrap  ">
            <MdOutlineLanguage className="text-3xl text-blue-400" />
            <h2 className="text-lg text-blue-500 font-semibold px-2">
              Language Proficiency
            </h2>
            <p className="text-black ">
              We use communication assessment test to assess candidates'
              reading, writing, pronunciation, clarity fluency, and speech
              speed.
            </p>
          </section>
          <section className="flex items-center  mb-4 flex-wrap">
            <PiExam className="text-3xl text-blue-400" />
            <h2 className="text-lg text-blue-500 font-semibold px-2 ">
              Aptitude Evaluation
            </h2>
            <p className="text-black">
              We administer scientifically designed aptitude test to assess
              candidates' reasoning & problem-solving abilities
            </p>
          </section>
          <section className="flex items-center mb-4 flex-wrap">
            <FaClipboardQuestion className="text-3xl text-blue-400" />
            <h2 className="text-lg text-blue-500 font-semibold px-2">
              Technical Assessment
            </h2>
            <p className="text-black">
              We have developed challenging and advanced technical assessments
              tailored to specific roles, ensuring that only the most skilled
              candidates make it.
            </p>
          </section>
          <section className="flex items-center mb-4 flex-wrap">
            <FaSolarPanel className="text-3xl text-blue-400" />

            <h2 className="text-lg text-blue-500 font-semibold  px-2">
              Panel Interview
            </h2>
            <p className="text-black">
              Our talent acquisition experts conduct a final video interview in
              the presence of a representative from the hiring company.
            </p>
          </section>
        </div>
      </section>
    </header>
  );
}
