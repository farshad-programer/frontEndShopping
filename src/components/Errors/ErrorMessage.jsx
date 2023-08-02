const ErrorMessages = ({ message, arrowDir, position }) => {
  let arrowStyle = "";
  let locationstyle = "";
  switch (arrowDir) {
    case "down":
      arrowStyle = "top-full left-3  ";
      break;
    case "up":
      arrowStyle = "bottom-full left-3  rotate-180";
      break;
    case "left":
      arrowStyle = "-left-4  rotate-90 -translate-y-1/2 top-1/2";
      break;
    case "right":
      arrowStyle = "-right-4  -rotate-90 top-1/2 -translate-y-1/2";
      break;
    default:
      arrowStyle = "";
      break;
  }

  switch (position) {
    case "left":
      locationstyle = "absolute w-full  top-0 right-full mr-2 ";
      arrowStyle = "left-[100%] -rotate-90 -ml-1 top-4 ";
      break;
    case "right":
      locationstyle = "absolute w-full top-0 left-full ml-1   ";
      arrowStyle = "right-[98%]  rotate-90 top-3 -left-4";
      break;
    default:
      locationstyle = "relative mb-7";
      break;
  }
  console.log(locationstyle, position);
  return (
    <div
      className={`${locationstyle} shadow-lg shadow-red-600/50  rounded-lg text-gray-100 text-md   lg:w-full   p-3  bg-red-600`}
    >
      {message}
      <div
        className={`${arrowStyle} shadow-xl shadow-red-600/50 w-0 h-0 absolute   border-l-[12px] border-l-transparent border-t-[14px] border-t-red-600 border-r-[12px] border-r-transparent`}
      ></div>
    </div>
  );
};

export default ErrorMessages;
