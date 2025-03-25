"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

// Define the interface for the form fields
interface FieldConfig {
  label?: string;
  placeholder?: string;
  error?: string;
}

interface FormConfig {
  companyName?: FieldConfig;
  companyWebsite?: FieldConfig;
  companyEmail?: FieldConfig;
  companyPhone?: FieldConfig;
  companyContact?: FieldConfig;
  companyComment?: FieldConfig;
  recaptcha?: FieldConfig;
}

interface FormData {
  companyName: string;
  companyWebsite: string;
  companyEmail: string;
  companyPhone: string;
  companyContact: string;
  companyComment: string;
  recaptcha: string;
}

type ApplyFormProps = {
  formConfig?: FormConfig;
  buttonText: string;
  className?: string;
};

export default function ApplyForm({ formConfig, buttonText, className }: ApplyFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger, // Add trigger function
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log("Email sent successfully!");
        setIsSubmitted(true);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setValue("recaptcha", value || ""); // Update reCAPTCHA value
    trigger("recaptcha"); // Trigger validation
  };
  if (!formConfig) return null;
  return (
    <>
      {/* Button to Open Modal */}
      <button onClick={() => setIsOpen(true)} className={className}>
        {buttonText}
      </button>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="relative bg-white w-full h-full flex flex-col">

            {/* Modal Header (Close Button) */}
            <div className="absolute top-4 right-6">
              <button
                onClick={() => { setIsOpen(false); setIsSubmitted(false); }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Form Container - Centers Inputs */}
            <div className="flex-1 flex justify-center items-center">
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-xl">Thank you!</h2>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full max-w-lg space-y-6 p-6"
                >
                  {/* Input Fields */}
                  {Object.keys(formConfig).map((fieldName) => {
                    const field = formConfig[fieldName as keyof FormConfig];
                    if (!field?.label) return null;
                    return (
                      <div key={fieldName} className="relative z-0 w-full group">
                        <input
                          type="text"
                          {...register(fieldName as keyof FormData, {
                            required: field?.error,
                            pattern: fieldName === "companyWebsite"
                              ? {
                                  value: /^([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/,
                                  message: field?.error || ""
                                }
                              : undefined
                          })}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor={fieldName}
                          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          {field.label}
                        </label>
                        {errors[fieldName as keyof FormData] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[fieldName as keyof FormData]?.message}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {/* Hidden input for reCAPTCHA registration */}
                  <input
                    type="hidden"
                    {...register("recaptcha", { required: formConfig?.recaptcha?.error })}
                  />

                  {/* ReCAPTCHA */}
                  <div className="g-recaptcha">
                    <ReCAPTCHA
                      sitekey="6Lctpv8qAAAAAFq8rfXV9DyWF6WowX4p6AbFTZfa"
                      onChange={handleRecaptchaChange}
                    />
                    {errors.recaptcha && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.recaptcha.message}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Modal Footer - Button Positioned at Bottom */}
            {!isSubmitted && (
              <div className="w-full">
                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="flex items-center px-4 py-6 text-white transition-all bg-gradient-to-r from-[#9faebe] to-[#8594a5] bg-[length:200%] hover:bg-[position:-100%_0] duration-300 w-full justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 49"
                    width={32}
                    height={32 * 1.58}
                    fill="none"
                    role="presentation"
                    className="-rotate-90 mr-4"
                  >
                    <path
                      fill="#fff"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      className="object-contain shrink-0"
                      d="M11.1 27.1h10.4L16.3 35l-5.2-7.9Z"
                    />
                    <path
                      stroke="#fff"
                      strokeMiterlimit="10"
                      d="M16.3 27.1V.6M16.3 45.5a15.7 15.7 0 1 0 0-31.4 15.7 15.7 0 0 0 0 31.4Z"
                    />
                  </svg>
                  <span>Send</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
