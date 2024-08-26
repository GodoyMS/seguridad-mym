import React from "react";

const TitleGlobal = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div>
      <h1 className=" text-center mb-4  text-gray-600 text-2xl lg:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <div className=" max-w-2xl mx-auto">
          <h2 className=" text-center text-gray-500   lg:text-xl">
            {subtitle}
          </h2>
        </div>
      )}
    </div>
  );
};

export default TitleGlobal;
