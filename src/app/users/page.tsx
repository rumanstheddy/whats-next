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
      <p className="text-3xl pb-5">
        Time Updated: {new Date().toLocaleTimeString()}
      </p>
      <ul className="text-2xl">
        {users.map(({ id, name }) => (
          <li key={id}>
            {id}: {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
