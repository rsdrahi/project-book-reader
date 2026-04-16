import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedWishList = ({sortingType}) => {

  const {wishList} = useContext(BookContext);
  console.log(wishList, "bookContext");

  const [filteredWishList, setFilteredWishList] = useState(wishList)
    
    useEffect(() => {
      if (sortingType) {
        if (sortingType === 'pages') {
          const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
          console.log(sortedData, "sortedData");
          // setFilteredWishList(sortedData);
        }
        else if (sortingType === 'rating') {
          // 
          const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
          console.log(sortedData, "sortedData");
          setFilteredWishList(sortedData);
        }
      }
    }, [sortingType, wishList]);
  
  if (filteredWishList.length === 0) {
    return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-lg'>
      <h2 className='font-bold text-4xl'>No Wish List Data</h2>
    </div>
  }

  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
        filteredWishList.map((book, ind) => <BookCard key={ind} book={book}></BookCard>)
         }  
     </div>
    </div>
  );
};

export default ListedWishList;