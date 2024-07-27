import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const Login = ({ LoginModal, toggleLogin, toggleRegister }) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/api/auth/signin", values, {
          withCredentials: true,
        });

        resetForm();
        toast.success("LoggedIn succesfully");
        toggleLogin();
      } catch (error) {
        if (!error.response) {
          return toast.error("Failed to contact server");
        } else if (error.request.status) {
          return toast.error(error.response.data);
        } else {
          toast.error("unkown Error occured");
        }
      }
    },
  });

  return (
    <motion.div
      animate={LoginModal ? { x: 0, display: "flex" } : { x: 1500 }}
      transition={{ duration: 1.2 }}
      className="z-50 fixed top-0 left-0  right-0 bottom-0 bg-black/60 hidden"
    >
      <div className="w-full h-full flex items-center">
        <motion.div className="w-[470px] mx-auto bg-mainbgColor px-3 py-3 rounded-md">
          <div className="flex items-center pb-3">
            <h4 className="flex-1 text-center capitalize">Login</h4>
            <button onClick={toggleLogin} className="font-bold text-red-500">
              <RxCross1 size={18} />
            </button>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div>
              <h4 className="capitalize text-sm pb-1 tracking-wide text-gray-300">
                <span>email</span>
                <span className="ml-1 text-red-500">*</span>
              </h4>
              <input
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                name="email"
                type="text"
                placeholder="e.g. brian@gmail.com"
              />
              {touched.email && errors.email && (
                <div className="pl-1">
                  <span className="text-[12px] text-red-600">
                    {errors.email}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h4 className="capitalize text-sm pb-1 tracking-wide text-gray-300">
                <span>password</span>
                <span className="ml-1 text-red-500">*</span>
              </h4>
              <input
                onChange={handleChange}
                values={values.password}
                onBlur={handleBlur} //shows touched fields
                name="password"
                type="password"
              />
              {touched.password && errors.password && (
                <div className="pl-1">
                  <span className="text-[12px] text-red-600">
                    {errors.password}
                  </span>
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={twMerge(
                "bg-[#1fff1fc5] py-3 mt-1 text-black text-sm capitalize font-medium rounded-md",
                isSubmitting && "bg-slate-700",
                isSubmitting && "cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <div className="flex justify-center">
                  <TailSpin
                    visible={true}
                    height="25"
                    width="25"
                    color="red"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                "sign in"
              )}
            </button>
          </form>
          <div>
            <p className="text-[14px] pt-6  pb-4 flex justify-center gap-1  ">
              <span className="text-gray-400">Don't have an account?</span>
              <span
                onClick={() => {
                  toggleLogin();
                  toggleRegister();
                }}
                className="font-medium cursor-pointer"
              >
                <span>Register here</span>
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
