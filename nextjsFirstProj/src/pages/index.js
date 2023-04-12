import Link from "next/link";
import { getFeaturedEvents } from "../../dummy";
import List from "@/components/events/list";
const Home = (props) => {
  const { eventsList } = props;
  return (
    <div>
      <List items={eventsList} />
    </div>
  );
};

export async function getStaticProps() {
  const eventsList = getFeaturedEvents();
  console.log("here");

  return {
    props: { eventsList },
    revalidate: 1800,
  };
}

export default Home;
