import SectionHeader from "./sectionHeader";
import Article from "./article";

export default function RecentPosts({posts}) {
    return (
        <section className='bg-blue-100 px-6'>
            <div className='max-w-4xl mx-auto py-12'>
                <SectionHeader title='Recent posts' href='#' />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Article post={posts[0]} />
                    <Article post={posts[1]} />
                </div>
            </div>
        </section>
    )
}
