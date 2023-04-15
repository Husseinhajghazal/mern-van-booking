import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GoLocation } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Map = ({
  setOpen,
  setFieldValue,
  setFieldTouched,
  fromValue,
  toValue,
  fromMessage,
  fromValid,
  toMessage,
  toValid,
}) => {
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YourApi",
    libraries: ["places"],
  });

  const inputRef = useRef();

  const inputRef2 = useRef();

  const inputRef3 = useRef();

  useEffect(() => {
    if (isLoaded) {
      inputRef.current.focus();
    }
  }, [isLoaded]);

  const handlePlaceChange = () => {
    const [place] = inputRef2.current.getPlaces();

    if (place) {
      setFieldValue("from", place.formatted_address);
      setAddress1({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const handlePlaceChange2 = () => {
    const [place] = inputRef3.current.getPlaces();

    if (place) {
      setFieldValue("to", place.formatted_address);
      setAddress2({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="map">
      <motion.div
        initial={{ y: "-140%" }}
        animate={{ y: 0 }}
        exit={{ y: "-140%" }}
        whileHover={{ color: "#ff0000" }}
        className="close"
        onClick={() => setOpen(false)}
      >
        <AiOutlineClose size={30} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
        className="background"
      />
      <motion.div
        initial={{ y: "-140%" }}
        animate={{ y: 0 }}
        exit={{ y: "-140%" }}
        className="content"
      >
        <div className="fields">
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef2.current = ref)}
            onPlacesChanged={handlePlaceChange}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "tr" }, // limit results to Turkey
            }}
          >
            <div className="input mb-2">
              <input
                id="from"
                onChange={(e) => setFieldValue("from", e.target.value)}
                onBlur={() => setFieldTouched("from", true)}
                value={fromValue}
                ref={inputRef}
                type="text"
                className={`${fromValid && "false"}`}
                placeholder="From"
              />
              <div className={`${fromValid && "false"}`}>
                <GoLocation color="#ffc000" size={25} />
              </div>
              {fromValid && <p className="ps-2 pt-1">{fromMessage}</p>}
            </div>
          </StandaloneSearchBox>
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef3.current = ref)}
            onPlacesChanged={handlePlaceChange2}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "tr" }, // limit results to Turkey
            }}
          >
            <div className="input mb-2">
              <input
                type="text"
                placeholder="To"
                onChange={(e) => setFieldValue("to", e.target.value)}
                onBlur={() => setFieldTouched("to", true)}
                className={`${toValid && "false"}`}
                value={toValue}
              />
              <div className={`${toValid && "false"}`}>
                <GoLocation color="#ffc000" size={25} />
              </div>
              {toValid && <p className="ps-2 pt-1">{toMessage}</p>}
            </div>
          </StandaloneSearchBox>
        </div>
        <div className="google-map">
          <GoogleMap
            center={
              address2
                ? { lat: address2.lat, lng: address2.lng }
                : { lat: 41.025658, lng: 28.974155 }
            }
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            {address1 && <Marker position={address1} />}
            {address2 && <Marker position={address2} />}
          </GoogleMap>
        </div>
      </motion.div>
    </div>
  );
};

export default Map;
