import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

export default function Loading({ data, messageLoading }) {
  const [message, setMessage] = useState("loading");
  //Loading paragraph
  useEffect(() => {
    const time = setTimeout(() => {
      setMessage(messageLoading);
    }, 5000);
    return () => clearTimeout(time);
  }, [messageLoading]);

  if (data.length === 0) {
    return (
      <h1 className="font-bold mb-12 ml-10">
        {message === "loading" ? (
          <FormattedMessage
            id="loading.paragraph"
            defaultMessage="Loading data..."
          />
        ) : (
          <FormattedMessage
            id={messageLoading}
            defaultMessage="No data available"
          />
        )}
      </h1>
    );
  }
}
