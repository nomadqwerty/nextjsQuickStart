import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;
  const list = products.map((e, i) => {
    return <li key={i}>{e.title}</li>;
  });
  return <ul>{list}</ul>;
}

export async function getStaticProps() {
  let prod = await fs.readFile("./dummyData.json", "utf8");
  prod = JSON.parse(prod);

  console.log(prod);

  return {
    props: prod,
  };
}

export default HomePage;
