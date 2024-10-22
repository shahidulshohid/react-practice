
import PropTypes from 'prop-types';
import { HiBookmarkSquare } from "react-icons/hi2";

const Blog = ({blog, handleAddToBookmar, handleMarkAsRead}) => {
    const {id, title, cover, author, authorImg, readingTime, postedDate, hasTag} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={authorImg} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{readingTime} min read</span>
                    <button onClick={()=>handleAddToBookmar(blog)} className='ml-2 text-2xl text-red-600'><HiBookmarkSquare /></button>
                </div>
            </div>
            <h2>Title: {title}</h2>
            <p>
                {
                    hasTag.map((has, idx) => <span className='mr-2' key={idx}> #{has}</span>)
                }
            </p>
            <button className='text-purple-600 underline font-bold' onClick={()=>handleMarkAsRead(id,readingTime)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmar:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
}

export default Blog;