import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
const ManageBook = () =>{
    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data))
    },[])
    const handledelete = (id) =>{
        console.log(id);
        fetch(`http://localhost:5000/book/${id}`,{
            method:"DELETE",
        }).then(res => res.json()).then(data => {alert ("Book is deleted sucessfully")
           // setAllBooks(data);
        })
    }
    return(
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage your book</h2>
            <div className="overflow-x-auto"></div>
      <Table className='lg:w-[1180px]'>
        <TableHead>
          <TableRow>
          <TableHeadCell>No.</TableHeadCell>
            <TableHeadCell>Book name</TableHeadCell>
            <TableHeadCell>Author Name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span >Edit or manage</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        {
            allBooks.map((book , index ) => <TableBody className="divide-y"key={book._id}>
<TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800"></TableRow>
           
      
        
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell>{index + 1}</TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             {book.bookTitle}
            </TableCell>
            <TableCell>{book.authorName}</TableCell>
            <TableCell>{book.category}</TableCell>
            <TableCell>$10</TableCell>
            <TableCell>
                <Link
               to={`/admin/dashboard/EditBook/${book._id}`}  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 ">
               <p> Edit</p>
              
              </Link>
              <button onClick={ ()=> handledelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete </button>
            </TableCell>
          </TableRow>

         
        </TableBody>)
}
      </Table>

        </div>
    )
}
export default ManageBook