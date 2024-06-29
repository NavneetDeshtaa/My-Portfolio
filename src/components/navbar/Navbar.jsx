import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Navneet Portfolio
        </motion.span>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/navneet-deshta-14662b259/"
            target="_blank"
            rel="noopener noreferrer"
            data-label="LinkedIn"
          >
            <img src="/Linkedin-128.webp" alt="LinkedIn" />
          </a>

          <a
            href="https://www.facebook.com/naavneet.deshta"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Facebook"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/navneet.deshta?igsh=ejY5NTk5bGk1eThq"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Instagram"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCHvUQZbvM7BaDhms4OZFS5g"
            target="_blank"
            rel="noopener noreferrer"
            data-label="YouTube"
          >
            <img src="/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
