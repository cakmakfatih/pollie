import { ReactNode, useId, useRef, useState, useTransition } from "react";
import DividerComponent from "../../components/Divider";
import IconComponent from "../../components/Icon";
import { useNavigate } from "react-router-dom";
import IconButtonComponent from "../../components/IconButton";
import { apiService } from "../../services/ApiService";
import { Duration } from "../../shared/interfaces/poll.interface";
import { Store } from "react-notifications-component";
import { APP_URL } from "../../shared/constants";
import storage from "../../core/Browser/storage";

export function NewPollPage(): ReactNode {
  const navigate = useNavigate();
  const titleInputId = useId();
  const durationSelectId = useId();
  const votesVisibleCheckboxId = useId();
  const usersCanChangeVotesCheckboxId = useId();
  const isPrivateCheckboxId = useId();

  const titleRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLSelectElement>(null);
  const votesVisibleRef = useRef<HTMLInputElement>(null);
  const usersCanChangeVotesRef = useRef<HTMLInputElement>(null);
  const isPrivateRef = useRef<HTMLInputElement>(null);

  const [options, setOptions] = useState<{ value: string }[]>([
    { value: "" },
    { value: "" },
  ]);

  const [isPending, startTransition] = useTransition();

  const validateTitle = (title: string | undefined) =>
    title && title.length > 0 && title.length < 155;
  const validateOptions = (opts: { value: string }[]) => {
    if (options.length < 2 || options.length > 10) return false;

    for (let option of opts) {
      if (option.value.length > 155 || option.value.length < 1) return false;
    }

    return true;
  };
  const handleSubmit = () => {
    const isTitleValid = validateTitle(titleRef.current?.value);
    if (!isTitleValid) return false;
    const isOptionsValid = validateOptions([...options]);
    if (!isOptionsValid) return false;

    startTransition(async () => {
      const pollData = {
        title: titleRef.current?.value!,
        duration: durationRef.current?.value! as Duration,
        options,
        is_private: isPrivateRef.current?.checked!,
        votes_changable: usersCanChangeVotesRef.current?.checked!,
        votes_visible: votesVisibleRef.current?.checked!,
      };
      const createdPoll = await apiService.createPoll(pollData);

      if (createdPoll) {
        Store.addNotification({
          title: "Successful!",
          message:
            "Poll is created successfully and the URL of the poll is copied to the clipboard!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2600,
            onScreen: true,
          },
        });

        storage.savePoll({
          id: createdPoll.id,
          remaining_seconds: createdPoll.remaining_seconds,
          is_votable: createdPoll.is_votable,
          title: createdPoll.title,
          duration: createdPoll.duration,
          votes_visible: createdPoll.votes_visible,
          votes_changable: createdPoll.votes_changable,
          is_private: createdPoll.is_private,
          created_at: createdPoll.created_at,
        });

        await navigator.clipboard.writeText(
          `${APP_URL}/polls/${createdPoll.id}`
        );

        navigate(`/polls/${createdPoll.id}`);
      }
    });
  };

  return (
    <section className="flex self-stretch items-stretch flex-col select-none">
      <header className="select-none flex items-center">
        <button
          onClick={() => navigate("/")}
          className="transition-opacity opacity-35 hover:opacity-100 active:opacity-50 duration-75"
        >
          <IconComponent icon="back" className="mx-2 text-blue-300" />
        </button>
        <h1 className="text-2xl font-semibold tracking-wide">
          Create a New Poll
        </h1>
      </header>
      <DividerComponent />
      <div className="flex flex-col items-stretch p-2">
        <div className="flex flex-col select-none">
          <label htmlFor={titleInputId} className="flex items-center">
            <IconComponent className="ml-2 mr-1" icon="heading" size={6} />
            <span className="font-semibold text-slate-200 text-xl">Title</span>
          </label>
          <input
            id={titleInputId}
            ref={titleRef}
            className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
            type="text"
            placeholder="What is your favorite color?"
          />
        </div>
        <div className="flex flex-col select-none mt-4">
          <label htmlFor={durationSelectId} className="flex items-center">
            <IconComponent className="ml-2 mr-1" icon="duration" size={6} />
            <span className="font-semibold text-slate-200 text-xl">
              Duration
            </span>
          </label>
          <select
            id={durationSelectId}
            ref={durationRef}
            defaultValue="5M"
            className="px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
          >
            <option className="bg-neutral-900" value="EM">
              No limit
            </option>
            <option className="bg-neutral-900" value="1M">
              1 minute
            </option>
            <option className="bg-neutral-900" value="5M">
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
          <div className="max-h-[180px] min-h-0 flex flex-col self-stretch overflow-y-auto">
            {options.map((option, idx) => (
              <div key={idx} className="flex">
                <input
                  className="flex-1 px-2 py-2 text-lg bg-transparent outline-none border border-slate-600 focus:border-blue-400 mt-2"
                  type="text"
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[idx].value = e.target.value;
                    setOptions(newOptions);
                  }}
                  key={idx}
                  value={option.value}
                  placeholder={`Option ${idx + 1}`}
                />
                {idx > 1 && (
                  <button
                    className="p-2 border-slate-400 hover:border-white border mt-2 ml-2 bg-red-500 hover:bg-red-700 active:bg-red-800 transition-colors duration-75"
                    onClick={() => {
                      const newOptions = [...options];
                      newOptions.splice(idx, 1);

                      setOptions(newOptions);
                    }}
                  >
                    <IconComponent icon="trash" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <IconButtonComponent
            text="Add"
            className="self-end mt-4 bg-transparent py-2"
            icon={<IconComponent icon="add" className="mr-2" size={6} />}
            onClick={() => {
              setOptions([
                ...options,
                {
                  value: "",
                },
              ]);
            }}
          />
          <div className="flex items-center mt-4 px-2">
            <input
              id={votesVisibleCheckboxId}
              ref={votesVisibleRef}
              defaultChecked={true}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={votesVisibleCheckboxId}
              className="flex-1 ms-2 text-lg font-medium"
            >
              Votes are visible before voting
            </label>
          </div>
          <div className="flex items-center px-2">
            <input
              id={usersCanChangeVotesCheckboxId}
              ref={usersCanChangeVotesRef}
              defaultChecked={true}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={usersCanChangeVotesCheckboxId}
              className="flex-1 ms-2 text-lg font-medium"
            >
              Users can change their votes
            </label>
          </div>
          <div className="flex items-center px-2">
            <input
              id={isPrivateCheckboxId}
              ref={isPrivateRef}
              defaultChecked={false}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={isPrivateCheckboxId}
              className="flex-1 ms-2 text-lg font-medium"
            >
              Private (url is not shared on homepage)
            </label>
          </div>
          <DividerComponent />
          <IconButtonComponent
            onClick={handleSubmit}
            text="Create Poll"
            icon={<IconComponent icon="upload" className="mr-2" size={8} />}
            disabled={isPending}
          />
        </div>
      </div>
    </section>
  );
}
