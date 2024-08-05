/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const {
    SeekBar,
    SeekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previousSong,
    nextSong,
    manualAdjustDuration,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black text-white flex items-center gap-4 px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 " src={track.image} alt="" />
        <div>
          <span>{track.name}</span>
          <p>{track.desc.slice(0, 25)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4" src={assets.shuffle_icon} alt="" />
          <img
            className="w-4"
            src={assets.prev_icon}
            alt=""
            onClick={previousSong}
          />
          {playStatus ? (
            <img
              className="w-4"
              src={assets.pause_icon}
              alt=""
              onClick={pause}
            />
          ) : (
            <img className="w-4" src={assets.play_icon} alt="" onClick={play} />
          )}
          <img
            className="w-4"
            src={assets.next_icon}
            alt=""
            onClick={nextSong}
          />
          <img className="w-4" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute <= 9
              ? "0" + time.currentTime.minute
              : time.currentTime.minute}
            :
            {time.currentTime.second <= 9
              ? "0" + time.currentTime.second
              : time.currentTime.second}{" "}
          </p>

          <div
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            onClick={manualAdjustDuration}
            ref={SeekBg}
          >
            <hr
              ref={SeekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full transition ease-in-out "
            />
          </div>
          <p>
            {time.totalTime.minute <= 9
              ? "0" + time.totalTime.minute
              : time.totalTime.minute}
            :
            {time.totalTime.second <= 9
              ? "0" + time.totalTime.second
              : time.totalTime.second}
          </p>
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
