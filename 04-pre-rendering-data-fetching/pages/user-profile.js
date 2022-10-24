const UserProfilePage = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
};

export default UserProfilePage;

// it's just like getStaticProps but only difference is what you receive from incoming requests and the timing of the site generation.

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Fritz",
    },
  };
}
