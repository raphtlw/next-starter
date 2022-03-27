import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { motion } from "framer-motion";
import clsx from "clsx";

const Readme = ({
  readme,
}: {
  readme: MDXRemoteSerializeResult<Record<string, unknown>>;
}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }}>
      <div
        className={clsx(
          "flex flex-col prose max-w-2xl rounded-2xl",
          "mb-20 mt-10",
          "border border-gray-300"
        )}
      >
        <div className="w-full flex flex-row px-3 border-b border-b-gray-300 items-center relative">
          <div className="flex flex-row py-3">
            <div className="bg-red-500 m-1 w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
          </div>
          <div className="absolute flex justify-center items-center w-full left-0">
            <p className="font-medium text-sm">README.md</p>
          </div>
        </div>
        <div className="px-10 pb-6">
          <MDXRemote {...readme} />
        </div>
        <style jsx>{`
          .prose {
            box-shadow: 0px 1px 2.2px rgba(0, 0, 0, 0.022),
              0px 2.3px 5.3px rgba(0, 0, 0, 0.032),
              0px 4.4px 10px rgba(0, 0, 0, 0.04),
              0px 7.8px 17.9px rgba(0, 0, 0, 0.048),
              0px 14.6px 33.4px rgba(0, 0, 0, 0.058),
              0px 35px 80px rgba(0, 0, 0, 0.08);
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default Readme;
