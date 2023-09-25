import React from "react";

const ItemCards = ({
  imageOnLeft,
  title,
  description1,
  description2,
  photo,
  icon,
}) => {
  const imageSide = imageOnLeft ? "flex-1" : "flex-1 order-2";
  const textSide = imageOnLeft ? "flex-1 order-1" : "flex-1 order-2";
  return (
    <div className="flex flex-wrap bg-[#F4F4F4]">
      {/* Left side (Image) */}
      <div className={imageSide}>
        <img
          src={photo || "your-image-source.jpg"}
          alt="photo"
          className="w-2/4 h-auto ml-40 mt-52"
        />
      </div>

      {/* Right side (Text) */}
      <div className={textSide + "bg-gray-100 p-8"}>
        <img height={80} width={80} src={icon || "icon"} />
        <h1 className="text-3xl font-bold mb-4 font-[#333132] text-bold ">
          {title || "NO TITLe"}
        </h1>
        {/* <p className="text-red-200">{description1 || "No descp1"}</p> */}

        <div className="pb-5 w-3/4">
          <span dangerouslySetInnerHTML={{ __html: description1 }}></span>
        </div>
        <div className="w-4/5 h-100 bg-[#E9EBFF] text-sm">
          <p className="p-5 tracking-wide">
            {" "}
            <span dangerouslySetInnerHTML={{ __html: description2 }}></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
