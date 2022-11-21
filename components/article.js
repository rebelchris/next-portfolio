import Link from "next/link";

const getTagLink = (tag) => {
    return (<Link href={`/blog/tag/${tag}`}><a className='underline'>{tag}</a></Link>);
}


export default function Article({post, className = 'rounded-lg'}) {
    return (
        <article className={`bg-white p-4 ${className}`}>
            <Link href={`blog/${post.slug}`}><h3 className='text-2xl mb-2 font-medium hover:text-red-400 cursor-pointer'>{post.title}</h3></Link>
            <span className='text-gray-600 mb-4 block'><time>{post.date}</time> | {post.tags.map(tag => getTagLink(tag)).reduce((prev, curr) => [prev, ', ', curr])}</span>
            <p>
                {post.description}
            </p>
        </article>
    );
}