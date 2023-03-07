import { useRouter } from "next/router";
import Link from "next/link";

const SellerItems = () => {
  let itemId = 8090808;
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const sellerId = router.query.sellerId;

  return (
    <div>
      list of items for a sigle seller
      <Link href={`/seller/${sellerId}/${itemId}`}>Items</Link>
    </div>
  );
};

export default SellerItems;
