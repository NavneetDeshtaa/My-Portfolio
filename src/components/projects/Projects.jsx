import { useRef } from "react";
import "./projects.scss";
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

const Projects = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="projects"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="textContainer" variants={variants}>
        <p>
        Work 
       <br /> Highlights
        </p>
        <hr />
      </motion.div>


      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          
          <img src="/people.webp" alt="projectImg" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Featured</motion.b> Projects
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Explore My</motion.b> Work
          </h1>

          <a href="https://github.com/NavneetDeshtaa" target="_blank" rel="noopener noreferrer">
          <button >View All Projects</button>
          </a>

        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>BLOG-VERSE</h2>
          <p>
          Developed a comprehensive blog website utilizing the MERN stack,
          where users can post and read daily blogs. The project includes 
          several advanced features to enhance user experience and ensure 
          robust security. Key functionalities and technologies used 
          <br></br>
          MongoDB, Express.js, React.js, Node.js, JWT (JSON Web Tokens) for secure user authentication,
          BCRYPT to hash user passwords, CLOUDINARY to handle user avatar uploads 
         </p>

        <a href="https://github.com/NavneetDeshtaa/BLOG-WEBSITE" target="_blank" rel="noopener noreferrer">
           <button>View on Github</button>
        </a>

        </motion.div>

        <motion.div
          className="box box2"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>TUTION-MASTER</h2>
          <p>
          Say goodbye to the struggle of finding the perfect mentor.
          Our platform seamlessly connects passionate mentors with eager students, 
          transcending geographical boundaries and making quality education accessible to all
          <br></br>
          Key functionalities and technologies used in the 
          project include: HTML, CSS, JavaScript, React.js, Node.js and MongoDB.
         </p>

        <a href="https://github.com/NavneetDeshtaa/TutionMaster" target="_blank" rel="noopener noreferrer">
           <button>View on Github</button>
        </a>

        </motion.div>

      </motion.div>

    </motion.div>
  );
};

export default Projects;