import { useRef } from "react";
import "./education.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="education"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="textContainer-education" variants={variants}>
        <p>
        Educational 
       <br /> Background
        </p>
        <hr />
      </motion.div>



      <motion.div className="titleContainer" variants={variants}>

        <div className="title">
          <img src="/education.webp" alt="" />
          <h1>
          
       <motion.b whileHover={{color:"orange"}}>Academic</motion.b> Journey
          </h1>
        </div>
      </motion.div>


      <motion.div className="educationContainer" variants={variants}>

        <motion.div
          className="box"
          whileHover={{ background: "lightblue", color: "black" }}
        >
          <h1>National Institute of Technology, Hamirpur</h1>
          <p>
        ⚡ Pursuing a comprehensive education in Electronics and Communication Engineering.<br></br><br></br>
        ⚡ Apart from this, I have done Full Stack Development and still exploring more.<br></br><br></br>
        ⚡ Regularly participate in recreational sports activities, including volleyball and badminton.
         </p>

        <a href="https://nith.ac.in/" target="_blank" rel="noopener noreferrer">
           <button>Visit Website</button>
        </a>

        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightblue", color: "black" }}
        >
          <h1>Spring Dale School, Rampur (SHIMLA)</h1>
          <p>
        ⚡ I have scored 93% in Matric and 96% in 12th Boards.<br></br><br></br>
        ⚡ Engaged actively in diverse academic pursuits, fostering a well-rounded skill set and a thirst for knowledge.<br></br><br></br>
        ⚡ Participated in many Quizes, Science Models( representing Model at IIT,Delhi).
         </p>

        <a href="https://springdalerampur.in/" target="_blank" rel="noopener noreferrer" >
           <button >View Website</button>
        </a>

        </motion.div>

      </motion.div>

    </motion.div>
  );
};

export default Education;