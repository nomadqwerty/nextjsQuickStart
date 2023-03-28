import fs from "fs/promises";

// client code
function HomePage(props) {
  const { products } = props;
  const list = products.map((e, i) => {
    return <li key={i}>{e.title}</li>;
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
