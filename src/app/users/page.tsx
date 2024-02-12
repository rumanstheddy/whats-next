import ProductCard from "../components/ProductCard";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await response.json();

  return (
    <div>
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
