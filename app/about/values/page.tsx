import React from "react";
import CoreValues from "@/app/components/CoreValues";
// import Image from "next/image";

const Values = () => {
  return (
    <section className="values bg-black mt-12">
      {/* <div className="banner w-full h-80 relative">
        <Image
          src="/images/quortek-logo.png"
          alt="quortek-banner"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div> */}
      <CoreValues />
    </section>
  );
};

export default Values;
