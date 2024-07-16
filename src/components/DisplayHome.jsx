import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
      </div>
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
    </>
  );
};

export default DisplayHome;
