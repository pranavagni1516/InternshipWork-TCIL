import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='font-neue text-[4vw]'>
      TCIL-IT, a division of TCIL (a Government of India Enterprise under the Ministry of Communication and IT), offers six-month and six-week industrial training programs in Chandigarh for IT students. Established in 1978 and expanded in 1999, this training initiative is managed by ICSIL in partnership with DSIIDC, an undertaking of the Delhi Government.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex uppercase  gap-10 items-center px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white" >
            <a href="https://tcilitchandigarh.com/about.html">Read More</a>
            <div className="w-3 h-3 bg-zinc-100 rounded-full hover:scale-150 transform duration-200"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl ">
          <img
            className="w-full h-full object-cover rounded-xl"
            // src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            src="https://tcilitchandigarh.com/gallery/thumbnails/6weeks_summer_training_chandigarh_mohali.jpg"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
