import React, { useState, useEffect } from "react";

export interface Beverage {
  id: number;
  name: string;
  email: string;
  body: string;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Payload) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return { data, done };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  //   const portlandTaps = useMemo(
  //     () => (data || []).filter((e) => e.email.includes("Portland")),
  //     [data]
  //   );

  return <div>{done && <h5>{data![1].email}</h5>}</div>;
}

export default CustomHookComponent;
