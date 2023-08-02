import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "../../App.css"
import "../ButtonRegister.css"
import { Link } from "react-router-dom";

const NavberComponent = () => {
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  const cardVariants = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      height: 100,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const inputSearchRef = useRef();
  return (
    <div>
      <motion.div
        className=" "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
      >
        <motion.div
          className="w-full  fixed z-30  border-b-2 border-black shadow-2xl
         h-14 bg-[rgba(124,84,198,0.15)]"
          variants={cardVariants}
        >
          <div className="relative  h-full flex items-center justify-between">
            <div
              className={`${
                showSearchMenu ? "w-1/4 searchAnim " : "w-[0]"
              } ${"searchContainer ml-3"}`}
            >
              <input
                ref={inputSearchRef}
                type="text"
                name="search"
                placeholder="Search..."
                className={`${
                  showSearchMenu
                    ? " w-full searchAnim text-md  placeholder-slate-700 bg-transparent"
                    : "w-[0] "
                } "searchInput" `}
              />
              <a href="#" className="search-btn">
                <MagnifyingGlassIcon
                  onClick={() => {
                    {
                      setShowSearchMenu(!showSearchMenu);
                      inputSearchRef.current.focus();
                    }
                  }}
                  className="fas w-5 "
                />
              </a>
            </div>
            <Link className="font-spr text-xl text-blue-600" to={"/logout"}>logout</Link>

            <div className="containerbtn">
             <a href=""className="  rounded-full btn"><ShoppingCartIcon className="w-7  mr-2 text-slate-800   shadow-lg rounded-full " /></a> 
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NavberComponent;
