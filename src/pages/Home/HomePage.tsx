import { ReactNode, Suspense, use } from "react";
import BorderedTitleComponent from "../../components/BorderedTitle";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import IconButtonComponent from "../../components/IconButton";
import ListItemComponent from "../../components/ListItem";
import { useNavigate } from "react-router-dom";
import { apiService, GetPollsResponse } from "../../services/ApiService";
import LoaderComponent from "../../components/Loader";

function HomeContent({
  pollsPromise,
}: {
  pollsPromise: Promise<GetPollsResponse>;
}): ReactNode {
  const recentPollsResponse = use(pollsPromise);
  const navigate = useNavigate();

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
        <aside className="min-w-[400px] flex flex-col items-stretch p-2">
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent
              icon={<IconComponent icon="dialog" className="mr-2" />}
              title="Your Polls"
            />
            <ul className="flex flex-col font-semibold select-none flex-1"></ul>
          </div>
        </aside>
        <div className="flex p-2 self-end">
          <div className="flex flex-col flex-1 mx-2">
            <BorderedTitleComponent
              icon={<IconComponent icon="globe" className="mr-2" />}
              title="Latest Polls"
            />
            <ul className="flex flex-col font-semibold select-none flex-1">
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
