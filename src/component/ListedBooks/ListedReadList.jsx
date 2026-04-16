import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedReadList = () => {

   const {storedBooks} = useContext(BookContext);
  console.log(storedBooks,"bookContext");
  
   if (storedBooks.length === 0) {
    return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg'>
      <h2 className='font-bold text-4xl'>No Read List Data</h2>
    </div>
  }

  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
        storedBooks.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
         }  
     </div>
    </div>
  );
};

export default ListedReadList;