 import React from "react";
 function Card({username,btnText="visit me"}){
    return(
       <div className="relative h-[400px] w-[300px] rounded-md">
        <img src=".\src\assets\gaspar-zaldo-FxzGkiW8LnI-unsplash.jpg" className="z-0 h-full w-full ronded-md object-cover"/>
        <div className="absolute insert-0 bg-gradient-to-t from-grey-900 to-transparent rounded-xl"></div>
        <div className="absolute bottom-4 left-4 text-left" >
            <h1 className="text-lg font-semibold text-white ">{username}</h1>
            <p className="mt-2 text-white ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quibusdam asperiores harum! Iste assumenda,
            </p>
            <button className="mt-2 inline-flex cursor-pointer item-center text-sm font-semibold text-white ">
             {btnText}
            </button> 
        </div>
         </div>
    )
 }
 export default Card