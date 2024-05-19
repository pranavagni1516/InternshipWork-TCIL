import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            // src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"

            src="https://tcilitchandigarh.com/images/tcilchandigarh_logo.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 top-[270px] text-white hover:bg-black hover:text-white">
            <a href="https://tcilitchandigarh.com/index.html">
              Got a query ? Feel free to ask , we got you!
            </a>
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            // src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"

            src="https://tcilitchandigarh.com/images/tcilchandigarh_logo.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 top-[270px] text-white  hover:bg-black">
            <a href="https://tcilitchandigarh.com/query.php">&copy;2024</a>
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            // src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"

            src="https://tcilitchandigarh.com/images/tcilchandigarh_logo.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 top-[270px] text-white  hover:bg-black transition  ">
            <a href="https://tcilitchandigarh.com/blog.html">BLOGS</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
