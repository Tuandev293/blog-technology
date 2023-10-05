import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";

const ListComment = ({ postId }) => {
  const [listComment, setListCommnet] = useState([]);
  useEffect(() => {
    if (!postId) return;
    const colRef = collection(db, "comments");
    const newRef = query(colRef, where("postId", "==", postId));
    onSnapshot(newRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setListCommnet(results);
    });
  }, [postId]);
  console.log(listComment);
  return (
    <Card className="w-96 mx-auto">
      <List>
        {listComment &&
          listComment.map((item) => (
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src={item?.author?.avatar}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {item?.author?.fullname}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {item?.content}
                </Typography>
              </div>
            </ListItem>
          ))}
      </List>
    </Card>
  );
};

export default ListComment;
