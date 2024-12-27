import axios from "axios";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
//import EmailError from "../../Parts/EmailError.jsx";
//import Loader from "../../Parts/Loader.jsx";

const NodeMailerURL = "https://landingpage-backend-one.vercel.app/contact";

export default function ContactForm() {
  const [error, setError] = useState();
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setUserForm((prevUserForm) => ({ ...prevUserForm, [name]: value }));
  };

  const checkInputs = () => {
    if (
      userForm.name === "" ||
      userForm.email === "" ||
      userForm.phone === "" ||
      userForm.message === ""
    ) {
      //setError("form.input.error");
      return false;
    }
    return true;
  };

  const cleanInput = () => {
    setUserForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //setLoader(true);
    //if (!checkInputs()) {
    //setLoader(false);
    //return;
    //}
    try {
      console.log(userForm);
      const response = await axios.post(NodeMailerURL, userForm);
      if (response.status === 200) {
        // setError("form.email.message");
        cleanInput();
      } else {
        console.log("Error");
        // setError("form.email.error.message");
      }
    } catch (error) {
      console.log(error);
      // setError("form.email.error.message");
    } finally {
      console.log("finally");
      //setLoader(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* {loader && <Loader duration={3000} />}*/}
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            <FormattedMessage id="form.name" defaultMessage="Name" />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userForm.name}
            onChange={handleChangeForm}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            <FormattedMessage id="form.email" defaultMessage="Email" />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userForm.email}
            onChange={handleChangeForm}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            <FormattedMessage id="form.phone" defaultMessage="Phone" />
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userForm.phone}
            onChange={handleChangeForm}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            <FormattedMessage
              id="form.message"
              defaultMessage="Tell us how we can help you / Nice to hear about you"
            />
          </label>
          <textarea
            id="message"
            name="message"
            value={userForm.message}
            onChange={handleChangeForm}
            required
            rows={4}
            className="resize-none mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </div>
      </form>
      {/*<EmailError error={error} />*/}
      <div className="flex justify-end">
        <button
          className="mt-4 w-[200px] bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={handleSubmitForm}
        >
          <FormattedMessage
            id="message.button"
            defaultMessage="Send a Message"
          />
        </button>
      </div>
    </div>
  );
}
