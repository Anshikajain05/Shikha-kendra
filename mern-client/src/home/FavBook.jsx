import React from "react";
import { Link } from "react-router";
import FavBookImg from '../assets/favoritebook.jpg'
const FavBook = () =>{
    return(
        
            <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between item-center gap-12 mt-20 px-24">
                <div className="md:w-1/2">
                <img src={FavBookImg} alt="" className="rounded md:w-10/12"/>
                </div>
                <div className="md:w-1/2 space-y-6">
               <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">Find Your Favorite<span className="text-blue-700"> Resouces Here!</span></h2>
               <p className="mb-10 text-lg md:w-5/6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facilis, accusantium quo porro quae placeat mollitia eligendi, distinctio nisi vero adipisci illo, natus quaerat error praesentium possimus impedit recusandae.
               </p>
               {/* start*/}
               
               <div className="flex flex-col sm:flex-row justify-between gap-6 md-3/4 my-14" >
                {/* <div>
                    <h3 className="text-3xl font-bold">800+</h3>
                    <p className="text-base"> Book Listing</p>
                </div> */}
                <div>
                    <h3 className="text-3xl font-bold">500+</h3>
                    <p className="text-base"> Register User</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">1200+</h3>
                    <p className="text-base">PDF Downloads</p>
                </div>
               </div>
               <Link to="/shop" className="mt-12 block" ><button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300
                ">Explore More</button></Link>
                </div>
                
            </div>
        
    )
}
export default FavBook