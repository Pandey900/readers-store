// Contact.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwmRBX03MgwWDEgG_gf7-RkZAy0CwZXWN-UTeyII9lhOt3z8KyAym9eEigBWi5gJiLB/exec";

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully!");
          navigate("/"); // Redirect to the home page after submission
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        toast.error("Failed to send message.");
        console.error("Error!", error.message);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} name="submit-to-google-sheet">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h1 className="font-bold text-3xl">Contact Us</h1>

            {/* Name Input */}
            <div className="mt-8 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your FullName"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="mt-8 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="mt-8 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Type Your Message"
                className="w-80 h-32 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
