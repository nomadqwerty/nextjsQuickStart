import fs from "fs/promises";
import Link from "next/link";

// client code
function HomePage(props) {
  const { products } = props;
  const list = products.map((e, i) => {
    return (
      <li key={i}>
        {e.title} <Link href={`/p${i + 1}`}>Click me</Link>
      </li>
    );
  });
  return <ul>{list}</ul>;
}

// server code
export async function getStaticProps() {
  let prod = await fs.readFile("./dummyData.json", "utf8");
  prod = JSON.parse(prod);

  console.log(prod);

  return {
    props: prod,
    revalidate: 120,
  };
}

export default HomePage;
