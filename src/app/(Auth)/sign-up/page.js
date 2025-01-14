"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage  } from "formik";
// import { Button, } from "rsuite";
import  * as yup from "yup";
import { useRouter } from "next/navigation";
// import { Loader } from 'rsuite';

function SignUp() {
  const router = useRouter();
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
   
  //   onSubmit: (values) => {},
  // });
  const LoginSchema = yup.object().shape({
    email: yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const navigateUser = () => {
    router.push("/login")
  }

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };
  // const Field = ({ error, ...rest }) => {
  //   return (
  //     <Form.Group>
  //       <Input {...rest} className="w-full px-5 py-3 border border-gray-300 rounded-md" />
  //       <Form.ErrorMessage show={!!error} placement="bottomStart" className="text-red-500">
  //         {error}
  //       </Form.ErrorMessage>
  //     </Form.Group>
  //   );
  // };
  return (
    <div>
      <nav className="flex items-center justify-between p-4 w-9/12 m-auto">
        <div className="text-4xl font-extrabold [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
          R
        </div>
        <div className="flex gap-3">
          <button className="px-3 py-1 border border-gray-400 rounded" onClick={navigateUser}>
            Login
          </button>
          <button className="px-3 py-1 border border-gray-400 rounded text-white bg-black">
            Contact
          </button>
        </div>
      </nav>

      <div className="flex justify-center m-auto lg:w-3/12 md:w-5/12 w-11/12 border mt-32 border-gray-400 rounded-xl">
        {/* <Field/> */}
        <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
        <Form className="w-full px-10 py-10">
          <div><h2 className="text-center text-2xl font-semibold p-6">Sign up for R</h2></div>
          <Field
            name="email"
            placeholder="Email"
            type="email"
            className="w-full px-5 py-3 border border-gray-300 rounded-md"
            // value={formik.values.email}
            // error={formik.errors.email}
            // onChange={(value) => formik.setFieldValue("email", value)}
          />
          <ErrorMessage name="email" component="div" className="error text-red-500 " />

          <div className=" w-full pb-6">
          <button disabled={isSubmitting} type="submit" className=" text-lg border border-gray-200 w-full p-3 rounded-md mt-5 bg-black text-white flex gap-3 justify-center">
            {isSubmitting ? <div>Loading...</div> : (<div> <i className="ri-mail-fill"></i>
              Continue with Email</div>)   }
         
          </button>
          </div>
        </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default SignUp;
