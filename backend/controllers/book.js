const NewError = require("../models/new-error");
const sendMail = require("../utils/sendMail");

const bookCar = async (req, res, next) => {
  try {
    const {
      from,
      to,
      fullName,
      email,
      country,
      phoneNumber,
      date,
      time,
      inputValue,
      vansNumber,
      passengerNumber,
      price,
    } = req.body;

    const desiredDate = new Date(`${date}T${time}`);
    const now = Date.now();

    if (desiredDate.getTime() < now) {
      return next(new NewError("You selected a date in the past", 404));
    }

    try {
      sendMail({
        email,
        subject: "Booking Privet Car",
        message: `
        <h2>The private car has been booked, and we will contact you as soon as possible, Here it is the Information:</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Van Type:</strong> ${inputValue}</p>
        <p><strong>Vans Number:</strong> ${vansNumber}</p>
        <p><strong>Van Type:</strong> ${vansNumber}</p>
        <p><strong>Passengers Number:</strong> ${passengerNumber}</p>
        <p><strong>Price:</strong> ${price}</p>
        `,
      });
      sendMail({
        email: "your@email.com",
        subject: "Booking Privet Car",
        message: `
        <h2>New Person Booked A Car, Let's talk to him/her :</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Van Type:</strong> ${inputValue}</p>
        <p><strong>Vans Number:</strong> ${vansNumber}</p>
        <p><strong>Van Type:</strong> ${vansNumber}</p>
        <p><strong>Passengers Number:</strong> ${passengerNumber}</p>
        <p><strong>Price:</strong> ${price}</p>
        `,
      });
    } catch (error) {
      console.log(error);
      return next(new NewError("Please Enter A valid Email Address.", 500));
    }

    res.status(201).json({
      message:
        "The private car has been booked, and we will contact you as soon as possible.",
    });
  } catch (error) {
    return next(
      new NewError("A problem occured!, please try again later.", 500)
    );
  }
};

exports.bookCar = bookCar;
