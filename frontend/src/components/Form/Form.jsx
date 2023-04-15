import React, { useState } from "react";
import { Container } from "reactstrap";
import {
  AiFillCar,
  AiFillPhone,
  AiOutlineBars,
  AiOutlineFieldTime,
  AiOutlineUser,
} from "react-icons/ai";
import { Formik } from "formik";
import * as Yup from "yup";
import { GoLocation } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCalendarDate, BsCashCoin } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import Map from "../Map/Map";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { countries } from "../../Countries";
import ChoosingVan from "../ChoosingVan/ChoosingVan";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [price, setPrice] = useState("");
  const [inputError, setInputError] = useState(false);
  const [openVansClicked, setOpenVansClicked] = useState(false);

  const [openVans, setOpenVans] = useState(false);

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const config = { headers: { "Content-Type": "application/json" } };

  const initialValues = {
    from: "",
    to: "",
    fullName: "",
    email: "",
    country: "",
    countryCode: "+90",
    phoneNumber: "",
    date: "",
    time: "",
    vansNumber: "",
    passengerNumber: "",
  };

  const submitHandler = async (values) => {
    if (inputValue.trim().length === 0 || price.trim().length === 0) {
      return setInputError(true);
    }

    setLoading(true);
    await axios
      .post(
        "https://car-booking-server.onrender.com/book/car",
        {
          from: values.from,
          to: values.to,
          fullName: values.fullName,
          email: values.email,
          country: values.country,
          phoneNumber: `${values.countryCode.toString()} ${values.phoneNumber}`,
          date: values.date,
          time: values.time,
          vansNumber: values.vansNumber,
          passengerNumber: values.passengerNumber,
          inputValue: inputValue.trim(),
          price: price.trim(),
        },
        config
      )
      .then((res) => toast.success(res.data.message))
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    setLoading(false);
  };

  const validationSchema = Yup.object({
    from: Yup.string().required("required"),
    to: Yup.string().required("required"),
    fullName: Yup.string().required("required"),
    email: Yup.string()
      .required("required")
      .email("Plese enter a valid email."),
    country: Yup.string().required("required"),
    countryCode: Yup.string().required("required").min(2, "Min length 2"),
    phoneNumber: Yup.string().required("required"),
    date: Yup.string().required("required"),
    time: Yup.string().required("required"),
    vansNumber: Yup.string().required("required"),
    passengerNumber: Yup.string().required("required"),
  });

  return (
    <Container>
      <div className="form">
        <div className="left p-4">Fill Your Information So We Can Reach!</div>
        <div className="right p-3 p-md-4">
          <h4 className="pb-3">
            <AiOutlineBars size={30} /> Online Booking
          </h4>
          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              setFieldTouched,
            }) => (
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="inputs">
                  <div className="input mb-2">
                    <input
                      type="text"
                      placeholder="From"
                      id="from"
                      value={values.from}
                      className={`${errors.from && touched.from && "false"}`}
                      onClick={() => setOpen(!open)}
                    />
                    <div>
                      <GoLocation color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1">
                      {Boolean(errors.from) &&
                        Boolean(touched.from) &&
                        errors.from}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      type="text"
                      placeholder="to"
                      value={values.to}
                      className={`right-input ${
                        errors.to && touched.to && "false"
                      }`}
                      onClick={() => setOpen(!open)}
                    />
                    <div className="right-div">
                      <GoLocation color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1 right-p">
                      {Boolean(errors.to) && Boolean(touched.to) && errors.to}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      value={values.fullName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${
                        errors.fullName && touched.fullName && "false"
                      }`}
                    />
                    <div>
                      <BiUserCircle color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1">
                      {Boolean(errors.fullName) &&
                        Boolean(touched.fullName) &&
                        errors.fullName}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="email"
                      type="text"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`right-input ${
                        errors.email && touched.email && "false"
                      }`}
                      placeholder="Email"
                    />
                    <div className="right-div">
                      <MdAlternateEmail color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1 right-p">
                      {Boolean(errors.email) &&
                        Boolean(touched.email) &&
                        errors.email}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <section>
                      <input
                        type="text"
                        id="countryCode"
                        list="number"
                        value={values.countryCode}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          if (e.target.value.trim() === "") {
                            setFieldValue("countryCode", "+");
                          } else if (e.target.value.trim()[0] !== "+") {
                            setFieldValue(
                              "countryCode",
                              "+" + e.target.value.trim()
                            );
                          } else {
                            setFieldValue("countryCode", e.target.value.trim());
                          }
                        }}
                        placeholder="+90"
                        className={`right-input ${
                          errors.countryCode && touched.countryCode && "false"
                        }`}
                      />
                      <datalist id="number">
                        {countries.map((country, index) => (
                          <option key={index} value={country.dial_code}>
                            {country.name}
                          </option>
                        ))}
                      </datalist>
                      <input
                        id="phoneNumber"
                        type="number"
                        value={values.phoneNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={`${
                          errors.phoneNumber && touched.phoneNumber && "false"
                        }`}
                        placeholder="Phone Number"
                      />
                    </section>
                    <div>
                      <AiFillPhone color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1">
                      {Boolean(errors.phoneNumber) &&
                        Boolean(touched.phoneNumber) &&
                        errors.phoneNumber}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      type="text"
                      id="country"
                      list="countries"
                      value={values.country}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Chose your country"
                      className={`right-input ${
                        errors.country && touched.country && "false"
                      }`}
                    />
                    <datalist id="countries">
                      {countries.map((country, index) => (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </datalist>
                    <div className="right-div">
                      <RiArrowDownSLine color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1 right-p">
                      {Boolean(errors.country) &&
                        Boolean(touched.country) &&
                        errors.country}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="passengerNumber"
                      type="number"
                      value={values.passengerNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${
                        errors.passengerNumber &&
                        touched.passengerNumber &&
                        "false"
                      }`}
                      placeholder="Passengers Number"
                    />
                    <div>
                      <AiOutlineUser color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1">
                      {Boolean(errors.passengerNumber) &&
                        Boolean(touched.passengerNumber) &&
                        errors.passengerNumber}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="vansNumber"
                      type="number"
                      value={values.vansNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`right-input ${
                        errors.vansNumber && touched.vansNumber && "false"
                      }`}
                      placeholder="Vans number"
                    />
                    <div className="right-div">
                      <AiFillCar color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1 right-p">
                      {Boolean(errors.vansNumber) &&
                        Boolean(touched.vansNumber) &&
                        errors.vansNumber}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="date"
                      type="date"
                      value={values.date}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${errors.date && touched.date && "false"}`}
                    />
                    <div className="hideme">
                      <BsCalendarDate color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1">
                      {Boolean(errors.date) &&
                        Boolean(touched.date) &&
                        errors.date}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-2">
                    <input
                      id="time"
                      type="time"
                      value={values.time}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`right-input ${
                        errors.time && touched.time && "false"
                      }`}
                    />
                    <div className="right-div hideme">
                      <AiOutlineFieldTime color="#ffc000" size={25} />
                    </div>
                    <p className="ps-2 pt-1 right-p">
                      {Boolean(errors.time) &&
                        Boolean(touched.time) &&
                        errors.time}
                      <span>hide</span>
                    </p>
                  </div>
                  <div className="input mb-3">
                    The payment will be only via cash for driver
                    <BsCashCoin className="ms-2" color="#ffc000" />
                  </div>
                </div>
                <button
                  className={`m-auto ${openVansClicked && "me-1"}`}
                  type="button"
                  style={
                    inputValue.trim().length > 0
                      ? { backgroundColor: "#ffc000" }
                      : { backgroundColor: "#555" }
                  }
                  onClick={() => {
                    setOpenVansClicked(true);
                    setOpenVans(true);
                  }}
                >
                  Choose Van
                </button>
                {openVansClicked && (
                  <button
                    className={`m-auto ${openVansClicked && "me-1"}`}
                    type="submit"
                  >
                    Submit
                  </button>
                )}
                {inputValue ? (
                  <p className="ps-2 pt-2" style={{ color: "#ffc000" }}>
                    {`${inputValue} / ${price}`}
                  </p>
                ) : inputError ? (
                  <p className="ps-2 pt-2" style={{ color: "#ff0000" }}>
                    Choosing Van Required.
                  </p>
                ) : null}
                <AnimatePresence>
                  {open && (
                    <Map
                      setFieldValue={setFieldValue}
                      setFieldTouched={setFieldTouched}
                      fromValue={values.from}
                      fromMessage={errors.from}
                      fromValid={errors.from && touched.from}
                      toValue={values.to}
                      toMessage={errors.to}
                      toValid={errors.to && touched.to}
                      setOpen={setOpen}
                    />
                  )}
                </AnimatePresence>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {loading && <LoadingSpinner />}
      <AnimatePresence>
        {openVans && (
          <ChoosingVan
            setOpenVans={setOpenVans}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setPrice={setPrice}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Form;
