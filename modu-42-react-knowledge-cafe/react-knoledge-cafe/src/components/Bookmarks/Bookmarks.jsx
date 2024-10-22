import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 p-4">
        <h3 className='text-4xl text-center'>Reading Time: {readingTime}</h3>
      <h1 className='text-center'>Bookmarked Blogs: {bookmarks.length}</h1>

      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.array.isRequired,
}

export default Bookmarks;
