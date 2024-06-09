import { RiExchangeDollarFill } from "@remixicon/react";

export const Slider = () => {
  const data = [
    {
      id: 1,
      img: "./images/r1.png",
      title: "Aliva Priva Jardin",
      price: "66,353",
      desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    },
    {
      id: 2,
      img: "./images/r2.png",
      title: "Asatti Garden City",
      price: "35,853",
      desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    },
    {
      id: 3,
      img: "./images/r3.png",
      title: "Citralan Puri Serang",
      price: "47,043",
      desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    },
    {
      id: 1,
      img: "./images/r1.png",
      title: "Aliva Priva Jardin",
      price: "66,353",
      desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    },
    {
      id: 2,
      img: "./images/r2.png",
      title: "Asatti Garden City",
      price: "35,853",
      desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    },
    {
      id: 3,
      img: "./images/r3.png",
      title: "Citralan Puri Serang",
      price: "47,043",
      desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    },
  ];
  return (
    <div className="w-full bg-white px-10 py-4">
      <h1 className="text-3xl text-primary-500 font-bold">Best Choices</h1>
      <h1 className="text-5xl text-blue-900 font-bold">Popular Residencies</h1>
      <div className="px-5 flex items-center justify-between gap-4 overflow-x-auto py-6 hide-scrollbar">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center min-w-[300px] h-[375px] bg-white shadow rounded-lg px-4 py-2 gap-2 hover:shadow-lg hover:scale-95 hover:cursor-pointer transition-all ease-in-out duration-500 hover:bg-gradient-to-t from-red-100 to-blue-100"
          >
            <img
              src={`${item.img}`}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <h1 className="text-2xl text-slate-500 font-bold flex gap-2 items-center">
              <RiExchangeDollarFill className="text-yellow-500 font-bold" />
              {item.price}
            </h1>
            <h1 className="text-2xl text-blue-900 font-bold">{item.title}</h1>
            <p className="text-sm text-gray-600 tracking-tighter">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
