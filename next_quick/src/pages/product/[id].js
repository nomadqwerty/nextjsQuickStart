import { useRouter } from "next/router";

const Item = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <div> item with id of {1 + 1}</div>;
};

export default Item;
