import React, { useEffect } from "react";
import { motion } from "framer-motion";
import dukeImage1 from "../Zeb-Duke-pic1-removebg-preview.png";
import dukeImage3 from "../Zeb-Duke-pic3-removebg-preview.png";
import dukeImage10 from "../Zeb-Duke-pic10-removebg-preview.png";
import DottedButton from "./button";

export default function Body() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row gap-5 p-[11vh] justify-between bg-[#222831] overflow-hidden">
      {/* Left Card */}
      <motion.div
        initial={{ y: 50, opacity: 0, rotate: 5 }} // smaller offset to prevent scroll
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-white h-[80vh] w-[40vw] flex flex-col border border-white rounded-lg"
      >
        <div className="p-[5vw]">
          <div className="name">
            <h1 className="text-4xl font-bold">HEADFONE</h1>
            <h1 className="text-4xl font-bold">Power</h1>
          </div>

          <div className="rate pt-7 text-xl">MRP:- ₹1199</div>

          <div className="desc  border-3 border-dotted bg-[#f5deb3] rounded mt-5 bg- ">
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis alias possimus similique veniam dolore obcaecati
              expedita est officiis rem omnis?
            </p>
          </div>

          <div className="buy flex justify-center mt-5">
            <DottedButton />
          </div>

          <div className="options flex flex-row mt-5 text-md font-bold gap-10 item-center justify-center">
            <img
              className="h-20 w-20 rounded-full hover:border"
              src={dukeImage1}
              alt=""
            />
            <img
              className="h-20 w-20 rounded-full hover:border"
              src={dukeImage3}
              alt=""
            />
            <img
              className="h-20 w-20 rounded-full hover:border"
              src={dukeImage10}
              alt=""
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="image-section h-[90vh] w-auto"
        initial={{ y: 50, opacity: 0, rotate: 5 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={dukeImage1}
          alt="Duke"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
