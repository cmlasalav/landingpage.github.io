import { FormattedMessage } from "react-intl";
import { useEffect } from "react";
import { useToast } from "../../context/toastContext";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const ToastMessage = () => {
  const { toastMessage, typeMessage } = useToast();

  useEffect(() => {
    if (toastMessage) {
      if (typeMessage === "error") {
        toast.error(
          <FormattedMessage id={toastMessage} defaultMessage="Error" />
        );
      } else {
        toast.success(
          <FormattedMessage id={toastMessage} defaultMessage="Success" />
        );
      }
    }
  }, [toastMessage, typeMessage]);

  return <ToastContainer closeOnClick />;
};

export default ToastMessage;
