import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { MdStarRate } from "react-icons/md";

import useApi from "../Hooks/Api";
const Restaurents = () => {
  const [images, setImages] = useState([
    "../../images/restaurent-imag-1.avif",
    "../../images/restaurent-imag-2.avif",
    "../../images/restaurent-imag-3.avif",
    "../../images/restaurent-imag-4.avif",
    "../../images/restaurent-imag-5.avif",
    "../../images/restaurent-imag-6.avif",
    "../../images/restaurent-imag-7.avif",
    "../../images/restaurent-imag-8.avif",
    "../../images/restaurent-imag-9.avif",
    "../../images/restaurent-imag-10.avif",
  ]);
  const [list, setRestaurentList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const { data, loading, error } = useApi(
    "https://cdn.adpushup.com/reactTask.json"
  );

  console.log(list);

  useEffect(() => {
    const resList = data.map(res => [...res.restaurantList]);
    setRestaurentList(resList.reduce((acc, curr) => acc.concat(curr), []));
  }, [list]);

  return (
    <div className='flx'>
      <div className='heading text-4xl text-black mb-8 font-normal'>
        Trending dining out restaurants in Connaught Place
      </div>
      <div className='lists flex flex-wrap gap-12 rounded-md'>
        {list?.slice(startIndex, endIndex).map((item, index) => {
          return (
            <div
              className='list w-[320px] h-[300px]  overflow-hidden hover:shadow-lg cursor-pointer hover:p-2 duration-200 rounded-xl '
              key={index}
            >
              <img src={images[index]} alt='' className='rounded-xl' />
              <div className='des px-1 py-2 flex flex-col gap-2'>
                <p className='flex justify-between w-full text-black text-[16px]'>
                  <span>{item.name}</span>{" "}
                  <span className='bg-green-600 flex items-center text-white p-1 text-xs rounded-md'>
                    {item.ratings || "4.5"}
                    <MdStarRate />
                  </span>
                </p>
                <p className='text-xs flex justify-between w-full font-[300]'>
                  <span>{item.food_types.slice(0, 3).toString()}</span>

                  <span className='flex items-center'>
                    {" "}
                    <MdCurrencyRupee />
                    {item.price_for_two} for Two
                  </span>
                </p>
                <p className='flex justify-between text-xs font-[300]'>
                  <span>Connaught Place, New Delhi</span>
                  <span>{item.delivery_time}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurents;
