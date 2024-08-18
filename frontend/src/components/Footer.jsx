import React from "react";

const Footer = () => {
  return (
    <div className="pl-[10vw] pr-[10vw] p-10 bg-black">
      <div className="flex justify-between gap-6">
        {/* --------------- Abstract ------------ */}
        <div className="hidden md:flex sm:flex lg:flex flex-col gap-2">
          <h1 className="font-bold">Abstract</h1>
          <h4 className="font-medium">Branches</h4>
        </div>

        {/* --------------- Resources ------------ */}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Resources</h1>
          <h4 className="font-medium">Blog</h4>
          <h4 className="font-medium">Help Center</h4>
          <h4 className="font-medium">Release Notes</h4>
          <h4 className="font-medium">Status</h4>
        </div>

        {/* --------------- Community ------------ */}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Community</h1>
          <h4 className="font-medium">Twitter</h4>
          <h4 className="font-medium">LinkedIn</h4>
          <h4 className="font-medium">Facebook</h4>
          <h4 className="font-medium">Dribble</h4>
          <h4 className="font-medium">Podcast</h4>
        </div>

        {/* --------------- Company ------------ */}
        <div className="flex flex-col gap-9">
          <div>
            <h1 className="font-bold">Company</h1>
            <h4 className="font-medium">About Us</h4>
            <h4 className="font-medium">Careers</h4>
            <h4 className="font-medium">Legal</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Contact Us</h1>
            <h4 className="font-medium">info@abstract.com</h4>
          </div>
        </div>

        {/* --------------- Details ------------ */}
        <div className="hidden md:flex sm:flex lg:flex flex-col gap-3 mt-[58px]">
          <img src="/logo.svg" className="h-[30px] w-[30px]" />
          <h1>@ Copyright 2024</h1>
          <h1>Abstract Studio Design , Inc.</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
