import { SiTalenthouse } from "react-icons/si";
import { FaHireAHelper } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbCirclesRelation } from "react-icons/tb";

export default function Home1() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-300 to-white">
      <div className="container mx-auto px-4 ">
        <h1 className="text-2xl text-orange-400 font-bold text-center">
          Pricing
        </h1>
        <p className="mt-3 font-semibold text-black text-center">
          Best Services at the Most Affordable Price
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <div className="text-3xl text-blue-400 mb-3 ">
              <SiTalenthouse />
            </div>
            <h2 className="text-lg text-blue-500 font-semibold text-center">
              Simplifying Talent Hiring with Transparent Pricing
            </h2>
            <p className="mt-2 text-sm text-black text-center">
              We have a pricing system based on talent’s skills, experience,
              role complexity, and duration. Companies are charged upon talent
              hiring, while talent is not charged. We offer discounts of 5% to
              20% for prepaid amounts.
            </p>
          </div>

          {/* Card 2 */}

          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <FaHireAHelper className="text-3xl text-blue-400 " />;
            <h2 className="text-lg text-blue-500 font-semibold text-center">
              Tailored Pricing and Expert Consultation
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              To find out our prices, fill out a form. Get email with subject
              “ACCESS YOUR PRICE CARD.” Request a meeting to learn more about
              our services. We try to simplify offshore recruitment for global
              organizations to hire Indian Talent.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <CiBookmarkCheck className="text-3xl text-blue-400 " />;
            <h2 className="text-lg text-blue-500 text-center font-semibold">
              Other Services
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              Cost of hiring Indian workers from us is lower with more people
              employed. Pay in advance for a discount of 2.5% to 7%. Local time
              zone staff have additional charges. High demand may require
              non-traditional hours.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <TbCirclesRelation className="text-3xl text-blue-400 " />
            <h2 className="text-lg text-center text-blue-500  font-semibold">
              Contact Us
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              Get Pricing based on Job Description. Provide the description and
              other info. We’ll review and give the right budget. Schedule a
              free insightful call with our Talent Specialist."
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
