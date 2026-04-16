
const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("storedBooks");
  // console.log(allReadList, 'storedBooks');

  if (allReadList) return JSON.parse(allReadList);
  return [];
}

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("storedBooks", JSON.stringify(allBooks))
  }
}

export {getAllReadListFromLocalDB, addReadListToLocalDB}