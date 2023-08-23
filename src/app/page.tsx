import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-2xl mb-10">{"Hello Sumanth, what's next?"}</h1>
      <Link href={"/folder1"} className="italic">Go to folder 1</Link>
    </Fragment>
  );
}
