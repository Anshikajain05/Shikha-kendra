import React, { useState } from 'react'
//import {useState, useEffect} from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
const Upload = ()  =>{
 
 const bookCategory = [ "Presentation","textbook","Digital Notes","HandWritten Notes","Books","Report","Project","Previous year Paper"]
const [selectedBookCategory,setselectedBookCategory ] = useState(bookCategory[0]);
const handlechangeSelectedValue = (event) => {
 console.log(event.target.value);
  setselectedBookCategory(event.target.value)
}
const handleBookSubmit = (event) =>{
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageURL = form.imageURL.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL= form.bookPDFURL.value;
  const category = form.category.value;
  const bookobj = {
    bookTitle, authorName, imageURL, category ,bookDescription, bookPDFURL
  }
  console.log(bookobj)

  fetch("http://localhost:5000/upload-books", {
    method:"POST",
    headers:{
      "content-type":"application/json",
    },
    body:JSON.stringify(bookobj)
  }).then(res => res.json()).then(data =>{
    alert("book uploaded sucessfully")
    form.reset();
  })
}
 return(
    <div  className='px-4 my-12 '>
<h2 className='mb-8 text-3xl font-bold'>Upload a Your Resource</h2>
<form onSubmit={handleBookSubmit} className="flex  lg:w-[1180px] flex-col  flex-wrap gap-4 ">

  <div className='flex gap-8' >
      <div className='lg:w-1/2'>
        <div className="mb-2 block ">
          <Label htmlFor="bookTitle" value='Book Title' color="black">Resource Title</Label>
        </div>
        <TextInput id="bookTitle" type="text" color="white" placeholder="bookname" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block ">
          <Label htmlFor="authorName" value='authorName' color="black">Provider's Name</Label>
        </div>
        <TextInput id="authorName" type="text" color="white" placeholder="authorname" required />
      </div>
      </div>

      <div className='flex gap-8' >
      <div className='lg:w-1/2'>
        <div className="mb-2 block w-48 h-auto">
          <Label htmlFor="imageURL" value='imageURL' color="black">Image URL</Label>
        </div>
        <TextInput id="imageURL" type="text" color="white" placeholder="Image URL" required />
      </div>
      <div className='lg:w-1/2 ' color="black">
        <div className="mb-2 block ">
          <Label htmlFor="inputState " value='book category' color='black'>Resource's Category</Label>
        </div>
         <select id="inputState" name="category" className='w-full h-10 rounded-lg border-2 ' value={selectedBookCategory}
         onChange={handlechangeSelectedValue}>
          {
            bookCategory.map((option)=> <option key={option} value={option} className='text-black hover:bg-gray-700 '>{option}</option>)
          }
         
         </select>
      </div>
      </div>
    
   <div>
        <div className="mb-2 block ">
          <Label htmlFor="bookDescription" value='bookDescription' color="black"> Write Your Resource Description</Label>
        </div>
       
      <Textarea id="bookDescription"  color='white' placeholder="Book's Description..." required className='w-full' rows={4} />
    </div>

     <div>
    <div className="mb-2 block ">
          <Label htmlFor="bookPDFURL" value='bookPDFURL' color="black">Resource Pdf URL</Label>
        </div>
        <TextInput id="bookPDFURL" type="text" color="white" placeholder="bookPDFURL" required />
      </div>
<div>
  <Button type='submit'className='mt-5 w-full text-white hover:bg-gray-100 dark:bg-gray-800'>Upload</Button>
</div>
     

    </form>
    </div>
)
}
export default Upload;