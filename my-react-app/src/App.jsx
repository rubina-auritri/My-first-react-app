
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Technologies from "./component/Technologies";
import suspense from "react";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



const TechnologiesFetch = async () => {
  const res = await fetch("/technology.json");
  const data = await res.json();
  // console.log(data);
  return data;
};


function App() {
  const TechnologiesPromise = TechnologiesFetch();



  return (
    <>

      <Navbar />
       <ToastContainer />
      <Hero />

      <suspense.Suspense fallback={<div>Loading...</div>}>
        <Technologies TechnologiesPromise={TechnologiesPromise} />
      </suspense.Suspense>
       <Footer /> 

    </>
  )
}

export default App
