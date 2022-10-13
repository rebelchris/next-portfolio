export default function Work({item}) {
    return (
        <article className='flex items-center border-b-2 py-6'>
            <img src={item.image} className='w-1/3 mr-6 rounded-lg' />
            <div>
                <h3 className='text-2xl mb-2 font-medium'>{item.title}</h3>
                <span className='text-gray-600 mb-4 block'>
                    <time className='bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl'>
                        {item.year}
                    </time>
                    {item.category}
                </span>
                <p>{item.description}</p>
            </div>
        </article>
    );
}