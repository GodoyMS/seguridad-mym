import TitleGlobal from "@/components/globals/title-global";
import Posts from "@/components/publicaciones/posts";
import React from "react";

const index = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto px-4">
        <TitleGlobal
          title="Publicaciones"
          subtitle="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula."
        />
        <Posts/>

      </div>
    </div>
  );
};

export default index;
