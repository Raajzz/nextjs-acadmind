const DynamicUserProfilePage = (props) => {
  return <h1>{props.id}</h1>;
};

export default DynamicUserProfilePage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: userId,
    },
  };
}
