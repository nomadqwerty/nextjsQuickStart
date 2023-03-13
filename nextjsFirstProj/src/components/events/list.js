import Item from "./item";
import classes from "./css/lists.module.css";

const List = (props) => {
  const items = props.items;

  const list = items.map((e, i) => {
    return (
      <Item
        key={i}
        id={e.id}
        title={e.title}
        location={e.location}
        date={e.date}
        image={e.image}
      />
    );
  });

  return <ul className={classes.list}>{list}</ul>;
};

export default List;
