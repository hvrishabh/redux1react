import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res.data);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading
        ? "loading..."
        : post.map((data, index) => {
            return <li key={index}>{data.title}</li>;
          })}
    </div>
  );
};

export default DataFetchingOne;
