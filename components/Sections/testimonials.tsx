import axios from "axios";
import { FormattedMessage, FormattedDate } from "react-intl";
import { useState, useEffect } from "react";
import NoData from "../Parts/NoData";

const TestimonialsURL = `${process.env.NEXT_PUBLIC_API_URL}/testimonials`;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await axios.get(TestimonialsURL);
        if (response.status === 201) {
          const dateTestimonials = response.data.sort(
            (a: { TestimonialDate: string }, b: { TestimonialDate: string }) =>
              new Date(b.TestimonialDate).getTime() -
              new Date(a.TestimonialDate).getTime()
          );
          setTestimonials(dateTestimonials);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    getTestimonials();
  }, []);

  return (
    <section id="Testimonials" className="py-8 px-4 ml-10">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-[#76829e]">
          <FormattedMessage
            id="section.testimonials.title1"
            defaultMessage="Client"
          />
        </span>{" "}
        <span>
          <FormattedMessage
            id="section.testimonials.title2"
            defaultMessage="Testimonials"
          />
        </span>
      </h1>
      <NoData data={testimonials} messageLoading="loading.testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-8 m-2">
            <p className="mb-2">{testimonial.TestimonialBody}</p>
            <p id="userTestimonial" className="font-semibold">
              {testimonial.Author}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <FormattedDate
                value={testimonial.TestimonialDate}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
