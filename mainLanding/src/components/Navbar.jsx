import React from "react";
const links = [
  { name: "Services", url: "https://tcilitchandigarh.com/service.html" },
  { name: "Our Work", url: "https://tcilitchandigarh.com/projects.html" },
  { name: "About Us", url: "https://tcilitchandigarh.com/about.html" },
  { name: "Training", url: "https://tcilitchandigarh.com/training_in_chandigarh.html" },
  { name: "Contact", url: "https://tcilitchandigarh.com/contact_us.html" }];

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-neue flex justify-between items-center backdrop-blur  bg-transparent ">
      <div className="logo cursor-pointer">
        <div className="links flex text-lg">TCIL-IT</div>
        
      </div>
      {/* <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-light capitalize cursor-pointer ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div> */}

      <div className="links flex gap-10">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className={`text-lg font-light capitalize cursor-pointer ${
              index === 4 && "ml-32"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
