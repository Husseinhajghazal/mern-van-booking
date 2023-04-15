import Features from "./components/Features/Features";
import Form from "./components/Form/Form";
import Head from "./components/Head/Head";
import WhatsIcon from "./components/WhatsIcon/WhatsIcon";
import { ToastContainer } from "react-toastify";
import ImageBar from "./components/ImageBar/ImageBar";

const App = () => {
  return (
    <>
      <Head />
      <Form />
      <WhatsIcon />
      <Features />
      <ImageBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
