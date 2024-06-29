import { useRef } from "react";
import "./what-i-do.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Frontend Development",
    img: "https://imgs.search.brave.com/yAz8ECG2KsIXx2OMsjWMdXdni_-kZeHOilcQsWicu-8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzkwLzk5Lzg5/LzM2MF9GXzY5MDk5/ODk4NF9wbmxLNXBs/bTJBSmprcWpjTkNC/STZ2STROaXhaNVhZ/Ty5qcGc",
    desc: "⚡Building intuitive and dynamic user interfaces using the latest frontend technologies like React.js, Bootstrap, Tailwind etc ",
  },
  {
    id: 2,
    title: "Backend Development",
    img: "https://imgs.search.brave.com/TUhAKokXBMkwT12-WSgBfrEzEC88ZCdDZJk0bEHMbnw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tb2JpZGV2LmJp/ei8yMDE4LzA3L3Vz/aW5nLW5vZGUtanMt/YmFja2VuZC13ZWIt/ZGV2ZWxvcG1lbnQt/MjQwMC5qcGc",
    desc: "⚡Designing and implementing secure and scalable server-side solutions in Node.js and Express",
  },
  {
    id: 3,
    title: "Cloud Infra-Architecture",
    img: "https://imgs.search.brave.com/qHq41nIQyZ7ABWRqRV86OiNRG-OGcZR-yjxVUU9PgKs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1jbG91ZC1j/b21wdXRpbmctaG9z/dGluZy10ZWNobm9s/b2d5LXdpdGgtZWxl/Y3Ryb25pYy1kZXZp/Y2VzXzg0MzQxNS01/OS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
    desc: "⚡ Immersing myself in MongoDB and AWS technologies daily to deepen understanding and proficiency.Actively engaging in hands-on practice sessions to sharpen skills in database management and cloud computing.",
  },
  {
    id: 4,
    title: "Electronics & Communication Enthusiast",
    img: "https://imgs.search.brave.com/du_OBUO2VMTmR5xMndxs8TuigrtLJhaeL2oFXb3aZOQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZWxlY3Ryb25pYy1j/b21wb25lbnRzLWZv/ci1zY2llbmNlLXBy/b2plY3QuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA",
    desc: "⚡Applying knowledge from my ECE studies to innovate and solve complex problems.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a href="https://github.com/NavneetDeshtaa" target="_blank" rel="noopener noreferrer">
           <button>See Demo</button>
          </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatiDo = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="whatido" ref={ref}>
      <div className="progress">
        <h1>What I Do</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default WhatiDo;