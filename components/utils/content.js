import Logo from '../../public/images/Services.jpg'

export const firstParagraph = (postBody) => {
  for (const content of postBody) {
    if (typeof content === "string") {
      return <span>{content}</span>;
    }
    if (typeof content === "object" && content.contentType === "text") {
      return <span>{content.contentBody}</span>;
    }
  }
  return null;
};

export const findImageUrl = (postBody) => {
  for (const content of postBody) {
    if (typeof content === "object" && content.contentType === "image") {
      return content.contentBody;
    }
  }
  return Logo;
};
