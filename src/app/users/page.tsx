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
    <div className="bg-sky-600 font-rubik">
      <p>Users Page</p>
      Time Updated: {new Date().toLocaleTimeString()}
      <ProductCard />
      <br />
      <ul>
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
