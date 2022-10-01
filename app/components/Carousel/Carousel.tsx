import { FC, useState, useEffect, useRef } from "react";
import CarouselIndicator from "./CarouselIndicator/CarouselIndicator";
import CarouselItem from "./CarouselItem/CarouselItem";

type CarouselProps = {
  data: { quote: string; author: string; about: string }[];
};

const Carousel: FC<CarouselProps> = ({ data }) => {
  const [active, setActive] = useState(0);
  const block = useRef(false);

  const changeSlide = (index: number) => {
    const { current } = block;

    if (current) return;

    setActive(index);
    block.current = true;

    setTimeout(() => {
      block.current = false;
    }, 500);
  };


  return (
    <>
      <ul style={{ position: "relative", minHeight: "290px" }}>
        {data.map((item, i) => (
          <CarouselItem
            key={i}
            isActive={i === active}
            content={item.quote}
            author={item.author}
            about={item.about}
          />
        ))}
      </ul>
      <ul className="flex-center">
        {data.map((item, i) => (
          <CarouselIndicator
            key={i}
            isActive={i === active}
            onClick={() => changeSlide(i)}
          />
        ))}
      </ul>
    </>
  );
};

export default Carousel;
