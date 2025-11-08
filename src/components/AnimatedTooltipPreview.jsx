"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ravindra Kumar",
    designation: "Director Of Max Education",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762613604/max_wnxlal.jpg ",
  },
  {
    id: 2,
    name: "Azeet Yadav",
    designation: "Optometrist/Founder",
    image:
    'https://res.cloudinary.com/dcbgle07k/image/upload/v1762613461/eye_k4bi4b.jpg'
    },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Pinki Singh",
    designation: "Director Of Ujjwal Welfare Trust",
    image:
    'https://res.cloudinary.com/dcbgle07k/image/upload/v1762613254/ngo_wz3top.jpg'
   },
  {
    id: 5,
    name: "Manish",
    designation: "Soap Developer",
    image:
    'https://res.cloudinary.com/dcbgle07k/image/upload/v1762593662/manish_esavu4.jpg'
    },
  {
    id: 6,
    name: "Anil Updhaya",
    designation: "Director Of ARC Computer Institute",
    image:
    'https://res.cloudinary.com/dcbgle07k/image/upload/v1762593563/anilsir_budotr.jpg'
   },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
