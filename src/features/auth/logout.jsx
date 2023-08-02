import { FlagIcon } from "@heroicons/react/solid";
import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSendLogoutMutation } from "./authApiSlice";
import { PulseLoader } from "react-spinners";

const LogOut = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()
    const onLogoutClicked= ()=>{
        sendLogout()
    }

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])
  return (
    <div className="bg-transparent  absolute  w-full h-full">
      <div className="relative w-full my-14 flex justify-center items-center h-full">
        <div className="bg-[rgba(255,255,255,0.15)]  text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-2/3 lg:w-1/3 h-auto">
          <div className="flex justify-center items-center font-dsr text-2xl bg-red-600 bg-opacity-25 w-auto rounded-xl mx-4 mt-4 mb-4 text-black">
            Are you sure , Loging Out
            <FlagIcon className="w-5 h-10 ml-2 text-yellow-100" />
          </div>
          {isError ? (
              <div className=" justify-center relative mx-3 items-center w-auto  bg-opacity-50 text-white py-2 my-7 rounded-xl text-center  bg-red-600">
                {error.data.message}
              </div>
            ) : (
              <div></div>
            )}
          <div className="flex justify-center ">
            <div className="containerbtn mr-5 ">
              <Link
                className="btn a  my-6  font-greatvibes bg-lime-900 text-lg rounded-xl"
                to="/login"
              >
                <span className=" text-yellow-100">No</span>
              </Link>
            </div>
            <div  className="containerbtn ml-5 ">
            <Link
              className="btn a  my-6 text-yellow-100  font-greatvibes bg-red-600 text-lg rounded-xl"
              to="/login"
              onClick={onLogoutClicked}
            >
             {isLoading ? <PulseLoader color="#fff" size={5} /> : "yes"} 
            </Link>
            
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LogOut;
