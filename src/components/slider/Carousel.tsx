import { autoSlider , delay } from "@Constants/index";
import { useEffect, useRef, useState } from "react";



export default function Carousel() {
  //create state for index 
  const [index ,setIndex] = useState(1);

  //use ref for the changes that happens in scrolling for typescript error we need to specfify the correct type for the ref
  const timeOutRef = useRef<number | null>(null);

  const resetTimeOut = ()=> {
    if (timeOutRef.current){
      clearTimeout(timeOutRef.current);
    }
  }
  //clone first slide , and last slide
  //const cloning  = [ autoSlider[autoSlider.length - 1], ...autoSlider ,  autoSlider[0]];

  //use effect when the index changes it sets up a timeout that calles a function to increment the index to the next slide 
  useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(()=>{
      setIndex((curr) => (curr === autoSlider.length-1 ? 0 : curr + 1));
    } , delay);

    /*
    clean up function it calls resetTimeOut to clear any existing timeout when the component unmounts or before the next effect runs.

    Purpose: This prevents potential memory leaks and ensures that the timeout is properly cleared, avoiding unexpected behavior when the component is re-rendered or unmounted. */
    return ()=> {
      resetTimeOut();
    }
  },[index]);
  
  
  return (
    <div className="w-full h-full flex transition-transform duration-1000 ease-linear" style={{transform: `translateX(-${index * 100}%)` }} >
    {
      autoSlider.map(({Id:id , ImageUrl:imageUrl})=> (
        <div key={id} className="w-full h-full flex-shrink-0">
          <img src={imageUrl} className="w-full h-full object-fill"/>
        </div>
      ))
    }
    </div>
  )
}
