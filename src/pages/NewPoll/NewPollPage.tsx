import { ReactNode } from "react";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import { useNavigate } from "react-router-dom";
import IconButtonComponent from "../../components/IconButton";

export function NewPollPage(): ReactNode {
  const navigate = useNavigate();

  return (
    <section className="flex self-stretch items-stretch flex-col select-none">
      <header className="select-none flex items-center">
        <button
          onClick={() => navigate("/")}
          className="transition-opacity opacity-35 hover:opacity-100 active:opacity-50 duration-75"
        >
          <IconComponent icon="back" className="mx-2" />
        </button>
        <h1 className="text-2xl font-semibold tracking-wide">
          Create a New Poll
        </h1>
      </header>
      <DividerComponent />
      <div className="flex flex-col items-stretch p-2">
        <div className="flex flex-col select-none">
          <label className="flex items-center">
            <IconComponent className="ml-2 mr-1" icon="heading" size={6} />
            <span className="font-semibold text-slate-200 text-xl">Title</span>
          </label>
          <input
            className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
            type="text"
            placeholder="What is your favorite color?"
          />
        </div>
        <div className="flex flex-col select-none mt-4">
          <label className="flex items-center">
            <IconComponent className="ml-2 mr-1" icon="duration" size={6} />
            <span className="font-semibold text-slate-200 text-xl">
              Duration
            </span>
          </label>
          <select className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2">
            <option className="bg-neutral-900" value="EM">
              No limit
            </option>
            <option className="bg-neutral-900" value="1M">
              1 minute
            </option>
            <option className="bg-neutral-900" value="5M" selected>
              5 minutes
            </option>
            <option className="bg-neutral-900" value="10M">
              10 minutes
            </option>
          </select>
        </div>
        <div className="flex flex-col select-none mt-4">
          <label className="flex items-center">
            <IconComponent className="ml-2 mr-1" icon="list-bullet" size={6} />
            <span className="font-semibold text-slate-200 text-xl">
              Options
            </span>
          </label>
          <input
            className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
            type="text"
            placeholder="Green"
          />
          <input
            className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
            type="text"
            placeholder="Yellow"
          />
          <IconButtonComponent
            text="Add"
            className="self-end mt-4 bg-transparent py-2"
            icon={<IconComponent icon="add" className="mr-2" size={6} />}
            onClick={() => {}}
          />
          <DividerComponent />
          <IconButtonComponent
            text="Create Poll"
            icon={<IconComponent icon="upload" className="mr-2" size={8} />}
          />
        </div>
      </div>
    </section>
  );
}
