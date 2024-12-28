import { FormattedMessage } from "react-intl";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const toastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);

  const showToast = (toastData) => {
    setToastMessage(toastData.message);
    setTypeMessage(toastData.typeMessage);
  };

  return (
    <toastContext.Provider value={{ toastMessage, typeMessage, showToast }}>
      {children}
    </toastContext.Provider>
  );
};

export const useToast = () => useContext(toastContext);
