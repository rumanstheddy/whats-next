import Link from "next/link";
import ProductCard from "../components/ProductCard";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, // Run a background job and get the data every 10 seconds, only possible with fetch API
  });
  const users: User[] = await response.json();

  return (
    <div className="font-rubik flex flex-col justify-center items-center w-screen h-screen text-center">
      <p className="text-5xl pb-5 underline">Users Page</p>
      <div className="flex flex-row text-3xl pb-5 justify-between">
        <p className="font-bold">Time Updated:</p>
        <p className="italic">{new Date().toLocaleTimeString()}</p>
      </div>
      <ul className="text-2xl">
        {users.map(({ id, name }) => (
          <li key={id}>
            {id}: {name}
          </li>
        ))}
      </ul>
      <Link
        href={"/"}
        className="text-2xl font-rubik underline hover:underline hover:text-blue-500 mt-5"
      >
        back
      </Link>
    </div>
  );
};

export default UsersPage;
