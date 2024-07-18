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
      <div className="min-w-[80%] flex-1 flex items-center justify-center">
        <aside className="min-w-[400px] flex flex-col items-stretch p-2">
          <IconButtonComponent
            icon={<IconComponent className="mr-2" />}
            text={"Start a New Poll"}
            onClick={() => {}}
          />
          <hr className="h-px my-4 bg-white/[0.15] border-0"></hr>
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent title="Your Polls" />
          </div>
        </aside>
        <div className="flex">
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent title="Latest Polls" />
            <ul className="flex flex-col font-semibold select-none flex-1">
              <ListItemComponent text="What was the last good book you read?" />
              <ListItemComponent
                text="What are you most grateful for?"
                className="mt-2"
              />
              <ListItemComponent
                text="Can you play any instruments?"
                className="mt-2"
              />
              <ListItemComponent
                text="What is your favorite color?"
                className="mt-2"
              />
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  </React.StrictMode>
);
