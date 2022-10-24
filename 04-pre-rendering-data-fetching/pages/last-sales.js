import { useState, useEffect } from "react";
import useSWR from "swr";

const LastSalesPage = () => {
  // const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState();

  const { data, error } = useSWR(
    "https://nextjs-course-696b4-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  // try understanding useEffect once again
  // useEffect(() => {
  //   (async () => {
  //     const jsonData = await fetch(
  //       "https://nextjs-course-696b4-default-rtdb.firebaseio.com/sales.json",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     console.log(jsonData);
  //     const data = await jsonData.json();

  //     const transformedData = [];

  //     for (const key in data) {
  //       transformedData.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }

  //     setData(transformedData);
  //     setLoading(false);
  //   })();
  // }, []);

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  if (error) {
    return <p>An error occurred</p>;
  }

  if (!data || !sales) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {sales.map((data) => (
        <li>
          {data.username} - ${data.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
