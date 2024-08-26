import React from "react";

const VideoHome = () => {
  return (
    <section className=" bg-blue-50 py-20">
      <h2 className=" max-w-4xl mx-auto text-center  leading-tight    mb-4 text-2xl  font-bold   md:text-3xl xl:text-4xl ">
        Conóce nuestro nuevo sistema de seguridad ciudadana
      </h2>
      <p className=" text-center font-semibold">
        Testimonio de ...
      </p>
      <div className="mt-10 max-w-6xl mx-auto flex justify-center">
        <video
          controls
          src="/assets/videos/video.mp4"
          className=" rounded-lg aspect-video"
        ></video>
      </div>
    </section>
  );
};

export default VideoHome;
