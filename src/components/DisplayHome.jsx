/* eslint-disable react/no-unescaped-entities */
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((elem) => (
            <AlbumItem
              image={elem.image}
              desc={elem.desc}
              name={elem.name}
              key={elem.id}
              id={elem.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((elem) => (
            <SongItem
              image={elem.image}
              desc={elem.desc}
              name={elem.name}
              key={elem.id}
              id={elem.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
