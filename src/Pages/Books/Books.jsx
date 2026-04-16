import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../component/ListedBooks/ListedReadList';
import ListedWishList from '../../component/ListedBooks/ListedWishList';

const Books = () => {

  const {storedBooks, wishList} = useContext(BookContext);
  console.log(storedBooks, wishList, "bookContext");

  const [sortingType, setSortingType] = useState("");
  console.log(sortingType, "sortingType");

  return (
    <div className='container mx-auto my-6'>
      {/* Read List: {storedBooks.length} <br />
      Wish List: {wishList.length} */}

      <div className='flex justify-center my-6'>
         <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setSortingType('pages')}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType('rating')}>
              <a>Rating</a>
            </li>
            </ul>
          </div>
      </div>

        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
          <ListedReadList sortingType={sortingType}></ListedReadList>
    </TabPanel>
    <TabPanel>
          <ListedWishList sortingType={sortingType}></ListedWishList>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Books;