import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedWishList = () => {

  const {wishList} = useContext(BookContext);
  console.log(wishList, "bookContext");
  
  if (wishList.length === 0) {
    return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg'>
      <h2 className='font-bold text-4xl'>No Wish List Data</h2>
    </div>
  }

  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
        wishList.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
         }  
     </div>
    </div>
  );
};

export default ListedWishList;