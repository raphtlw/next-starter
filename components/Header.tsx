import clsx from "clsx";

const Header = () => {
  return (
    <header
      className={clsx(
        "text-md font-medium bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl",
        "border-b border-b-gray-300",
        "top-0 sticky",
        "px-8",
        "py-4"
      )}
    >
      <p>{process.env.NEXT_PUBLIC_SITE_NAME ?? "next-starter"}</p>
    </header>
  );
};

export default Header;
