"use client";
import Image from "next/image";
import { useState, Fragment,  } from "react";
import { useRouter } from "next/router";
import {
  BsPlayFill,
  BsPlusLg,
  BsHandThumbsUp,
  BsChevronDown,
} from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { myList } from "./Data";
import Modal from "./Modal";
import Link from "next/link";
const itemWidth = 250;
const itemHeight = 150;

export default function Item({ title }) {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleClick() {
    setIsOpen(true);
  }

  function addToList() {
    if (!myList.includes(title)) {
      console.log(title);
      myList.push(title);
      console.log("Pushed!");
      console.log(myList);
    }
  }

  return (
    <>
      <div aria-label={title.title} className="item-group" key={title.title}>
        <div className="item">
          <Image
            src={title.img}
            alt={title.title}
            width={itemWidth}
            height={itemHeight}
            className="sourceImg"
          />
        </div>

        <div className="details w-[250px] bg-gray-900 rounded-b-md p-2">
          <div className="flex gap-2 p-1">
            <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full">
              <BsPlayFill className="mx-auto" />
            </button>
            <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full">
              <BsPlusLg className="mx-auto" onClick={addToList} />
            </button>
            <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full ">
              <BsHandThumbsUp className="mx-auto" />
            </button>
            <button
              onClick={() => {
                setIsOpen(true)
              }}
              className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full float-right"
            >
              <BsChevronDown className="mx-auto" />
            </button>
          </div>

          <div className="p-2 text-xs flex flex-col gap-3">
            <div className="flex gap-2 items-center ">
              <p className="border px-1 py-0.5">{title.rating}</p>
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
            <div className="flex gap-2">
              {title.tone && title.tone.join(" \u2022 ")}
            </div>
          </div>
        </div>
        {isOpen ? (
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex  min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="relative w-7/12 transform overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all">
                      <div className="relative">
                        <Image
                          src={title.banner}
                          alt={title.title}
                          width={itemWidth}
                          height={itemHeight}
                          className="w-full relative"
                        />
                        <Dialog.Title
                          as="h3"
                          className="absolute bottom-20 text-lg font-medium leading-6 pt-2 px-6 text-white"
                        >
                          {title.title}
                        </Dialog.Title>
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
                          </button>
                          <button className="absolute left-32 bottom-8 mx-8 p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full ">
                            <BsHandThumbsUp className="mx-auto" />
                          </button>
                        </div>
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
                        <p className="border px-1 mb-1 w-fit text-sm">
                          {title.rating}
                        </p>
                        <p className="text-sm text-white">
                          {title.description}
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="absolute z-10 top-0 right-0 m-4 inline-flex justify-center rounded-3xl border border-transparent bg-black p-2 text-sm font-medium"
                          onClick={closeModal}
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
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        ) : null}
      </div>
    </>
  );
}
