import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedReadList = ({ sortingType }) => {
  

   const {storedBooks} = useContext(BookContext);
  console.log(storedBooks, "bookContext");

  const [filteredReadList, setFilteredReadList] = useState(storedBooks)
  
  useEffect(() => {
    if (sortingType) {
      if (sortingType === 'pages') {
        const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
        console.log(sortedData, "sortedData");
        setFilteredReadList(sortedData);
      }
      else if (sortingType === 'rating') {
        // 
        const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
        console.log(sortedData, "sortedData");
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storedBooks]);
  
   if (filteredReadList.length === 0) {
    return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg'>
      <h2 className='font-bold text-4xl'>No Read List Data</h2>
    </div>
  }

  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
        filteredReadList.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
         }  
     </div>
    </div>
  );
};

export default ListedReadList;