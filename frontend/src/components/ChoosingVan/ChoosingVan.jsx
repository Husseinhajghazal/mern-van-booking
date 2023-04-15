import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

const ChoosingVan = ({ setOpenVans, inputValue, setInputValue, setPrice }) => {
  return (
    <div className="choose">
      <motion.div
        initial={{ y: "-140%" }}
        animate={{ y: 0 }}
        exit={{ y: "-140%" }}
        whileHover={{ color: "#ff0000" }}
        className="close"
        onClick={() => setOpenVans(false)}
      >
        <AiOutlineClose size={30} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenVans(false)}
        className="backgroundvans"
      />
      <motion.div
        initial={{ y: "-140%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-140%", opacity: 0 }}
        className="contentvans text-center"
      >
        <div className="mycards text-start mb-5">
          <div
            className={`${inputValue === "Sprinter Van" && "selected"} mycard`}
            onClick={() => {
              setPrice("39$");
              setInputValue("Sprinter Van");
            }}
          >
            <div className="card-image">
              <img
                loading="lazy"
                src="https://qualitycoachwork.com/wp-content/uploads/2022/11/mercedes-benz-sprinter-.jpg"
                alt=""
              />
            </div>
            <h5 className="pb-2 pt-4">Sprinter Van</h5>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Price 39$
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 20 bagaj
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 10 pax
            </p>
            <div className="mt-3 mb-2 text-center">
              <button
                className="m-auto"
                onClick={() => setOpenVans(false)}
                type="button"
              >
                Select
              </button>
            </div>
          </div>
          <div
            className={`${inputValue === "Vito Van" && "selected"} mycard`}
            onClick={() => {
              setPrice("33$");
              setInputValue("Vito Van");
            }}
          >
            <div className="card-image">
              <img
                src="https://www.cnet.com/a/img/c4fFGcOemddweGVuLw3-1SuA7XU/u003d/940x0/2020/03/10/979016bf-04a6-47e0-8479-158e8ee7afc8/vito-promo.jpg"
                alt=""
              />
            </div>
            <h5 className="pb-2 pt-4">Vito Van</h5>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Price 33$
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 5 bagaj
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 5 pax
            </p>
            <div className="mt-3 mb-2 text-center">
              <button
                className="m-auto"
                onClick={() => setOpenVans(false)}
                type="button"
              >
                Select
              </button>
            </div>
          </div>
          <div
            className={`${
              inputValue === "Transporter Van" && "selected"
            } mycard`}
            onClick={() => {
              setPrice("39$");
              setInputValue("Transporter Van");
            }}
          >
            <div className="card-image">
              <img
                src="https://parkers-images.bauersecure.com/gallery-image/wp-images/19430/1752x1168/00-vw-transporter-2010.jpg"
                alt=""
              />
            </div>
            <h5 className="pb-2 pt-4">Transporter Van</h5>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Price 33$
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 7 bagaj
            </p>
            <p className="ps-1">
              <IoMdArrowDropright color="#ffc000" /> Max 7 pax
            </p>
            <div className="mt-3 mb-2 text-center">
              <button
                className="m-auto"
                onClick={() => setOpenVans(false)}
                type="button"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.p
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        exit={{ y: "-100px" }}
        className="note"
      >
        Note : This prices only from Istanbul/Sabiha Airport to ŞİŞLİ, FATİH,
        BEYOGLU, TAKSİM or KARAKÖY
      </motion.p>
    </div>
  );
};

export default ChoosingVan;
