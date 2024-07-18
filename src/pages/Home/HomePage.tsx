import { ReactNode } from "react";
import BorderedTitleComponent from "../../components/BorderedTitle";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import IconButtonComponent from "../../components/IconButton";
import ListItemComponent from "../../components/ListItem";
import MainLayout from "../../layouts/MainLayout";

export function HomePage(): ReactNode {
  return (
    <MainLayout>
      <section className="w-[80%] max-w-[800px] flex flex-col items-center">
        <IconButtonComponent
          icon={<IconComponent className="mr-2" size={10} />}
          text={"Start a New Poll"}
          onClick={() => {}}
          className="mx-6 min-w-[350px]"
        />
        <DividerComponent />
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
  );
}
