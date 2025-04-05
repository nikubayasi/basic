"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json["products"]);
    })();
  }, []);
  return (
    <div>
      <h1 className="text-xl">Call API</h1>
      <p></p>
    </div>
  );
};

export default Page;
