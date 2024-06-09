import { Contact } from "../common/Contact";

export const ContactUs = () => {
  return (
    <div className="w-full bg-white flex min-h-screen flex-col lg:flex-row p-10 lg:gap-10 gap-[3rem]">
      <div className="lg:w-1/2 w-full flex justify-center items-start flex-col gap-4">
        <h1 className="text-3xl text-primary-500 font-bold">
          Way to Contact Us
        </h1>
        <h1 className="text-4xl text-blue-600 font-bold">Easy to Contact Us</h1>
        <p className="truncate-tighter text-slate-400">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <div className="w-full md:w-5/6 lg:w-full grid grid-cols-2 gap-2">
          <Contact title="Call" />
          <Contact title="Chat" />
          <Contact title="Video Call" />
          <Contact title="Message" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex-center">
        <img
          src="./images/contact.jpg"
          alt="hero"
          className="h-[80vh] lg:min-h-[80vh] w-3/4 sm:w-3/6 lg:w-full rounded-2xl rounded-t-[15rem]  border-primary-600 border-4"
        />
      </div>
    </div>
  );
};
