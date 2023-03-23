import Image from "next/image"
import {BsPlayFill,BsPlusLg,BsHandThumbsUp,BsChevronDown} from 'react-icons/bs'

const itemWidth = 250;
const itemHeight = 150;

export default function Item({title}) {
  const s = "\"" + title.img + '\"';
  return(
    <>
      <div className="item-group" key={title.title}>
        
        <div className="item ">
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
          <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full"><BsPlayFill  className="mx-auto"/></button>
          <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full"><BsPlusLg  className="mx-auto"/></button>
          <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full "><BsHandThumbsUp  className="mx-auto"/></button>
          <button className="p-1.5 border-2 border-gray-500 hover:border-[#ffffff] rounded-full "><BsChevronDown  className="mx-auto"/></button>

          </div>
          <div className="p-2 text-xs flex flex-col gap-3">
            <div className="flex gap-2 items-center ">
              <p className="border px-1 py-0.5">{title.rating}</p>
              <p>{title.seasons ==1 ? title.seasons + " season": (title.seasons + " seasons")}</p>
            </div>
            <div className="flex gap-2">
              {title.genres && title.genres.map((genre) =>(
                <p key={genre}>
                  {genre} 
                </p>
              ))}
            </div>
          </div>
        </div>
        </div>
    </>
  )
}