import React from "react";
import { Container } from "reactstrap";
import { GiStarsStack } from "react-icons/gi";
import { FaShuttleVan } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <Container>
      <div className="features text-center pb-5">
        <div className="title mb-5">
          <div />
          <h3>Features</h3>
          <div />
        </div>
        <div className="all-feat">
          <motion.div
            whileHover={{
              boxShadow: "0 0 18px 0 rgba(0, 0, 0, 0.852)",
              y: "-10px",
            }}
            className="feat"
          >
            <div className="feat-icon mb-3">24/7</div>
            <p>
              24/7 any day any time we are here to help you with a quick support
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              boxShadow: "0 0 18px 0 rgba(0, 0, 0, 0.852)",
              y: "-10px",
            }}
            className="feat"
          >
            <div className="feat-icon mb-3">
              <GiStarsStack size={50} />
            </div>
            <p>
              High quality service from highly experienced people and drivers
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              boxShadow: "0 0 18px 0 rgba(0, 0, 0, 0.852)",
              y: "-10px",
            }}
            className="feat"
          >
            <div className="feat-icon mb-3">
              <FaShuttleVan size={50} />
            </div>
            <p>Luxurious, high quality and very comfortable cars</p>
          </motion.div>
          <motion.div
            whileHover={{
              boxShadow: "0 0 18px 0 rgba(0, 0, 0, 0.852)",
              y: "-10px",
            }}
            className="feat"
          >
            <div className="feat-icon mb-3">
              <FaUserTie size={50} />
            </div>
            <p>
              Experience in the field of tourism and specifically transportation
              of tourists for several years
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
