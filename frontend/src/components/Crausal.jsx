import React, { useState,useEffect } from 'react'

function Crausal() {
    const images = [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
        "https://images.unsplash.com/photo-1517849845537-4d257902454a",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      ];      

      
  let [currentImage,setCurrentImage]  = useState(0)
  
  useEffect(() => {
    const preloadImage = (index) => {
      const img = new Image();
      img.src = images[index];
    };

    preloadImage((currentImage + 1) % images.length);
    preloadImage((currentImage - 1 + images.length) % images.length);
  }, [currentImage]);

  function nextImage(){

    // currentImage>-1 && currentImage<images.length-1?setCurrentImage(currentImage+1):setCurrentImage(0)
    setCurrentImage((prev) => (prev + 1) % images.length);
  }    

  function previousImage(){
        // currentImage<=images.length-1 && currentImage>0 ? setCurrentImage(currentImage-1):setCurrentImage(images.length-1)
    setCurrentImage((prev) => ((prev - 1 + images.length)%images.length  ))
     
  }

  function randomImage(){

    let randomNum = Math.floor(Math.random()*(images.length-0))
    setCurrentImage((ci)=> ci*0+randomNum)
    
    console.log(currentImage);
    
    
  }
      
  return (
    <div>
    <div className='flex justify-center gap-4'>
        <button onClick={previousImage}>Previous</button>
        <img className='w-[300px] h-[300px] object-contain' src={images[currentImage]} alt="" />
        <button onClick={nextImage}>Next</button>
    </div>

    <button className='mt-3 ' onClick={randomImage}>Random Generate</button>
    <span className='ml-4 text-[12px]'>
     Current Random Generated : {currentImage+1}  
    </span>
    </div>

  )
}

export default Crausal