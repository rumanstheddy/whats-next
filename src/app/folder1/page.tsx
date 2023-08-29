"use client";
import Link from "next/link";

export default function Page() {
  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="content-center">
      <h1 className="text-2xl mb-10">{"You are in Folder 1."}</h1>
      <Link href={"/"} className="italic">
        Back
      </Link>
      <button type="button" onClick={getUser} className="block rounded-full">
        Generate User
      </button>
    </div>
  );
}
