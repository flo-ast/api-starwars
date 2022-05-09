import Navbar from "../components/Navbar";
import ThumbnailFilms from "../components/ThumbnailFilms";

const Films = () => {
    return (
        <div className=" text-amber-400 bg-neutral-900">
            <Navbar />
            <h1 className="w-1/3 mx-auto mb-24 py-4 border-b-2 border-amber-600 text-center text-5xl text-amber-600 ">Films</h1>
            <ThumbnailFilms />
        </div>
    );
}
  
  export default Films;