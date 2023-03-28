import fs from "fs/promises";

// client code
function HomePage(props) {
  const { item } = props;

  return <div>{item}</div>;
}

// server code
export async function getStaticProps(context) {
  const { params } = context;
  const prodId = params.pid;

  let prod = await fs.readFile("./dummyData.json", "utf8");
  prod = JSON.parse(prod);

  const item = prod.products.find((e, i) => {
    return e.id === prodId;
  });

  console.log(item);

  if (!item) {
    return {
      notFound: true,
    };
  }
  return {
    props: item,
    revalidate: 120,
  };
}

export default HomePage;
