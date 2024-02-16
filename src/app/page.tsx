import Link from "next/link";

export default function Home() {
  return (
    <div className="content-center">
      <h1 className="text-2xl mb-10 font-manrope">
        {"Hello Sumanth, what's next?"}
      </h1>
      <Link href={"/users"} className="italic font-rubik block">
        Users
      </Link>
      <Link href={"/joke"} className="italic font-rubik">
        Wanna hear a joke?
      </Link>
    </div>
  );
}
