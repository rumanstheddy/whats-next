import Link from "next/link";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <h1 className="text-2xl mb-10">{"You are in Folder 1."}</h1>
      <Link href={"/"} className="italic">Back</Link>
    </Fragment>
  );
}
