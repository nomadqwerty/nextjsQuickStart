import { useRouter } from "next/router";

const MultiParam = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <div> item with multi params</div>;
};

export default MultiParam;
