import { ReactNode } from "react";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

export function PollPage(): ReactNode {
  const navigate = useNavigate();

  const copyToClipboard = () => {
    Store.addNotification({
      title: "Successful!",
      message: "Poll URL is successfully copied to clipboard!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1250,
        onScreen: true,
      },
    });
  };

  return (
    <section className="flex self-stretch items-stretch flex-col select-none">
      <header className="select-none flex items-stretch px-2 justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate("/")}
            className="transition-opacity opacity-35 hover:opacity-100 active:opacity-50 duration-75"
          >
            <IconComponent
              icon="back"
              className="mr-2 text-blue-300"
              size={12}
            />
          </button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold tracking-wide text-yellow-300">
              What are you most grateful for?
            </h1>
            <div className="flex items-center">
              <IconComponent icon="date" size={8} className="text-gray-400" />
              <span className="text-gray-500 mt-1 px-1">
                Created at: 20/07/2024 - 04:53
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center border border-white/[0.15] py-1 px-2 self-start">
          <span className="mr-2 text-2xl pl-1 text-yellow-300">05:00</span>
          <IconComponent icon="duration" size={8} className="text-yellow-300" />
        </div>
      </header>
      <div className="flex mx-2 border border-slate-600 mt-2">
        <span className="p-2 text-base select-text text-blue-300">
          http://localhost:5173/polls/1
        </span>
        <div className="flex-1"></div>
        <button
          onClick={copyToClipboard}
          className="border-l p-2 border-slate-600 transition-colors duration-75 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 flex items-center"
        >
          <IconComponent icon="copy" size={6} />
          <span className="ml-1 font-bold">Copy</span>
        </button>
      </div>
      <DividerComponent />
      <section className="flex flex-col items-stretch px-2">
        <div className="border border-slate-600 flex items-center hover:border-white transition-colors duration-75 cursor-pointer justify-between">
          <div className="flex items-center z-10 p-4">
            <div className="p-px rounded-full border-2 mr-2 border-white/[0.45]">
              <div className="m-1 bg-white size-6 rounded-full"></div>
            </div>
            <h1 className="text-2xl">My wife</h1>
          </div>
          <div className="flex items-center">
            <span className="text-2xl">75%</span>
            <span className="text-sm ml-2 mr-4">504</span>
          </div>
          <div className="absolute bg-amber-600 h-[68px] w-[600px]"></div>
        </div>
        <div className="p-4 border border-slate-600 flex items-center hover:border-white transition-colors duration-75 cursor-pointer justify-between mt-2">
          <div className="flex items-center">
            <div className="p-px rounded-full border-2 mr-2 border-white/[0.45]">
              <div className="m-1 bg-transparent size-6 rounded-full"></div>
            </div>
            <h1 className="text-2xl">My kid</h1>
          </div>
          <div className="flex items-center">
            <span className="text-2xl">15%</span>
            <span className="text-sm ml-2">92</span>
          </div>
        </div>
      </section>
    </section>
  );
}
