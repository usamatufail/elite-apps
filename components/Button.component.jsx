import Link from "next/link";

export const Button = ({ onClick }) => {
  return (
    <Link href="/inquire">
      <button
        onClick={onClick}
        className={`bg-[#031221] text-white 
          font-[500]
        text-[18px] p-[1.5rem] border border-solid border-[#031221]  rounded-[8px] px-[40px] md:px-[40px] md:py-[20px]`}
      >
        Inqure Now
      </button>
    </Link>
  );
};
