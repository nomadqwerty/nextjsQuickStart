import Link from "next/link";
const Home = () => {
  const id = "0898977979";
  return (
    <div>
      The Home Page
      <ul>
        <li>
          <Link href="/seller">seller</Link>
        </li>
        <li>
          <Link href="/product">product</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href={`/seller/${id}`}>dynamic route</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
