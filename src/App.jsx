import Logo from "./img/Logo.png"
import Bottle from "./img/Bottle.png"
import Butterfly from "./img/Butterfly.png"
import { HiMail, HiPhone } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Bubbles from "./Bubbles";

const App = () => {

  const para = useRef(null)
  const isParaInView = useInView(para)

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView)
  // }, [isInView])

  return (
    <div className="App">
      <Bubbles />
      <div className="butterfly-wrapper">
        {/* <img className="Butterfly" src={Butterfly} alt="CostaButterfly" /> */}
        <motion.div
        className="Butterfly"></motion.div>
      </div>
      <motion.img
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            // delay:1
          }}   
      className="Logo" src={Logo} alt="Costa" />
      <motion.img
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1 ,y:0}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay:1
          }}                 
      className="Bottle" src={Bottle} alt="CostaBottle" />

      <motion.p
      ref={para}
      style={{
        transform: isParaInView ? "none" : "translateY(50px)",
        opacity: isParaInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}  >
      After years of venturing through the beauties of Costa Rica, we were able to find a source of sustainable rare artesian water that comes from the bottom of the Earth. This water come from an area of land surrounded by lush mountains, active volcanoes, and magical waterfalls that plunge into the depths of a blue spring. We bring you the purest, natural taste of the earth in a bottle for your enjoyment. Pura Vida.
      </motion.p>
      <footer>
      <img className="Logo" src={Logo} alt="Footer-Costa" />
      <div className="contact-block">
        <a href="mailto:info@costavolcanicwater.com">
        <HiMail className="icon" />
        </a>
        <a href="tel:+12812996942">
        <HiPhone className="icon" />
        </a>
      </div>
      </footer>
    </div>
  )
}

export default App