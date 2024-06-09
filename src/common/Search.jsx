import { RiMapPinFill } from "@remixicon/react";

export const Search = () => {
  return (
    <div className="rounded-md flex items-center p-2 px-4 bg-white lg:w-full sm:w-2/3 w-[90%]">
      <RiMapPinFill className="text-primary-500" size={32} />
      <input
        type="text"
        className="w-full p-2 px-4 text-black focus:outline-none"
      />
      <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-3 rounded-md hover:scale-110 transition-all">
        Search
      </button>
    </div>
  );
};
