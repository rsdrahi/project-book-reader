import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({book}) => {
  return (
   <Link to={`/booksDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
  <figure className='p-8 bg-gray-100 flex justify-center items-center'>
    <img
      src={book.image} alt={book.bookName} className='rounded-lg h-[250px]'/>
  </figure>
            <div className="card-body">
              <div className='flex items-center gap-2'>
              {book.tags.map((tag, index) => <div key={index}
                className="badge text-green-500 bg-green-100 ">{tag}</div>)}
                </div>
    <h2 className="card-title font-bold text-xl">
      {book.bookName}
    </h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed p-4 border-gray-300">
       <div className="font-semibold">{book.category}</div>
       <div className="font-semibold flex items-center gap-2">{book.rating} <CiStar></CiStar></div>
               </div>
               </div>
            </Link>
  );
};

export default BookCard;