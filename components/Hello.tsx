import { Hello } from "@prisma/client";
import useSWR from "swr";

const Hello = () => {
  const { data, error } = useSWR<Hello>("/api/hello");

  return (
    <div className="flex flex-col bg-slate-200 text-left p-6 rounded-xl font-mono">
      <p className="text-sm font-medium text-gray-600 uppercase">/api/hello</p>
      <pre className="mt-2">
        {!error && (
          <>
            {data && JSON.stringify(data, undefined, 4)}
            {!data && "No data found"}
          </>
        )}
        {error && `An error occurred: ${error}`}
      </pre>
    </div>
  );
};

export default Hello;
