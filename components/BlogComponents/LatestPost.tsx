import { FormattedMessage, FormattedDate } from "react-intl";

export default function LatestPost({
  latestPosts,
  // onReadMore,
  // user
}) {
  const firstParagraph = (postBody) => {
    for (const content of postBody) {
      if (typeof content === "string") {
        return content;
      }
      if (typeof content === "object" && content.contentType === "text") {
        return content.contentBody;
      }
    }
    return null;
  };

  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold text-[#76829e] mb-6">
        <FormattedMessage id="blog.latest.post" defaultMessage="Last post" />
      </h2>
      <div className="space-y-6">
        {latestPosts.map((post, index) => {
          const firstImage = post.PostBody.find(
            (content) =>
              typeof content === "object" && content.contentType === "image"
          );
          return (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{post.PostTitle}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {firstParagraph(post.PostBody)}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  <FormattedDate
                    value={post.PostDate}
                    year="numeric"
                    month="short"
                    day="numeric"
                  />
                </p>
                <div className="flex items-center justify-between">
                  <button
                    //onClick={() => onReadMore(post._id, user)}
                    className="text-[#0d98e2] text-sm hover:underline"
                  >
                    <FormattedMessage
                      id="blog.button"
                      defaultMessage="Read more"
                    />
                  </button>
                </div>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                {firstImage ? (
                  <img
                    src={firstImage.contentBody}
                    alt={post.PostTitle}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
