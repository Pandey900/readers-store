import React, { useEffect, useState } from "react";

import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 dark:bg-slate-900">
        <div className="mt-28 items-center justify-center text-center pb-6">
          <h1 className="text-2xl md:text-4xl mb-4 dark:bg-slate-900">
            We’re Delighted To Have You{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-6">
            Discover a diverse selection of courses at our bookstore, crafted to
            support your learning goals. From foundational skills to advanced
            expertise, our courses are designed by industry professionals to
            provide practical knowledge, hands-on exercises, and valuable
            insights for all learners.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
