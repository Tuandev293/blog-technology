import React, { useEffect, useState } from "react";
import Heading from "../../components/layout/Heading";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const HomeNewPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", false),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  console.log(posts);
  return (
    <div className="container">
      <Heading>News post</Heading>
      <div className="grid grid-cols-4 gap-6">
        {posts &&
          posts.map((item) => (
            <div className="">
              <img src={item.image} alt="" className="rounded-lg" />
              <h2>{item.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeNewPost;
