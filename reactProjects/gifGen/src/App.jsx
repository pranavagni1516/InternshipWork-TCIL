import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center">
      <div className=" w-[1200px] h-15 rounded-lg mx-auto mt-5 flex justify-center text-center items-center p-5 bg-white text-4xl font-bold border border-black ">RANDOM GIFS</div>
      <div className="flex flex-col ">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
