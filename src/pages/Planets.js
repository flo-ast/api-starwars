import Navbar from "../components/Navbar";
import ThumbnailPlanets from "../components/ThumbnailPlanets";

const Planets = () => {
    return (
        <div className=" text-amber-400 bg-neutral-900">
            <Navbar />
            <h1 className="w-1/3 mx-auto mb-24 py-4 border-b-2 border-amber-600 text-center text-5xl text-amber-600 ">
                Planets
            </h1>
            <ThumbnailPlanets />
        </div>
    );
}
  
export default Planets;