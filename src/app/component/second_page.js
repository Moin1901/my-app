import { SiTalenthouse } from "react-icons/si";
import { FaHireAHelper } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbCirclesRelation } from "react-icons/tb";

export default function Home1() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-300 to-white">
      <section className="container mx-auto px-4 ">
        <h1 className="text-2xl text-orange-400 font-bold text-center">
          We are Best Because
        </h1>
        <p className="mt-3 font-semibold text-black text-center">
          Affordable Web Development Company in India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <div className="text-3xl text-blue-400 mb-3 ">
              <SiTalenthouse />
            </div>
            <h2 className="text-lg text-blue-500 font-semibold text-center">
              Talent Matchmaker
            </h2>
            <p className="mt-2 text-sm text-black text-center">
              STACKKAROO is a platform for identifying Indian talent for global
              companies seeking remote workers. It considers skills, experience,
              preferences, availability to find the best match.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <FaHireAHelper className="text-3xl text-blue-400 " />;
            <h2 className="text-lg text-blue-500 font-semibold text-center">
              Easy Hiring
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              We help with hiring including interviews negotiations contracts
              and onboarding Indian talent and the company receive support
              during recruitment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <CiBookmarkCheck className="text-3xl text-blue-400 " />;
            <h2 className="text-lg text-blue-500 text-center font-semibold">
              Affordability
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              The company pays a fee for talent hire based on salary and role
              difficulty The talent is not charged a fee.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow">
            <TbCirclesRelation className="text-3xl text-blue-400 " />
            <h2 className="text-lg text-center text-blue-500  font-semibold">
              Long-Term Relationship
            </h2>
            <p className="mt-2 text-sm text-center text-black">
              STACKKAROO maintains good talent-org relationships by providing
              feedback performance appraisal career development and settling
              disputes.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
