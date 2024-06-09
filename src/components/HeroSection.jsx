import { Count } from "../common/Count";
import { Search } from "../common/Search";

export const HeroSection = () => {
  return (
    <div className="mt-[5rem] w-full flex min-h-screen flex-col lg:flex-row p-10 lg:gap-10 gap-[5rem]">
      <div className="lg:w-1/2 w-full flex justify-center items-start flex-col gap-10">
        <div className="heading flex flex-col gap-2 relative z-5">
          <h1 className="text-6xl font-bold text-cleft">Discover</h1>
          <h1 className="text-6xl font-bold text-cleft">Most Suitable</h1>
          <h1 className="text-6xl font-bold text-cleft">Property</h1>
          <div className="circle"></div>
        </div>
        <p className="text-left text-slate-400 lg:w-full sm:w-[70%] w-[90%]">
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </p>
        <Search />
        <div className="flex w-full sm:w-3/4 lg:w-full justify-between">
          <Count number={9000} text={"Premium Product"} />
          <Count number={2000} text={"Happy Customer"} />
          <Count number={28} text={"Awards Winning"} />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex-center">
        <img
          src="./images/hero-image.png"
          alt="hero"
          className="min-h-[60vh] lg:min-h-[80vh] w-3/4 sm:w-3/6 lg:w-full rounded-2xl rounded-t-[15rem]  border-primary-600 border-4"
        />
      </div>
    </div>
  );
};
