import { Outlet } from "react-router-dom";
import "../App.css";
import { motion, useScroll, useSpring } from "framer-motion";

import NavberComponent from "./navbar/Navbar";
import FooterComponent from "./Footer/Footer";

const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>

      <NavberComponent />

      <div
        className={`w-screen  h-screen flex justify-start relative items-end bg-cover aa bg-no-repeat `}
      >
        <div className="my-40"></div>
        <Outlet />

        <div
          className={`bg-cover bg-left-bottom  w-auto h-auto  overflow-hidden  bb  `}
        >
          <div className=" screen50 "></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};
export default Layout;
