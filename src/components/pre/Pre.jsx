"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Get a fully customized website tailored to your brand and business needs. We create responsive, fast, and SEO-friendly websites that leave a lasting impression.",
      name: "Web Development",
      designation: "Design and Development",
      src: "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMZeHetErY7LJ9eqvB1ajVKuU0Wbk4HxwtfpQP",
    },
    {
      quote:
        "We build high-performance, user-friendly mobile apps tailored to your business needs. Whether it's iOS, Android, or cross-platform, we ensure a seamless experience.",
      name: "App Development",
      designation: "Development and Implementation",
      src: "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMKEVYvfYTeMNSz6H1hI59mujstUnv4wxbg7AJ",
    },
    {
      quote:
        "We provide cutting-edge data analytics services to help businesses make informed decisions based on real-time data.",
      name: "Data Analytics",
      designation: "Data Analysis and Visualization",
      src: "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQM4T167Big9EvzHnJuiBPF7OxSftNcKmGkZXaj",
    },
    {
      quote:
        "We offer a range of digital marketing services to help businesses grow their online presence and reach their target audience.",
      name: "Digital Marketing",
      designation: "Digital Marketing and Growth",
      src: "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMGOm3HQ2DE0RCnIYNjs5P6LSQTJchgzdy8me4",
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { AnimatedTestimonialsDemo };
