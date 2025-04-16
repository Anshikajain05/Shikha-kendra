import React from "react";
import { Card } from "flowbite-react";

import { useLoaderData } from "react-router";
const SingleBook = () =>{
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const book = { _id, bookTitle, imageURL, bookDescription };
        cart.push(book);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Book added to cart!");
      };
     
      
    const {_id , bookTitle, imageURL , bookDescription,bookPDFURL} = useLoaderData();
     return(

        <div className='px-4 lg:px-24  flex items-center'>
        <div className='flex  w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div>
            <img className="w-[600px] h-[400px]" src={imageURL}></img>  
         </div>
         {/*left side*/ }
         <div className='md:w-1/2 space-y-8 h-full' >
             <h2 className='text-5xl font-bold leading-snug text-black '>{bookTitle} 
             </h2>
             <p className='md:w-4/5'>{bookDescription}</p>
             <button
  onClick={handleAddToCart}
  className='bg-blue-700 px-6 py-2 mr-16 text-white font-medium hover:bg-black transition-all ease-in duration-200 gap-6'
>
  Add To Cart
</button>

<a
  href={bookPDFURL}
  download
  className="bg-blue-600 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded"
>
  Download PDF
</a>
         </div>
          
         
        </div>
         </div>

   
 
            
    )
}
export default SingleBook