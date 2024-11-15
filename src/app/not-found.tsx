import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="container mx-auto min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative w-full max-w-[422px] mx-auto mb-12">
          {/* Background image with parallax effect */}
          <div className="relative w-full h-[148px] overflow-hidden">
            <Image
              src="/assets/images/404/parallax-image.jpg"
              alt=""
              fill
              className="object-cover transform scale-110"
              priority
            />
          </div>

          {/* Mask overlay */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/404/parallax-mask.png"
              alt=""
              width={422}
              height={148}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        <h1 className="text-[30px] md:text-[48px] font-light text-gray-800 mb-6">
          Page not found
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Please try to start with{" "}
          <Link
            href="/"
            className="text-blue-600 hover:text-gray-800 transition-colors duration-300"
          >
            homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
