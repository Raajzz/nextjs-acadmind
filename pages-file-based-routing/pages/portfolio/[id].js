// the square brackets ([]) will tell next.js that the following file is a dynamic route. But /list won't load [id].js rather it'll only load /list, it first checks everything
// this'll allow you to have static predefined files but also have dynamic files.

import { useRouter } from "next/router";

const IdPage = () => {
  const router = useRouter(); // return a router object

  console.log(router.pathname);
  // /portfolio/[id]
  console.log(router.query);
  // this particular data field gives info regarding the request parameters

  return (
    <div>
      <h1>The ID page</h1>
    </div>
  );
};

export default IdPage;
