import { ReactNode, Suspense, use } from "react";
import BorderedTitleComponent from "../../components/BorderedTitle";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import IconButtonComponent from "../../components/IconButton";
import ListItemComponent from "../../components/ListItem";
import { useNavigate } from "react-router-dom";
import { apiService, GetPollsResponse } from "../../services/ApiService";
import LoaderComponent from "../../components/Loader";
import storage from "../../core/Browser/storage";

function HomeContent({
  pollsPromise,
}: {
  pollsPromise: Promise<GetPollsResponse>;
}): ReactNode {
  const recentPollsResponse = use(pollsPromise);
  const navigate = useNavigate();
  const savedPolls = storage.getPolls();

  return (
    <>
      <IconButtonComponent
        icon={<IconComponent icon="add" className="mr-2" size={8} />}
        text="Create a New Poll"
        onClick={() => {
          navigate("/new-poll");
        }}
        className="mx-6 min-w-[350px] py-2"
      />
      <DividerComponent />
      <div className="flex flex-row">
        <div className="min-w-[400px] flex flex-col items-stretch p-2">
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent
              icon={<IconComponent icon="dialog" className="mr-2" />}
              title="Your Polls"
            />
            <ul className="flex flex-col font-semibold select-none flex-1 min-h-0 max-h-[30%] overflow-y-auto scrollbar-black">
              {savedPolls.length > 0 ? (
                savedPolls.map((poll, idx) => (
                  <ListItemComponent
                    key={idx}
                    text={poll.title}
                    onClick={() => navigate(`/polls/${poll.id}`)}
                    className={
                      "bg-slate-700 hover:bg-slate-800 min-w-[350px]" +
                      (idx > 0 ? " mt-1" : "")
                    }
                  />
                ))
              ) : (
                <h1 className="px-2 py-px border-l-4 opacity-30 font-light">
                  You haven't created any polls
                </h1>
              )}
            </ul>
          </div>
        </div>
        <div className="min-w-[400px] flex flex-col items-stretch p-2">
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent
              icon={<IconComponent icon="globe" className="mr-2" />}
              title="Latest Polls"
            />
            <ul className="flex flex-col font-semibold select-none flex-1 min-h-0 max-h-[30%] overflow-y-auto scrollbar-black">
              {recentPollsResponse.results.map((poll, idx) => (
                <ListItemComponent
                  key={idx}
                  text={poll.title}
                  onClick={() => navigate(`/polls/${poll.id}`)}
                  className={
                    "bg-cyan-600 hover:bg-cyan-700 min-w-[350px]" +
                    (idx > 0 ? " mt-1" : "")
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export function HomePage(): ReactNode {
  const pollsPromise = apiService.getPolls();

  return (
    <Suspense fallback={<LoaderComponent />}>
      <HomeContent pollsPromise={pollsPromise} />
    </Suspense>
  );
}
