import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleIcon, FlagIcon } from "@heroicons/react/solid";

import { useRef, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import useScreenSize from "../../hooks/screenSize";
import ErrorMessages from "../../components/Errors/ErrorMessage";
import { useAddNewUserMutation } from "./usersApiSlice";

const RegisterComponent = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();
  const { isLG } = useScreenSize();
  const refName = useRef();

  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string()
        .required(
          "Enter a combination of alt least eight numbers, letters and punctuation marks (such as ! and &,@)"
        )
        .min(8)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "password must contain uppercase, lowercase, number and  special character"
        ),

      confirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    validateOnMount: true,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formik.isValid) {
      await addNewUser({
        email: formik.values.email,
        password: formik.values.password,
        name: "ghdhg",
      });
    }
  };
  useEffect(() => {
    refName?.current?.focus();
  }, []);
  useEffect(() => {
    if (isSuccess) {
      formik.values.email = "";
      formik.values.password = "";
      formik.values.confirmPassword = "";
    }
  }, [isSuccess]);

  return (
    <div className="bg-transparent  absolute  w-full h-full">
      <div className="relative w-full my-14 flex justify-center items-center h-full">
        {/* ------------sucssess----------- */}
        {isSuccess ? (
          <>
            <div className="bg-[rgba(255,255,255,0.15)]  text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-2/3 lg:w-1/3 h-auto">
              <div className="flex justify-center items-center font-dsr text-2xl bg-lime-900 bg-opacity-25 w-auto rounded-xl mx-4 mt-4 mb-4 text-black">
                The User successfully registerd
                <FlagIcon className="w-5 h-10 ml-2 text-yellow-100" />
              </div>
              <div className="containerbtn  ">
                <Link
                  className="btn a  my-6  font-greatvibes bg-lime-900 text-lg rounded-xl"
                  to="/login"
                >
                  <span className=" text-yellow-100">Success</span>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[rgba(255,255,255,0.15)] absolute   backdrop-blur-sm shadow-sm rounded-xl w-2/3 lg:w-1/3 h-auto"
          >
            <div className="flex mx-10 mt-24 mb-10 items-center justify-center h-auto w-auto bg-transparent ">
              <div
                className={`${
                  isLG && formik.touched.email && formik.errors.email
                    ? "ml-auto  w-full"
                    : "space-y-4 w-full "
                }  relative px-2 `}
              >
                {formik.touched.email && formik.errors.email ? (
                  <ErrorMessages
                    message={formik.errors.email}
                    position={isLG ? "left" : ""}
                    arrowDir="down"
                  />
                ) : null}

                <div
                  htmlFor=""
                  className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                >
                  <input
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                    ref={refName}
                    required
                    autoComplete="true"
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                        : "border-gray-500 focus:border-gray-500 "
                    }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                  />{" "}
                  {formik.touched.email && formik.errors.email ? (
                    <ExclamationCircleIcon className="errorInfo " />
                  ) : null}
                  <span
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? "text-red-700 peer-focus:text-red-700:"
                        : " text-green-700 peer-focus:text-green-700"
                    } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                  >
                    Email
                  </span>
                </div>
              </div>
            </div>
            {/* ---------------------password------------- */}
            <div className="flex mt-10 mx-10  items-center justify-center h-auto w-auto bg-transparent ">
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
            {/* --------------confirmpassword------------ */}
            <div
              className="flex mt-10 mx-10 mb-10
           items-center justify-center h-auto w-auto bg-transparent "
            >
              <div
                className={`${
                  isLG &&
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "ml-auto  w-full"
                    : "space-y-4 w-full "
                }  relative px-2 `}
              >
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <ErrorMessages
                    message={formik.errors.confirmPassword}
                    position={isLG ? "left" : ""}
                    arrowDir="down"
                  />
                ) : null}

                <div
                  htmlFor=""
                  className={`${isLG ? "w-full" : "  w-full "}  relative  `}
                >
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    type="text"
                    required
                    autoComplete="off"
                    className={`${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                        : "border-gray-500 focus:border-gray-500 "
                    }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
              duration-700 focus:border-indigo-600 bg-transparent w-full`}
                  />{" "}
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <ExclamationCircleIcon className="errorInfo " />
                  ) : null}
                  <span
                    className={`${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "text-red-700 peer-focus:text-red-700:"
                        : " text-green-700 peer-focus:text-green-700"
                    } absolute left-0 top-0 px-1 text-lg  
         tracking-wide   pointer-events-none 
         duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors 
          ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
                  >
                    ConfirmPassword
                  </span>
                </div>
              </div>
            </div>
            {/* ----------------------------errordata--------------- */}
            {isError ? (
              <div className=" justify-center relative mx-3 items-center w-auto  bg-opacity-50 text-white py-2 my-7 rounded-xl text-center  bg-red-600">
                {error.data.message}
              </div>
            ) : (
              <div></div>
            )}
            {/* ------------button---------- */}
            <div className="containerbtn mb-20 ">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!formik.isValid ? true : false}
                className="btn a disabled:bg-slate-500 bg-slate-900 text-lg rounded-xl active:bg-slate-700 text-purple-900"
              >
                {isLoading ? <PulseLoader color="#fff" size={5} /> : "Register"}
              </button>
            </div>
            <p></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
