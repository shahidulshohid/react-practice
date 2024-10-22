import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, author, authorImg, readingTime, postedDate, hasTag} = blog
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={authorImg} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read</span>
                </div>
            </div>
            <h2>Title: {title}</h2>
            <p>
                {
                    hasTag.map((has, idx) => <span className='ml-2' key={idx}> #{has}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired
}

export default Blog;