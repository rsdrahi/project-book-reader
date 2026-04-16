import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../component/ListedBooks/ListedReadList';
import ListedWishList from '../../component/ListedBooks/ListedWishList';

const Books = () => {

  const {storedBooks, wishList} = useContext(BookContext);
  console.log(storedBooks, wishList, "bookContext");

  return (
    <div className='container mx-auto my-6'>
      {/* Read List: {storedBooks.length} <br />
      Wish List: {wishList.length} */}

        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList></ListedReadList>
    </TabPanel>
    <TabPanel>
      <ListedWishList></ListedWishList>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Books;