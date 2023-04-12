import fs from "fs/promises";

// client code
function HomePage(props) {
  const { title, description } = props;
  console.log(props);
  if (!title || !description) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div>title: {title}</div>
      <div>desciption: {description}</div>
    </div>
  );
}

// server code
export async function getStaticProps(context) {
  const { params } = context;
  const prodId = params.pid;
  console.log(params);
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "p1" } }],
    fallback: true,
  };
}

export default HomePage;
