import type { NextPage } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getReadme } from "lib/content";
import Layout from "layouts/Layout";
import Readme from "components/Readme";
import Hello from "components/Hello";

const Home: NextPage<{
  readme: MDXRemoteSerializeResult<Record<string, unknown>>;
}> = ({ readme }) => {
  return (
    <Layout title="Home" className="items-center">
      <div className="flex flex-col pt-16 text-center">
        <Hello />
        <h1 className="text-5xl font-bold tracking-tight mt-12">
          Develop your next big web app, fast.
        </h1>
        <p className="text-lg mt-4 text-gray-700">
          Batteries-included, performant, non-repetitive, configurable,
          style-friendly, Next.js template.
        </p>
      </div>
      <Readme readme={readme} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const readme = await getReadme();
  return { props: { readme } };
};

export default Home;
