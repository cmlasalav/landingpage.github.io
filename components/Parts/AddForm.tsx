import { useState } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { useToast } from "../../context/toastContext";
import { useUserName } from "context/userContext";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

interface SharedFormProps {
  type: "services" | "testimonials";
  onClose: () => void;
}

const SharedForm: React.FC<SharedFormProps> = ({ type, onClose }) => {
  //Toast Message
  const { showToast } = useToast();
  //UserName
  const { userName } = useUserName();
  //Loader State
  const [loader, setLoader] = useState(false);
  //Form State
  const [formData, setFormData] = useState(
    type === "services"
      ? {
          ServiceName_EN: "",
          ServiceName_ES: "",
          ServiceDescription_EN: "",
          ServiceDescription_ES: "",
          ServiceImage: "",
        }
      : {
          Author: userName,
          TestimonialBody: "",
        }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(`${APIURL}/${type}`, formData);
    try {
      const response = await axios.post(`${APIURL}/${type}`, formData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        showToast({
          message: `modal.confirm.${type}`,
          typeMessage: "success",
        });
        onClose();
      }
    } catch (error) {
      console.log(error);
      showToast({ message: `modal.error.${type}`, typeMessage: "error" });
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">
          <FormattedMessage
            id={`${type}.form.title`}
            defaultMessage={
              type === "services" ? "Add New Service" : "Add New Testimonial"
            }
          />
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "services" ? (
            <>
              <div>
                <label
                  htmlFor="ServiceName_EN"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="service.name.english"
                    defaultMessage="Service Name (English)"
                  />
                </label>
                <input
                  type="text"
                  id="ServiceName_EN"
                  name="ServiceName_EN"
                  value={formData.ServiceName_EN}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="ServiceName_ES"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="service.name.spanish"
                    defaultMessage="Service Name (Spanish)"
                  />
                </label>
                <input
                  type="text"
                  id="ServiceName_ES"
                  name="ServiceName_ES"
                  value={formData.ServiceName_ES}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="ServiceDescription_EN"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="service.description.english"
                    defaultMessage="Service Description (English)"
                  />
                </label>
                <textarea
                  id="ServiceDescription_EN"
                  name="ServiceDescription_EN"
                  value={formData.ServiceDescription_EN}
                  onChange={handleChange}
                  required
                  className="resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={3}
                />
              </div>
              <div>
                <label
                  htmlFor="ServiceDescription_ES"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="service.description.spanish"
                    defaultMessage="Service Description (Spanish)"
                  />
                </label>
                <textarea
                  id="ServiceDescription_ES"
                  name="ServiceDescription_ES"
                  value={formData.ServiceDescription_ES}
                  onChange={handleChange}
                  required
                  className="resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={3}
                />
              </div>
              <div>
                <label
                  htmlFor="ServiceImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="service.img"
                    defaultMessage="Service Image URL"
                  />
                </label>
                <input
                  type="text"
                  id="ServiceImage"
                  name="ServiceImage"
                  value={formData.ServiceImage}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label
                  htmlFor="Author"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage id="form.author" defaultMessage="Author" />
                </label>
                <input
                  type="text"
                  id="Author"
                  name="Author"
                  value={formData.Author}
                  onChange={handleChange}
                  readOnly
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="TestimonialBody"
                  className="block text-sm font-medium text-gray-700"
                >
                  <FormattedMessage
                    id="testimonial.body"
                    defaultMessage="Testimonial"
                  />
                </label>
                <textarea
                  id="TestimonialBody"
                  name="TestimonialBody"
                  value={formData.TestimonialBody}
                  onChange={handleChange}
                  required
                  className=" resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={4}
                />
              </div>
            </>
          )}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FormattedMessage id="form.cancel" defaultMessage="Cancel" />
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FormattedMessage
                id="modal.button.accept"
                defaultMessage="Submit"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SharedForm;
