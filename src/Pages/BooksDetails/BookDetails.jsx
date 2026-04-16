import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';


// const bookPromise = fetch("/booksData.json")
//   .then((res) => res.json());

const BookDetails = () => {

  const { bookId:booksParamsId } = useParams()
  console.log(booksParamsId, "bookId");

  // const books = use(bookPromise);
  const books = useLoaderData();
  console.log(books, "books");

  const expectedBook = books.find(book => book.bookId == booksParamsId)
  console.log(expectedBook, "expectedBook");

  const { bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating, 
    category,
    tags,
    publisher,
    yearOfPublishing } = expectedBook

  return (

    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-12">
  <figure className='w-full flex items-center justify-center bg-gray-100 container rounded-lg'>
    <img
      src={image}
      alt="Album"  className='h-[400px]'/>
  </figure>
  <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>
        <p className='py-2 border-y'>{category}</p>
        <p><span className='font-bold'>Review:</span> {review}</p>
        <div className='flex items-center gap-2'> <span className='font-bold'>Tag</span>
              {tags.map((tag, index) => <div key={index}
                className="badge text-green-500 bg-green-100 ">{tag}</div>)}
                </div>
        <div className="border-t space-y-3">
          <div className='flex justify-between items-center gap-2'>
            <span>Number of Pages:</span> <span className='font-bold'>{totalPages}</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <span>Publisher:</span> <span className='font-bold'>{publisher}</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <span>Year Of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <span>Rating:</span> <span className='font-bold'>{rating}</span>
          </div>
          <div className='flex items-center gap-2'>
            <button className="btn">Mark as Read</button>
            <button className="btn btn-info">Add to Wishlist</button>
          </div>
    </div>
  </div>
    </div>
    
  );
};

export default BookDetails;