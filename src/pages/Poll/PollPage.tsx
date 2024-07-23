import { ReactNode, Suspense, use, useMemo, useState } from "react";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "react-notifications-component";
import OptionComponent from "../../components/Option";
import { apiService, GetPollDetailsResponse } from "../../services/ApiService";
import { IOption } from "../../shared/interfaces/option.interface";
import { API_URL } from "../../shared/constants";
import LoaderComponent from "../../components/Loader";
import moment from "moment";

interface Percentages {
  [optId: string]: {
    voteCount: number;
    percentage: number;
  };
}

function PollContent({
  pollPromise,
}: {
  pollPromise: Promise<GetPollDetailsResponse>;
}): ReactNode {
  const navigate = useNavigate();
  const pollDetails: GetPollDetailsResponse = use(pollPromise);
  const [poll, setPoll] = useState(pollDetails);
  const dateStr: string = useMemo(() => {
    const date = new Date(poll.created_at);
    return moment(date).fromNow();
  }, [poll.id]);
  const percentages: Percentages = useMemo(() => {
    if (poll.votes === null) {
      return {};
    }

    const result: Percentages = {};

    const totalVotes = poll.votes.length;

    poll.options.forEach((opt) => {
      const optVoteCount: number = poll.votes!.filter(
        (i) => i.option === opt.id
      ).length;

      result[opt.id] = {
        voteCount: optVoteCount,
        percentage: parseFloat(((optVoteCount / totalVotes) * 100).toFixed(2)),
      };
    });

    return result;
  }, [poll.votes]);
  const vote = async (opt: IOption) => {
    if (poll.user_vote?.option !== null && poll.user_vote?.option === opt.id) {
      return;
    }

    if (poll.remaining_seconds < 0 && poll.remaining_seconds !== -1) {
      return;
    }

    if (poll.user_vote?.option !== null && !poll.votes_changable) {
      return;
    }

    await apiService.votePoll({
      poll: poll.id,
      option: opt.id!,
    });

    const pollUpdatedData = await apiService.getPollDetails(poll.id);
    setPoll(pollUpdatedData);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${API_URL}/polls/${poll.id}`);
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
              {poll.title}
            </h1>
            <div className="flex items-center">
              <IconComponent icon="date" size={8} className="text-gray-400" />
              <span className="text-gray-500 mt-1 px-1">Created {dateStr}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center border border-white/[0.15] py-1 px-2 self-start">
          <span className="mr-2 text-2xl pl-1">05:00</span>
          <IconComponent icon="duration" size={8} />
        </div>
      </header>
      <div className="flex mx-2 border border-slate-600 mt-2">
        <span
          className="p-2 text-base select-all text-blue-300"
          onClick={copyToClipboard}
        >
          http://localhost:5173/polls/{poll.id}
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
        {poll.options.map((opt: IOption, idx: number) => (
          <OptionComponent
            onClick={() => vote(opt)}
            percentage={
              poll.votes !== null && poll.votes.length > 0
                ? percentages[opt.id!].percentage
                : undefined
            }
            voteCount={
              poll.votes !== null && poll.votes.length > 0
                ? percentages[opt.id!].voteCount
                : undefined
            }
            selected={poll.user_vote?.option === opt.id}
            key={idx}
            option={opt}
            className={idx > 0 ? "mt-2" : ""}
          />
        ))}
      </section>
    </section>
  );
}

export function PollPage(): ReactNode {
  const { pollId } = useParams();
  const pollPromise = apiService.getPollDetails(pollId!);

  return (
    <Suspense fallback={<LoaderComponent />}>
      <PollContent pollPromise={pollPromise} />
    </Suspense>
  );
}
