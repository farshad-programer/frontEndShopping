import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import Moment from "react-moment";
import image from "../../img/2023-02-11T13-18-06.816Zlaura-college-K_Na5gCmh38-unsplash.jpg";
import { PulseLoader } from "react-spinners";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import ErrorMessages from "../../components/Errors/ErrorMessage";
import useScreenSize from "../../hooks/screenSize";
import { useFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as Yup from "yup";

const CreatePo = () => {
  const refName = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description:"",
      category :"",
      count:"",
      images:"",
      

    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      count: Yup.string().required("count is required")
      .matches(/^\d{1,4}$/, 'please insert correct nummber'),
    
      description: Yup.string().required("description is required"),
      category: Yup.string().required("category is required"),
      price: Yup.string()
      .matches(/^\d{1,4}(\.\d{2})?$/, 'please insert correct price').required("price is required"),
    }),
    
validateOnBlur :false,
    validateOnMount: true,
  });
  console.log(formik.validateOnBlur);
  const { isLG } = useScreenSize();
  const handleBlurname = () => {
    formik.setFieldTouched('name', false);
  };
  const handleClick=()=>{
    
    formik.setFieldTouched('name', true);
    
  }
  const handleBlurcount = () => {
    formik.setFieldTouched('count', false);
  };
  return (
    <div className="bg-transparent  absolute  w-full h-full">
      <div className="relative w-full my-14 flex justify-center items-center h-full">
        <div className="bg-[rgba(255,255,255,0.15)] absolute  text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-3/4 lg:w-3/4 h-auto">
          <div className="my-4  flex flex-col items-center justify-center">
            <img
              src={image}
              alt=""
              className="h-[300px] top-10 absolute rounded-xl"
            />
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className="flex h-[400px] flex-row mt-10 justify-around">
                <div className="flex  flex-col  items-center justify-end h-auto w-1/3 bg-transparent ">
                  <div
                    className={`${
                      isLG && formik.touched.name && formik.errors.name
                        ? "ml-auto  w-full"
                        : "space-y-4 w-full "
                    }  relative px-2 `}
                  >
                    {formik.touched.name && formik.errors.name  ? (
                      <ErrorMessages
                        message={formik.errors.name}
                        position={isLG ? "left" : ""}
                        arrowDir="down"
                        
                      />
                    ) : null}

                    <div
                      htmlFor=""
                      className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                    >
                      <input
                        id="name"
                        name="name"
                        onBlur={handleBlurname}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        type="text"
                        ref={refName}
                        onFocus={handleClick}
                        autoComplete="true"
                        className={`${
                           formik.errors.name
                            ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                            : "border-gray-500 focus:border-gray-500 "
                        }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                      />{" "}
                      { formik.errors.name ? (
                        <ExclamationCircleIcon className="errorInfo " />
                      ) : null}
                      <span
                        className={`${
                           formik.errors.name
                            ? "text-red-700 peer-focus:text-red-700:"
                            : " text-green-700 peer-focus:text-green-700"
                        } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                      >
                        Name
                      </span>
                    </div>
                  </div>
                </div>
                {/* --------------------category------------- */}
                <div className="flex  flex-col  items-center justify-end h-auto w-1/3 bg-transparent ">
                  <div
                    className={`${
                      isLG && formik.touched.category && formik.errors.category
                        ? "ml-auto  w-full"
                        : "space-y-4 w-full "
                    }  relative px-2 `}
                  >
                    {formik.touched.category && formik.errors.category  ? (
                      <ErrorMessages
                        message={formik.errors.category}
                        position={isLG ? "left" : ""}
                        arrowDir="down"
                        
                      />
                    ) : null}

                    <div
                      htmlFor=""
                      className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                    >
                      <input
                        id=""
                        name="category"
                        onBlur={handleBlurname}
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        type="text"
                        ref={refName}
                        onFocus={handleClick}
                        autoComplete="true"
                        className={`${
                           formik.errors.category
                            ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                            : "border-gray-500 focus:border-gray-500 "
                        }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                      />{" "}
                      { formik.errors.category ? (
                        <ExclamationCircleIcon className="errorInfo " />
                      ) : null}
                      <span
                        className={`${
                           formik.errors.category
                            ? "text-red-700 peer-focus:text-red-700:"
                            : " text-green-700 peer-focus:text-green-700"
                        } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                      >
                        Category
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------next input */}
              <div className="flex  flex-row mt-10 justify-around">
                <div className="flex  flex-col  items-center justify-end h-auto w-1/3 bg-transparent ">
                  <div
                    className={`${
                      isLG && formik.touched.count && formik.errors.count && formik.validateOnBlur
                        ? "ml-auto  w-full"
                        : "space-y-4 w-full "
                    }  relative px-2 `}
                  >
                    {formik.touched.count && formik.errors.count && formik.validateOnBlur ? (
                      <ErrorMessages
                        message={formik.errors.count}
                        position={isLG ? "left" : ""}
                        arrowDir="down"
                      />
                    ) : null}

                    <div
                      htmlFor=""
                      className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                    >
                      <input
                        id="count"
                        name="count"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.count}
                        type="text"
                       
                        required
                        autoComplete="true"
                        className={`${
                          formik.touched.count && formik.errors.count
                            ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                            : "border-gray-500 focus:border-gray-500 "
                        }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                      />{" "}
                      {formik.touched.count && formik.errors.count ? (
                        <ExclamationCircleIcon className="errorInfo " />
                      ) : null}
                      <span
                        className={`${
                          formik.touched.count && formik.errors.count
                            ? "text-red-700 peer-focus:text-red-700:"
                            : " text-green-700 peer-focus:text-green-700"
                        } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                      >
                        Count
                      </span>
                    </div>
                  </div>
                </div>
                {/* ---------------------password------------- */}
                <div className="flex flex-col   items-center justify-end  w-1/3 bg-transparent ">
                  <div
                    className={`${
                      isLG && formik.touched.password && formik.errors.password
                        ? "ml-auto  w-full"
                        : "space-y-4 w-full "
                    }  relative px-2 `}
                  >
                    {formik.touched.password && formik.errors.password ? (
                      <ErrorMessages
                        message={formik.errors.password}
                        position={isLG ? "right" : ""}
                        arrowDir="down"
                      />
                    ) : null}

                    <div
                      htmlFor=""
                      className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                    >
                      <input
                        id="password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="text"
                        required
                        autoComplete="true"
                        className={`${
                          formik.touched.password && formik.errors.password
                            ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                            : "border-gray-500 focus:border-gray-500 "
                        }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                      />{" "}
                      {formik.touched.password && formik.errors.password ? (
                        <ExclamationCircleIcon className="errorInfo " />
                      ) : null}
                      <span
                        className={`${
                          formik.touched.password && formik.errors.password
                            ? "text-red-700 peer-focus:text-red-700:"
                            : " text-green-700 peer-focus:text-green-700"
                        } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors 
          ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                      >
                        Password
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePo;
