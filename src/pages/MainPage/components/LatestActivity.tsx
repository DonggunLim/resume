import { activities } from "../../../consts/activity";

export default function LatestActivity() {
  return (
    <section className="mb-20">
      <h1 className="text-xl font-bold text-primary-light-text dark:text-primary-dark-text pb-4">
        Activity
      </h1>
      <div className="space-y-3">
        {activities.map((item, index) => (
          <div
            key={index}
            className="rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-200"
          >
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.title}
            </p>
            {item.period && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.period}
              </p>
            )}
            {item.description && (
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            )}
            {item.sub && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.sub}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
