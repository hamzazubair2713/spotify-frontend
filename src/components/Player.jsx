import { assets, songsData } from "../assets/assets";
const Player = () => {
  return (
    <div className="h-[10%] bg-black text-white flex items-center gap-4 px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 " src={songsData[0].image} alt="" />
        <div>
          <span>{songsData[0].name}</span>
          <p>{songsData[0].desc.slice(0, 15)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4" src={assets.shuffle_icon} alt="" />
          <img className="w-4" src={assets.prev_icon} alt="" />
          <img className="w-4" src={assets.play_icon} alt="" />
          <img className="w-4" src={assets.next_icon} alt="" />
          <img className="w-4" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>01:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>03:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.volume_icon} alt="" />
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
