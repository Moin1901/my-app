import Image from "next/image";

export default function Home() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-300 to-white">
      <Image
        src="https://purepng.com/public/uploads/large/purepng.com-studentsstudentcollege-studentschool-studentstudentsmale-female-1421526924162sp0sf.png"
        alt="Students"
        width={400}
        height={300}
      />
      <section className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Experience Seamless Hiring
        </h1>

        <p className="mt-3  font-bold text-black text-center">
          "Connecting Global Companies with the Best Indian Talent"
        </p>

        <p className="mt-3 text-xl text-black text-center">
          STACKKAROO is a hiring platform that picks the best of IT & Non-IT
          fields as well as web development, digital marketing, data science,
          business development, human resource, content writing, advertising and
          much more in trend. Their communication skills, fit for culture, and
          ability to be ethical for global work will be assessed.
        </p>

        <div className="flex items-center justify-center mt-8">
          <a
            href="/jobs"
            className="px-3 py-2 font-bold text-white bg-orange-400 rounded-lg"
          >
            Job Opening
          </a>
        </div>
      </section>
    </header>
  );
}
