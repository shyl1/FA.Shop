import { autoSlider , delay } from "@Constants/index";
import { useEffect, useRef, useState } from "react";



export default function Carousel() {
  //create state for index 
  const [index ,setIndex] = useState(1);
  const [transitioning ,setTransitioning] = useState(true);

  //use ref for the changes that happens in scrolling for typescript error we need to specfify the correct type for the ref
  const timeOutRef = useRef<number | null>(null);

  const resetTimeOut = ()=> {
    if (timeOutRef.current){
      clearTimeout(timeOutRef.current);
    }
  }
  //clone first slide , and last slide
  const clonedSlides  = [ autoSlider[autoSlider.length - 1], //clone last slide
  ...autoSlider, //origin slides  
  autoSlider[0], // clone first slide
];

  //use effect when the index changes it sets up a timeout that calles a function to increment the index to the next slide 
  useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(()=>{
      setIndex((prev)=> prev + 1);
    } , delay);

    /*
    clean up function it calls resetTimeOut to clear any existing timeout when the component unmounts or before the next effect runs. 
    Purpose: This prevents potential memory leaks and ensures that the timeout is properly cleared, avoiding unexpected behavior when the component is re-rendered or unmounted. 
    */
    return ()=> {
      resetTimeOut();
    }
  },[index]);

  //handle smooth wrapping 
  useEffect(() => {
    // if the slider reached to the last image it jumpes back to the first image
    if(index === clonedSlides.length -1){
      setTimeout(() =>{
        setTransitioning(false);
        setIndex(1);
      },1000);
    } else if (index === 0){
      setTimeout(() =>{
        setTransitioning(false);
        setIndex(clonedSlides.length -2); // last image 
      },1000);
    } else {
      setTransitioning(true);
    }
  },[index]);

  
  
  return (
    <div className="w-full h-full flex " 
    style={{transition:` ${transitioning ? "transform 1s ease" : ""}`,
      transform: `translate3d(${-index * 100}% , 0 , 0)` }} >
    {
      clonedSlides.map(({Id:id , ImageUrl:imageUrl})=> (
        <div key={id} className="w-full h-full flex-shrink-0">
          <img src={imageUrl} className="w-full h-full object-fill"/>
        </div>
      ))
    }
    </div>
  )
}
