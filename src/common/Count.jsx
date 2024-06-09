import { RiAddFill } from "@remixicon/react";

export const Count = ({ number, text }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-cleft flex-center gap-3">
        {number} <RiAddFill className="text-primary-600" />
      </h1>
      <p className="text-slate-500">{text}</p>
    </div>
  );
};
