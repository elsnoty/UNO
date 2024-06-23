import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import testmonlise from "../../public/TestMonlise.jpg";
import wow from "../../public/tag.webp";
import Image from "next/image";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-screen bg-center rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden px-10" 
    style={{backgroundImage: `url(${testmonlise.src})`}}>
      <div className="font-bold font-syne flex flex-wrap justify-between items-center pb-10 w-full">
        <div className="max-w-lg">
          <h3>TESTIMONIALS</h3>
          <h1 className="text-5xl max-sm:text-4xl">Awesome clients we’ve worked with</h1>
        </div>
        <div className="flex justify-center items-center w-full sm:w-auto mt-5 sm:mt-0">
          <Image src={wow} alt="Tag" className="bg-black/20 rounded-full max-w-full h-auto max-sm:hidden" />
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "“Excellent support, fast and very didactic answers. The design meets the expecta, the data import develops very quickly a website.”",
    name: "Charles Dickens",
    title: "Senior Developer",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Creative Director",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Senior Developer",
    title: "Creative Director",
  },
  {
    quote:
      "“Excellent support, fast and very didactic answers. The design meets the expecta, the data import develops very quickly a website.”",
    name: "Jane Austen",
    title: "Senior Developer",
  },
  {
    quote:
      "“Excellent support, fast and very didactic answers. The design meets the expecta, the data import develops very quickly a website.”",
    name: "Herman Melville",
    title: "Founder",
  },
];
