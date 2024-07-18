import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import BorderedTitleComponent from "./components/BorderedTitle";
import IconButtonComponent from "./components/IconButton";
import IconComponent from "./components/Icon";
import ListItemComponent from "./components/ListItem";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <section className="flex flex-col items-center justify-center py-8">
        <h1 className="text-8xl text-center py-4 flex items-center">
          <IconComponent icon="lightning" size={12} color="white" />
          <span className="font-semibold text-white">poll</span>
          <span className="text-blue-400 font-medium">ie</span>
        </h1>
        <div className="flex justify-center items-center">
          <h1 className="pr-2 text-3xl text-center mt-4 text-white/[.54] font-light">
            Create & Share polls in the speed of light
          </h1>
        </div>
      </section>
      <hr className="h-px my-4 bg-white/[0.15] border-0 self-stretch"></hr>
      <section className="min-w-[80%] flex flex-col items-center">
        <IconButtonComponent
          icon={<IconComponent className="mr-2" size={10} />}
          text={"Start a New Poll"}
          onClick={() => {}}
          className="mx-6 min-w-[350px]"
        />
        <hr className="h-px my-4 bg-white/[0.15] border-0 w-[60%] max-w-[800px]"></hr>
        <div className="flex flex-row">
          <aside className="min-w-[400px] flex flex-col items-stretch p-2">
            <div className="flex flex-col flex-1 mx-2">
              <BorderedTitleComponent
                icon={<IconComponent icon="dialog" className="mr-2" />}
                title="Your Polls"
              />
              <ul className="flex flex-col font-semibold select-none flex-1">
                <ListItemComponent
                  text="What was the last good book you read?"
                  className="bg-slate-600 hover:bg-slate-700"
                />
                <ListItemComponent
                  text="What are you most grateful for?"
                  className="mt-2 bg-slate-600 hover:bg-slate-700"
                />
                <ListItemComponent
                  text="Can you play any instruments?"
                  className="mt-2 bg-slate-600 hover:bg-slate-700"
                />
                <ListItemComponent
                  text="What is your favorite color?"
                  className="mt-2 bg-slate-600 hover:bg-slate-700"
                />
                <ListItemComponent
                  text="What are you most grateful for?"
                  className="mt-2 bg-slate-600 hover:bg-slate-700"
                />
              </ul>
            </div>
          </aside>
          <div className="flex p-2 self-end">
            <div className="flex flex-col flex-1 mx-2">
              <BorderedTitleComponent
                icon={<IconComponent icon="globe" className="mr-2" />}
                title="Latest Polls"
              />
              <ul className="flex flex-col font-semibold select-none flex-1">
                <ListItemComponent
                  text="What was the last good book you read?"
                  className="bg-cyan-600 hover:bg-cyan-700"
                />
                <ListItemComponent
                  text="What are you most grateful for?"
                  className="mt-2 bg-cyan-600 hover:bg-cyan-700"
                />
                <ListItemComponent
                  text="Can you play any instruments?"
                  className="mt-2 bg-cyan-600 hover:bg-cyan-700"
                />
                <ListItemComponent
                  text="What is your favorite color?"
                  className="mt-2 bg-cyan-600 hover:bg-cyan-700"
                />
                <ListItemComponent
                  text="Can you play any instruments?"
                  className="mt-2 bg-cyan-600 hover:bg-cyan-700"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  </React.StrictMode>
);
