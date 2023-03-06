import Link from "next/link";
const Home = () => {
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
      </ul>
    </div>
  );
};

export default Home;
