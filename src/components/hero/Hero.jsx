import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};


const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};


const Hero = () => {
  return (
    <div className="hero">

      <div className="wrapper">

        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hi 👋,  I'm Navneet Deshta</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer + ECE Enthausiast 
          </motion.h1>

          <motion.div variants={textVariants} className="Resume-Btn">

           <a href="https://drive.google.com/file/d/1oLYXsAfMxNmlqJkQZaYRlroaFEVRfOjj/view" target="_blank" rel="noopener noreferrer" >
           <button className="resume">See Resume </button>
           </a>
            
          </motion.div>

        </motion.div>
        
      </div>


      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Tech Enthusiast
      </motion.div>


      <div className="imageContainer">
        <img src="/hero.jpg" alt="" />
      </div>

    </div>
  );
};

export default Hero;