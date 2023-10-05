import { Button, IconButton } from "@material-tailwind/react";
import React from "react";
import { useRef } from "react";
import { useAuth } from "../../context/auth-context";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";

const CommentAddNew = ({ postId }) => {
  console.log(postId);
  const { userInfo } = useAuth();

  const textAriaReff = useRef(null);
  const addComment = async () => {
    console.log(textAriaReff.current.value);
    const commentValue = textAriaReff.current.value;
    if (!commentValue) toast.error("Invalid comment");
    const colRef = collection(db, "comments");
    const { avatar, fullname } = userInfo;
    try {
      await addDoc(colRef, {
        author: {
          avatar,
          fullname,
        },
        postId,
        content: commentValue,
        createdAt: serverTimestamp(),
      });
      toast.success("Thêm comment thành công");
      textAriaReff.current.value = "";
    } catch (error) {
      console.log(error);
      toast.error("Thêm comment không thành công");
    }
  };
  return (
    <div className="relative w-full flex flex-col justify-center items-end">
      <textarea
        ref={textAriaReff}
        name=""
        placeholder="Enter your comment"
        className="border border-gray-400 p-3 resize-none w-full rounded-lg h-28"
      ></textarea>
      <div className="flex w-full justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          ></svg>
        </IconButton>
      </div>
      <Button onClick={addComment}>Submit</Button>
    </div>
  );
};

export default CommentAddNew;
