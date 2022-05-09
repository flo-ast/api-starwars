import Navbar from "../components/Navbar";
import ThumbnailSpecies from "../components/ThumbnailSpecies";

const Species = () => {
    return (
        <div className=" text-amber-400 bg-neutral-900">
            <Navbar />
            <h1 className="w-1/3 mx-auto mb-10 py-4 border-b-2 border-amber-600 text-center text-5xl text-amber-600 ">
                Species
            </h1>
            <ThumbnailSpecies />
        </div>
    );
}
  
  export default Species;