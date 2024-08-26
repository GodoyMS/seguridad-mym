import { IPost, postsSampleData } from "@/constants/posts";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Posts = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number>(
    postsSampleData[0].id
  );

  return (
    <div className="pt-10">
      <div className=" flex justify-center items-center gap-4">
        {postsSampleData.map((e: IPost) => (
          <Button
            onClick={() => setCurrentCategoryId(e.id)}
            className={` ${
              e.id === currentCategoryId
                ? " bg-blue-50 hover:bg-blue-100 text-gray-800 "
                : "bg-white hover:bg-gray-50 text-slate-700"
            } py-6  border border-gray-400`}
            key={e.id}
          >
            <div className=" flex justify-center gap-2 items-center">
              <img className=" w-10 h-10" src={e.icon} />
              <div>{e.title}</div>
            </div>
          </Button>
        ))}
      </div>
      <div className=" mt-10 w-full gap-4 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4">
        {postsSampleData
          .find((e) => e.id === currentCategoryId)
          ?.items.map((post) => (
            <div className="group h-full relative w-full ">
              <img src={post.image}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute text-white bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                {post.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
