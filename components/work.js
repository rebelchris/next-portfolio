import Image from "next/image";

export default function Work({item}) {
    return (
        <article className='flex flex-col md:flex-row items-center border-b-2 py-6'>
            <div className='w-full md:w-1/3 mb-3 md:mr-6'>
                <Image src={item.image} className='rounded-lg' layout="responsive" width={500} height={335} />
            </div>
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