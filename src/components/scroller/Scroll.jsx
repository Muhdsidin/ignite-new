"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";

const images = [
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMZQEdgRrY7LJ9eqvB1ajVKuU0Wbk4HxwtfpQP",
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMzJQ7xaNoZ3G2rHXoPdKuFTjBv5QNVW4mREah",
  
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMJeCxOsbsQmL4FIPjOkhuG8p6UKY3qb0n9V2v",
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQM89EIm91gqae68lmn9dtJW2FKbLczfiBCI3SZ"

];

function Scroll() {
  return (
    <div className="min-h-[400vh]  bg-black">
      {/* <h1 className="py-10 text-center text-4xl text-white">Our Creative</h1> */}
      <HorizontalScrollCarousel images={images} />
      {/* <h2 className="py-20 text-center text-2xl text-gray-500 dark:text-gray-600">
        Enjoy the Horizontal Scroll Effect
      </h2> */}
    </div>
  );
}

export default Scroll;
