import imgProduct1 from "../../assets/images/image-product-1.jpg";
import imgProduct2 from "../../assets/images/image-product-2.jpg";
import imgProduct3 from "../../assets/images/image-product-3.jpg";
import imgProduct4 from "../../assets/images/image-product-4.jpg";

import imgThumbProduct1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgThumbProduct2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgThumbProduct3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgThumbProduct4 from "../../assets/images/image-product-4-thumbnail.jpg";

import NextIcon from "../icons/NextIcon";

import PreviousIcon from "../icons/PreviousIcon";
import { useState } from "react";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const SliderProduct = () => {

    const [index, setIndex] = useState(0);

    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
    };

    const handleClickNext = () => {
        index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
    };

  return (
    <section className="grid gap-8 md:grid-cols-4">
      <div className="relative col-span-4">
        <img className="aspect-[16/12]" src={ARRAY_IMGS[index]} alt="" />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickPrev}>
            <PreviousIcon />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white" onClick={handleClickNext}>
            <NextIcon />
          </button>
        </div>
      </div>
      <img className="hidden md:block" src={imgThumbProduct1} alt="" />
      <img className="hidden md:block" src={imgThumbProduct2} alt="" />
      <img className="hidden md:block" src={imgThumbProduct3} alt="" />
      <img className="hidden md:block" src={imgThumbProduct4} alt="" />
    </section>
  );
};

export default SliderProduct;
