import { FormattedMessage } from "react-intl";
import ContactWithUs from "./contactWithUs";
import ContactDirection from "./contactDirection";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="max-w-[1400px] ml-10 px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-[#76829e]">
          <FormattedMessage id="section.contact" defaultMessage="Contact" />
        </span>
      </h1>
      <div className="mb-8 max-w-2xl">
        <p className="text-2xl font-semibold mb-2">
          <FormattedMessage
            id="contact.subtitle"
            defaultMessage="Get in Touch"
          />
        </p>
        <p className="text-gray-600">
          <FormattedMessage
            id="contact.paragraph"
            defaultMessage="Ready to elevate your business? Contact us today to schedule a consultation or learn more about our services."
          />
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 space-y-8">
          <ContactForm />
          <ContactWithUs />
        </div>
        <div className="lg:w-2/3">
          <ContactDirection />
        </div>
      </div>
    </section>
  );
}
