import React from 'react'
import { Field} from 'formik'
import ErrorMessages from '../../components/Errors/ErrorMessage'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import useScreenSize from "../../hooks/screenSize";

function ChakraInput (props) {
  const {isLG}=useScreenSize()
  const { label, name,type, ...rest } = props
  return (
    // <Field name={name}>
    //   {({ field, form }) => (
    //     <FormControl isInvalid={form.errors[name] && form.touched[name]}>
    //       <FormLabel htmlFor={name}>{label}</FormLabel>
    //       <Input id={name} {...rest} {...field} />
    //       <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    //     </FormControl>
    //   )}
    // </Field>
    
     <Field name={name}>
      {({ field, form }) => (
    <div className="flex mx-10 mt-24 mb-10 items-center justify-center h-auto w-auto bg-transparent ">
    <div
      className={`${
        isLG && form.touched[name] && form.errors[name]
          ? "ml-auto  w-full"
          : "space-y-4 w-full "
      }  relative px-2 `}
    >
      {form.touched[name] && form.errors[name] ? (
        <ErrorMessages
          message={form.errors[name]}
          position={isLG ? "left" : ""}
          arrowDir="down"
        />
      ) : null}

      <div
        htmlFor=""
        className={`${isLG ? "w-full" : "  w-full "}  relative  `}
      >
        <input
        {...rest}
         {...field}
          name={name}
          id={name}
          type={type}
          required
          autoComplete="true"
          className={`${
            form.touched[name] && form.errors[name]
              ? " border-red-700  focus:border-red-700  hover:border-red-700  "
              : "border-gray-500 focus:border-gray-500 "
          }   px-4 py-2 text-lg outline-none border-b-4  peer  border-gray-500  
    duration-700 focus:border-indigo-600 bg-transparent w-full`}
        />{" "}
        {form.touched[name] && form.errors[name] ? (
          <ExclamationCircleIcon className="errorInfo " />
        ) : null}
        <span
          className={`${
            form.touched[name] && form.errors[name]
              ? "text-red-700 peer-focus:text-red-700:"
              : " text-green-700 peer-focus:text-green-700"
          } absolute left-0 top-0 px-1 text-lg  
tracking-wide   pointer-events-none 
duration-700 peer-focus:text-lg peer-focus:-translate-y-5 bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-lg peer-valid:-translate-y-5`}
        >
          {label}
        </span>
      </div>
    </div>
  </div>
  
  )
  
}
      </Field>)}

export default ChakraInput
