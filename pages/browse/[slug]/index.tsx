import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { BsHandThumbsUp, BsPlusLg } from "react-icons/bs";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import React from "react";

const itemWidth = 250;
const itemHeight = 150;

export default function TitlePage({ title }) {
  const router = useRouter();
  const id = router.query.title;

  return (
    <>
      <Image
        src={title.banner}
        alt={title.title}
        width={itemWidth}
        height={itemHeight}
        className="w-full relative"
      />
      <h1>{title.title}</h1>
      <div className="relative flex gap-2 w-full h-full">
        <button
          id="play-button"
          className="absolute bottom-8 mx-6 flex gap-1 bg-white py-1 px-4 rounded-lg text-black"
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Play
        </button>
        <button className="absolute left-24 bottom-8 mx-6 p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full">
          <BsPlusLg className="mx-auto" />
          <span className="sr-only">Add to My List</span>
        </button>
        <button className="absolute left-32 bottom-8 mx-8 p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full ">
          <BsHandThumbsUp className="mx-auto" />
          <span className=" sr-only">Like this title</span>
        </button>
      </div>
      <div className="mt-2 px-6">
        <div className="py-2 text-md flex flex-col gap-3">
          <div className="flex gap-2 items-center ">
            <p>{title.year}</p>
            {title.media == "show" ? (
              <p>
                {title.seasons == 1
                  ? title.seasons + " season"
                  : title.seasons + " seasons"}
              </p>
            ) : (
              <p>{title.length}</p>
            )}
          </div>
        </div>
        <p className="border px-1 mb-1 w-fit text-sm">{title.rating}</p>
        <p className="text-sm text-white">{title.description}</p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="absolute z-10 top-0 right-0 m-4 inline-flex justify-center rounded-3xl border border-transparent bg-black p-2 text-sm font-medium"
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ffffff"
          >
            <path
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              stroke="#ffffff"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className=" sr-only">Close Modal</span>
        </button>
      </div>
    </>
  );
}
