import React from "react";
import Image from "next/image";
import pic from "../../public/images/demo.png";
const Page = () => {
  return (
    <div>
      <h2 className="global-text">Hello </h2>
      This is Home
      <Image src={pic} alt="Hero image" />
    </div>
  );
};

export default Page;
