import { useRouter } from "next/router";

const SellerSingleItem = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const onHomeClick = () => {
    setTimeout(() => {
      router.replace("/");
      console.log("pushed");
    }, 5000);
  };

  return (
    <div>
      detail about a single item
      <button onClick={onHomeClick}>back home</button>
    </div>
  );
};

export default SellerSingleItem;
