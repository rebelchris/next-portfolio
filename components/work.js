export default function Work() {
    return (
        <article className='flex items-center border-b-2 py-6'>
            <img src='https://via.placeholder.com/240' className='w-1/3 mr-6 rounded-lg' />
            <div>
                <h3 className='text-2xl mb-2 font-medium'>Work title</h3>
                <span className='text-gray-600 mb-4 block'>
                    <date className='bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl'>
                        2022
                    </date>
                    Dashboard
                </span>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                </p>
            </div>
        </article>
    );
}