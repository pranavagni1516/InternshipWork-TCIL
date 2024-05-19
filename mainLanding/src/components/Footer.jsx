import React from "react";

function Footer() {
  return (
    <div className="w-full flex  h-[580px] p-20">
      <div className="w-1/2 h-full flex flex-col justify-between font-grotes">
        <div className="heading">
          <h1 className="text-[9vw] uppercase leading-none font-extrabold">
            Eye-
          </h1>
          <h1 className="text-[9vw] uppercase leading-none font-extrabold">
            Opening
          </h1>
          <div className="w-fit
          ">
          <img
                      // src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      src="https://tcilitchandigarh.com/images/tcilchandigarh_logo.png"
                      className="w-full h-full bg-cover rounded-xl"
                      alt=""
                    />
          </div>
        </div>
        
      </div>
      <div className="w-1/2">
        <h1 className="text-[9vw] uppercase leading-none font-semibold font-grotes">
          Presentations
        </h1>
        <div className="dets font-neue mt-10">
          <a className="block text-xl font-light" href="">
            Facebook
          </a>
          <a className="block text-xl font-light" href="">
            Instagram
          </a>
          <a className="block text-xl font-light" href="">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
