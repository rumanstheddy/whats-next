import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-10 font-manrope">
        {"Hello Sumanth, what's next?"}
      </h1>
      <Link
        href={"/users"}
        className="text-3xl italic font-rubik block underline hover:underline hover:text-blue-500"
      >
        Users
      </Link>
      <Link
        href={"/joke"}
        className="text-3xl italic font-rubik underline hover:underline hover:text-blue-500"
      >
        Wanna hear a joke?
      </Link>
    </div>
  );
}
