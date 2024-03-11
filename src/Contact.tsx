import React, { useRef, FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contact from "./images/service/contact.svg";
import { motion } from "framer-motion";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isSent, setSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setButtonDisabled(true);
      setSent(false);

      emailjs
        .sendForm(
          "service_aycbhrh",
          "template_oaeqrer",
          form.current,
          "VGJtSU1PDnDWJzew1"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setSent(true);

            setTimeout(() => {
              setInputValues({
                user_name: "",
                user_email: "",
                message: "",
              });
              setButtonDisabled(false);
              setSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            setButtonDisabled(false);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    // Check if all inputs are filled to enable/disable the button
    const isValid = Object.values(inputValues).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [inputValues]);
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-20 md:pb-0 relative h-auto md:h-screen flex flex-col items-center justify-center">
      {/** Error */}

      {isSent && (
        <div
          id="alert-1"
          className="absolute bottom-0 right-0 m-5 flex items-center p-4 mb-4 text-primary rounded-lg bg-blue-50 dark:bg-soft dark:text-blue-400"
          role="alert"
        >
          <span className="sr-only">Info</span>
          <div className="text-sm font-medium mx-5">Message Send</div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-1"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      {/** Error */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="flex flex-col md:flex-row"
      >
        <div className="relative flex flex-col bg-white md:w-[400px] p-4 md:rounded-l-xl">
          <div className="absolute bottom-0 right-1 hidden sm:block">
            <img className="w-[295px]" src={contact} alt="" />
          </div>
          <div className="font-primary font- text-4xl my-8">Let’s talk.</div>
          <p className="font-primary font z-10">
            Hello there! I'm Aaron James Bumagat, a passionate 21-year-old web
            developer and designer. Have a project in mind or seeking a creative
            solution for your website? I'm here to help! Let's discuss your
            ideas, brainstorm together, and create something amazing. —I'm
            excited to hear from you!
          </p>
          <div className="flex mt-10 md:mt-auto mb-2">
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 1,
              }}
              className="z-10"
            >
              <a
                href="mailto:aj.jixes@gmail.com"
                className="hover:text-primary ease-in-out duration-150 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 1,
              }}
              className="ms-3 z-10"
            >
              <a
                href="https://github.com/ajjixes"
                target="_blank"
                className="hover:text-primary ease-in-out duration-150 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M7.02423 2.31C7.77519 2.56439 8.4896 2.91605 9.14923 3.356C10.0808 3.11791 11.0387 2.9983 12.0002 3C12.9932 3 13.9512 3.124 14.8492 3.355C15.5086 2.91548 16.2227 2.56416 16.9732 2.31C17.6702 2.073 18.6632 1.689 19.2532 2.342C19.6532 2.786 19.7532 3.53 19.8242 4.098C19.9042 4.732 19.9232 5.558 19.7132 6.378C20.5162 7.415 21.0002 8.652 21.0002 10C21.0002 12.042 19.8942 13.815 18.2572 15.043C17.4694 15.6265 16.5956 16.084 15.6672 16.399C15.8812 16.889 16.0002 17.431 16.0002 18V21C16.0002 21.2652 15.8949 21.5196 15.7073 21.7071C15.5198 21.8946 15.2654 22 15.0002 22H9.00023C8.73501 22 8.48066 21.8946 8.29312 21.7071C8.10559 21.5196 8.00023 21.2652 8.00023 21V20.009C7.04523 20.126 6.24423 20.022 5.56323 19.733C4.85123 19.431 4.35523 18.963 3.98223 18.515C3.62823 18.091 3.24223 17.135 2.68423 16.949C2.5596 16.9075 2.44437 16.8419 2.34512 16.7558C2.24586 16.6698 2.16452 16.5651 2.10574 16.4476C1.98703 16.2104 1.96742 15.9357 2.05123 15.684C2.13504 15.4323 2.3154 15.2242 2.55263 15.1055C2.78986 14.9868 3.06454 14.9672 3.31623 15.051C3.98223 15.273 4.41623 15.753 4.71323 16.139C5.19323 16.759 5.58323 17.569 6.34323 17.892C6.65623 18.025 7.11523 18.112 7.83323 18.014L8.00023 17.98C8.00214 17.4358 8.11547 16.8977 8.33323 16.399C7.40482 16.084 6.53104 15.6265 5.74323 15.043C4.10623 13.815 3.00023 12.043 3.00023 10C3.00023 8.654 3.48323 7.418 4.28423 6.382C4.07423 5.562 4.09223 4.734 4.17223 4.099L4.17723 4.061C4.25023 3.479 4.33523 2.794 4.74323 2.342C5.33323 1.689 6.32723 2.074 7.02323 2.311" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 1,
              }}
              className="mt-1 ms-3 z-10"
            >
              <a
                href="https://www.facebook.com/akocaj.bumagat.5"
                target="_blank"
                className="hover:text-primary ease-in-out duration-150 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M2.396 19H6.396V10.99H10L10.396 7.01H6.396V5C6.396 4.73478 6.50136 4.48043 6.68889 4.29289C6.87643 4.10536 7.13078 4 7.396 4H10.396V0H7.396C6.06992 0 4.79815 0.526784 3.86047 1.46447C2.92278 2.40215 2.396 3.67392 2.396 5V7.01H0.396L0 10.99H2.396V19Z" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 1,
              }}
              className="mt-1 z-10"
            >
              <a
                href="https://www.instagram.com/aj.jixes/"
                target="_blank"
                className="hover:text-primary ease-in-out duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M16.0833 0C17.724 0.004375 18.5567 0.013125 19.2756 0.0335417L19.5585 0.04375C19.8852 0.0554166 20.2075 0.0699999 20.5969 0.0874999C22.1485 0.160417 23.2073 0.405417 24.1363 0.765625C25.0988 1.13604 25.9096 1.63771 26.7204 2.44708C27.462 3.1761 28.0358 4.05794 28.4019 5.03125C28.7621 5.96021 29.0071 7.01896 29.08 8.57208C29.0975 8.96 29.1121 9.28229 29.1238 9.61042L29.1325 9.89333C29.1544 10.6108 29.1631 11.4435 29.1661 13.0842L29.1675 14.1721V16.0825C29.1711 17.1462 29.1599 18.2099 29.134 19.2733L29.1252 19.5563C29.1136 19.8844 29.099 20.2067 29.0815 20.5946C29.0085 22.1477 28.7606 23.205 28.4019 24.1354C28.0368 25.1093 27.4629 25.9913 26.7204 26.7196C25.9912 27.4609 25.1094 28.0346 24.1363 28.401C23.2073 28.7613 22.1485 29.0063 20.5969 29.0792C20.2508 29.0955 19.9047 29.11 19.5585 29.1229L19.2756 29.1317C18.5567 29.1521 17.724 29.1623 16.0833 29.1652L14.9954 29.1667H13.0865C12.0223 29.1703 10.9581 29.1592 9.89417 29.1331L9.61126 29.1244C9.26506 29.1113 8.91895 29.0962 8.57292 29.0792C7.02126 29.0063 5.96251 28.7613 5.03209 28.401C4.0589 28.0355 3.17741 27.4617 2.44938 26.7196C1.70716 25.9908 1.13284 25.1089 0.766467 24.1354C0.406258 23.2065 0.161258 22.1477 0.0883414 20.5946C0.0720938 20.2485 0.0575104 19.9024 0.0445914 19.5563L0.0372999 19.2733C0.0104258 18.2099 -0.00172825 17.1462 0.000841459 16.0825V13.0842C-0.0032287 12.0205 0.00746688 10.9567 0.0329249 9.89333L0.0431332 9.61042C0.0547999 9.28229 0.0693831 8.96 0.0868831 8.57208C0.1598 7.01896 0.4048 5.96167 0.765008 5.03125C1.13122 4.05694 1.70668 3.17483 2.45084 2.44708C3.17868 1.70548 4.05959 1.13165 5.03209 0.765625C5.96251 0.405417 7.0198 0.160417 8.57292 0.0874999C8.96084 0.0699999 9.28459 0.0554166 9.61126 0.04375L9.89417 0.0349999C10.9576 0.00908936 12.0213 -0.00209227 13.085 0.00145823L16.0833 0ZM14.5842 7.29167C12.6503 7.29167 10.7956 8.05989 9.42819 9.42735C8.06073 10.7948 7.29251 12.6495 7.29251 14.5833C7.29251 16.5172 8.06073 18.3719 9.42819 19.7393C10.7956 21.1068 12.6503 21.875 14.5842 21.875C16.518 21.875 18.3727 21.1068 19.7402 19.7393C21.1076 18.3719 21.8758 16.5172 21.8758 14.5833C21.8758 12.6495 21.1076 10.7948 19.7402 9.42735C18.3727 8.05989 16.518 7.29167 14.5842 7.29167ZM14.5842 10.2083C15.1587 10.2082 15.7276 10.3213 16.2585 10.5411C16.7893 10.7609 17.2717 11.083 17.678 11.4892C18.0843 11.8954 18.4066 12.3777 18.6266 12.9084C18.8465 13.4392 18.9598 14.0081 18.9599 14.5826C18.96 15.1571 18.8469 15.7261 18.6272 16.2569C18.4074 16.7877 18.0852 17.2701 17.679 17.6764C17.2728 18.0827 16.7906 18.4051 16.2598 18.625C15.7291 18.845 15.1602 18.9582 14.5856 18.9583C13.4253 18.9583 12.3125 18.4974 11.492 17.6769C10.6716 16.8565 10.2106 15.7437 10.2106 14.5833C10.2106 13.423 10.6716 12.3102 11.492 11.4897C12.3125 10.6693 13.4253 10.2083 14.5856 10.2083M22.2419 5.10417C21.7584 5.10417 21.2947 5.29622 20.9529 5.63809C20.611 5.97995 20.419 6.44362 20.419 6.92708C20.419 7.41055 20.611 7.87422 20.9529 8.21608C21.2947 8.55794 21.7584 8.75 22.2419 8.75C22.7253 8.75 23.189 8.55794 23.5309 8.21608C23.8727 7.87422 24.0648 7.41055 24.0648 6.92708C24.0648 6.44362 23.8727 5.97995 23.5309 5.63809C23.189 5.29622 22.7253 5.10417 22.2419 5.10417Z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="bg-soft md:w-[350px] p-4 md:rounded-r-xl">
            <div className="relative font-primary my-4 shadow-md">
              <input
                type="text"
                name="user_name"
                value={inputValues.user_name}
                onChange={handleInputChange}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-soft border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Name
              </label>
            </div>
            <div className="relative font-primary my-4 shadow-md">
              <input
                type="email"
                name="user_email"
                value={inputValues.user_email}
                onChange={handleInputChange}
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-soft border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Email
              </label>
            </div>
            <div className="relative font-primary my-4 shadow-md">
              <textarea
                name="message"
                value={inputValues.message}
                onChange={handleInputChange}
                className="h-32 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-soft border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label className=" absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Message
              </label>
            </div>
            <button
              type="submit"
              className={`text-white w-full mt-20 h-[50px] rounded-md ${
                isFormValid ? "bg-primary" : "bg-primary/50"
              } ${isFormValid ? "" : "cursor-not-allowed"}`}
              disabled={!isFormValid || isButtonDisabled}
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
      <div className="absolute bottom-3 text-white font-primary z-10 text-xs">
        © {currentYear} - Aaron James Bumagat
      </div>
    </div>
  );
};
