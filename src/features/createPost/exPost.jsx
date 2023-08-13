import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import image from "../../img/2023-02-11T13-18-06.816Zlaura-college-K_Na5gCmh38-unsplash.jpg";
 
const CreatePos = () => {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form  className="w-full h-full flex flex-col justify-center items-center">
                  <FormikControl
                    control="chakraInput"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePos;
