import { PropsWithChildren } from "react";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import Header from "components/Header";

export type LayoutProps = PropsWithChildren<{
  title: string;
  className: string;
}>;

const Layout = ({ title, className, children }: LayoutProps) => {
  return (
    <>
      <NextSeo title={title} />
      <Header />
      <main className={clsx("flex flex-col", className)}>{children}</main>
    </>
  );
};

export default Layout;
