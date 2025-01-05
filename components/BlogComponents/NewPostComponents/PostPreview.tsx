import { FormattedMessage } from "react-intl";
import Image from "next/image";


export default function PostPreview({ postContent, title }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 max-w-2xl mx-auto">
      <h2 className="font-bold text-xl mb-4">
        <FormattedMessage id="newpost.preview" defaultMessage="Post Preview" />
      </h2>
      <h3 className="text-center font-bold text-2xl mb-6">{title}</h3>
      {postContent.map((item, index) => (
        <div key={index} className="mb-4">
          {item.contentType === "text" ? (
            <p className="text-gray-700 leading-relaxed">{item.contentBody}</p>
          ) : (
            <div className="text-center">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={item.previewURL || item.contentBody}
                  alt="Post Content"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

