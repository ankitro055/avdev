 import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Link from "next/link";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: 
  "Their precision and innovation didn't just improve our workflow — they redefined it. This is the level of quality we've been striving for.",
name: "Anil Upadhyay",
designation: "Director, Arc Institute",
src: "/anilsir.jpeg",

    },
    {
      quote: 
  "The system is intuitive, adaptable, and perfectly aligned with the needs of a modern optometry practice. It’s made our patient care more efficient and professional.",
name: "Azeet Yadav",
designation: "Founder, Optometrist",
src: "/eye.jpeg",

    },
    {
       quote: 
  "This solution has streamlined our operations and boosted team productivity. The user-friendly design turns complex tasks into seamless workflows.",
name: "Pinki Singh",
designation: "Director, Ujjwal Welfare Trust",
src: "/ngo.jpg",


     },
    {
       quote: 
  "Exceptional support paired with powerful features. It's refreshing to use a solution that truly delivers on every promise.",
name: "Ravindra Kumar",
designation: "Director, Max Infotech",
src: "/max.jpeg",


     },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Manish Singh",
      designation: "VP of Technology at FutureNet",
      src: "/manish.jpg",

     },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#C6A7F2] sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-[#B272F2] md:text-xl">
              Trusted by industry leaders across the globe. Here's what they have to say about their experience with our platform.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <AnimatedTestimonials 
            testimonials={testimonials} 
            className="border-[#B272F2] bg-[#361259]/50"
          />
        </div>
        <div className="mt-8 text-center text-[#C6A7F2]">
          <p className="text-sm">Join our growing list of satisfied customers</p>
           <Link href="/contact">
  <button className="mt-4 px-6 py-2 rounded-full bg-[#B272F2] text-[#361259] font-medium hover:bg-[#C6A7F2] transition-colors">
    Get Started Today
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}