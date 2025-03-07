import eliceBrandLogo from "../../../assets/elice-track-logo.svg";

export default function LatestActivity() {
  return (
    <section className="mb-20">
      <h1 className="text-xl font-bold text-primary-light-text dark:text-primary-dark-text pb-3">
        Activity
      </h1>
      <div
        className="group/item rounded-md p-4 
            hover:bg-slate-400/10
           dark:hover:bg-slate-700/20
           relative
           "
      >
        <div className="flex gap-x-2 w-full">
          <div className="flex justify-center dark:bg-gray-200/90 p-3 rounded-md shadow-md">
            <img
              src={eliceBrandLogo}
              alt="elice-track-logo"
              className="object-contain w-16 h-16"
            />
          </div>
          <div className="text-left">
            <p
              className="text-lg font-semibold pb-2 
                group-hover/item:text-primary-light-text
                dark:group-hover/item:text-primary-dark-text"
            >
              엘리스 트랙
            </p>
            <div className="text-sm font-medium">
              <p> 2024년 10월 - 2025년 3월</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
