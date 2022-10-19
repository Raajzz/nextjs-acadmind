// the square brackets ([]) will tell next.js that the following file is a dynamic route. But /list won't load [id].js rather it'll only load /list, it first checks everything
// this'll allow you to have static predefined files but also have dynamic files.

import {} from "next/router";

const IdPage = () => {
  return (
    <div>
      <h1>The ID page</h1>
    </div>
  );
};

export default IdPage;
