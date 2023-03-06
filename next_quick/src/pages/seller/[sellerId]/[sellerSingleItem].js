import { useRouter } from "next/router";

const SellerSingleItem = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <div>detail about a sigle item</div>;
};

export default SellerSingleItem;
