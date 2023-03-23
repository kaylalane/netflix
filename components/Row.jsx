import { Tillana } from "next/font/google";
import Image from "next/image"
import { useState } from "react"
import Item from "./Item";


export default function Row({titles, rowTitle}) {
  //set current index
  const [index, setIndex] = useState(0);
  const titlesLength = titles.length;
  const currentlyShowing = titles.slice(index, (index+4));

  //have index shift with every press of button
  function prev() {
    if(titles[index-1] !=null) {
      setIndex(index-1);
    }
  }

  function next(){
    if (titles[index+4] !=null) {
      setIndex(index+1);
    }
  }

  //put sliders on end

  //1st problem: make it slide through titles
  //2nd problem: make a cycle though (there's a kind of linked list)

  return (
    <div className="container">
    <h2>{rowTitle}</h2>
     <div className="row">
     
      {index!=0 && <button
          className="slider-button left"
          onClick={prev}
          >
          &#10094;
          </button>
      }

      { index+4!=(titlesLength) && <button
        className="slider-button right"
        onClick={next}
      >
        &#10095;
      </button>
      }

      <div className="media-group">
        {currentlyShowing.map((t) => (
          <Item title={t} key={t}/>
        ))}
      </div>
     </div>
    </div>
  )
}
