import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

   
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  
  const handleMarkAsRead = (currentBook) => {
    // step 1: store book id
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist show the alert 
    // step 5: if not add the book in the array or collection
    console.log(currentBook, "book");
    const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId)
    if (isExistBook) {
      toast.error("The book is already exist")
    }
    else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to Read list`)
    }
  }

  const handleWishList = (currentBook) => {
    // step 1: store book id
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist show the alert 
    // step 5: if not add the book in the array or collection
    console.log(currentBook, "book");

    const isExistInReadList = storedBooks.find(book =>
      book.bookId === currentBook.bookId);
    if (isExistInReadList) {
      toast.error("This Book Is Already in Read List")
      return;
    }

    const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
    if (isExistBook) {
      toast.error("The book is already exist")
    }
    else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`)
    }
  }
  
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  }

  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
};

export default BookProvider;