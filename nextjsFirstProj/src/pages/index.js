import Link from "next/link";
import { getFeaturedEvents } from "../../dummy";
import List from "@/components/events/list";
const Home = () => {
  const eventsList = getFeaturedEvents();

  return (
    <div>
      <List items={eventsList} />
    </div>
  );
};

export default Home;
