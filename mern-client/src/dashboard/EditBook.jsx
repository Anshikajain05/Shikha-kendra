
import { useLoaderData, useParams } from 'react-router'
import React, { useState } from 'react'

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
const EditBook = () => {
    const {id} = useParams();
    const {bookTitle , authorName , imageURL, category , bookDescription, bookPDFURL} = useLoaderData();
    
         
         const bookCategory = [ "Presentation","textbook","Digital Notes","HandWritten Notes","Books","Report","Project","Previous year Paper"]
        const [selectedBookCategory,setselectedBookCategory ] = useState(bookCategory[0]);
        const handlechangeSelectedValue = (event) => {
         console.log(event.target.value);
          setselectedBookCategory(event.target.value)
        }
        const handleupdate = (event) =>{
          event.preventDefault();
          const form = event.target;
          const bookTitle = form.bookTitle.value;
          const authorName = form.authorName.value;
          const imageURL = form.imageURL.value;
          const bookDescription = form.bookDescription.value;
          const bookPDFURL= form.bookPDFURL.value;
          const category = form.category.value;
          const updatebookobj = {
            bookTitle, authorName, imageURL, category ,bookDescription, bookPDFURL
          }
          fetch(`http://localhost:5000/books/${id}`,{
            method:"PATCH",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(updatebookobj)
          }).then(res => res.json()).then(data => {
            alert("Book Update Sucessfully");
            form.reset();
          })
          
        
        }
         return(
            <div  className='px-4 my-12 '>
        <h2 className='mb-8 text-3xl font-bold'>Update a Resources</h2>
        <form onSubmit={handleupdate} className="flex  lg:w-[1180px] flex-col  flex-wrap gap-4 ">
        
          <div className='flex gap-8' >
              <div className='lg:w-1/2'>
                <div className="mb-2 block ">
                  <Label htmlFor="bookTitle" value='Book Title' color="black" >Resource Title </Label>
                </div>
                <TextInput id="bookTitle" type="text" color="white" placeholder="bookname" defaultValue={bookTitle} required />
              </div>
              <div className='lg:w-1/2'>
                <div className="mb-2 block ">
                  <Label htmlFor="authorName" value='authorName' color="black">Provider's Name</Label>
                </div>
                <TextInput id="authorName" type="text" color="white" placeholder="authorname" required defaultValue={authorName}/>
              </div>
              </div>
        
              <div className='flex gap-8' >
              <div className='lg:w-1/2'>
                <div className="mb-2 block ">
                  <Label htmlFor="imageURL" value='imageURL' color="black">Image URL</Label>
                </div>
                <TextInput id="imageURL" type="text" color="white" placeholder="Image URL" defaultValue={imageURL} required />
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
                  <Label htmlFor="bookDescription" value='bookDescription' color="black">  Resource's Description</Label>
                </div>
               
              <Textarea id="bookDescription"  color='white' placeholder=" Write your Book's Description..." defaultValue={bookDescription} required className='w-full' rows={4} />
            </div>
        
             <div>
            <div className="mb-2 block ">
                  <Label htmlFor="bookPDFURL" value='bookPDFURL' color="black">Resource Pdf URL</Label>
                </div>
                <TextInput id="bookPDFURL" type="text" color="white" placeholder="bookPDFURL" defaultValue={bookPDFURL} required />
              </div>
        <div>
          <Button type='submit'className='mt-5 w-full text-white hover:bg-gray-100 dark:bg-gray-800'>Update </Button>
        </div>
             
        
            </form>
            </div>
         )
             }     
    
export default EditBook