/* eslint-disable react/no-unescaped-entities */
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="icon" />
          <span className="font-bold">Home</span>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="icon" />
          <span className="font-bold">Search</span>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <span className="font-bold">Yout Library</span>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2">
          <strong className="font-bold">Create Your First Playlist</strong>
          <p>it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2 ">
          <strong className="font-bold">
            Let's findsome podcasts to follow
          </strong>
          <p>we'll keep you update on new epeisodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4">
            Browse podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
