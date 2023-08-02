import { FlagIcon } from "@heroicons/react/24/outline";
import { useGetUsersQuery } from "./adminApiSlice";
import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";

const AdminGet = () => {
  useTitle("techNotes: Users List");
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  console.log(users);
  

  return (
    <>
      <div className="bg-transparent  absolute  w-full h-full">
        <div className="relative w-full my-14 flex justify-center items-center h-full">
          <div className="bg-[rgba(255,255,255,0.15)]  text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-2/3 lg:w-1/3 h-auto">
            <div className="flex justify-center items-center font-dsr text-2xl bg-red-600 bg-opacity-25 w-auto rounded-xl mx-4 mt-4 mb-4 text-black">
              `Admin {isSuccess ? 'message' : "hello"}`
              <FlagIcon className="w-5 h-10 ml-2 text-yellow-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminGet;
