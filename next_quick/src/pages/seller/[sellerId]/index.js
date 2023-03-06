import { useRouter } from "next/router";

const SellerItems = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <div>list of items for a sigle seller</div>;
};

export default SellerItems;
