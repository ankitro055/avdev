 "use client";

import React from "react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Ravindra Kumar",
    designation: "Director Of Max Education",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762613604/max_wnxlal.jpg",
  },
  {
    id: 2,
    name: "Azeet Yadav",
    designation: "Optometrist/Founder",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762613461/eye_k4bi4b.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=800",
  },
  {
    id: 4,
    name: "Pinki Singh",
    designation: "Director Of Ujjwal Welfare Trust",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762613254/ngo_wz3top.jpg",
  },
  {
    id: 5,
    name: "Manish",
    designation: "Soap Developer",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762593662/manish_esavu4.jpg",
  },
  {
    id: 6,
    name: "Anil Updhaya",
    designation: "Director Of ARC Computer Institute",
    image:
      "https://res.cloudinary.com/dcbgle07k/image/upload/v1762593563/anilsir_budotr.jpg",
  },
];

// Optimized Image Wrapper (No TypeScript Types Here)
export function AvatarImage({ src, alt, priority }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="rounded-full object-cover"
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export function AnimatedTooltipPreview() {
  // First image is highest LCP relevance → load eagerly
  const prioritizedPeople = people.map((p, index) => ({
    ...p,
    priority: index === 0,
  }));

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip
        items={prioritizedPeople}
        renderImage={(person) => (
          <AvatarImage src={person.image} alt={person.name} priority={person.priority} />
        )}
      />
    </div>
  );
}
