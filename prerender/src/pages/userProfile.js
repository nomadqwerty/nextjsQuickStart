const User = (props) => {
  const { username } = props;
  return <div>{username}</div>;
};

export async function getServerSideProps(contxt) {
  console.log(contxt);
  return {
    props: {
      username: "dave",
    },
  };
}

export default User;
