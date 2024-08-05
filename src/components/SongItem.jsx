import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

/* eslint-disable react/prop-types */
const SongItem = ({ image, name, id, desc, ...props }) => {
  const { playSong } = useContext(PlayerContext);

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer transition ease-in-out delay-[0.3] bg-[#121212] hover:bg-[#ffffff26]"
      {...props}
      onClick={() => playSong(id)}
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
