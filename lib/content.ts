import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";

export const getReadme = async () => {
  const fileContents = fs
    .readFileSync(path.join(process.cwd(), "README.md"))
    .toString();

  const html = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return html;
};
