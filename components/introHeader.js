export default function IntroHeader() {
    return (
        <header className='px-6'>
            <div className='max-w-4xl mx-auto flex gap-14 items-center'>
                <div>
                    <h1 className='text-3xl font-bold mb-6'>Hi, I'm Chris!<br />Creative Developer</h1>
                    <p className='text-lg mb-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a href='#' className='bg-red-400 text-white px-6 py-3 text-lg rounded'>Check my work</a>
                </div>
                <span className='m-5 inline-block before:w-full before:aspect-square before:block before:absolute before:-left-1.5 before:top-1.5 before:bg-red-400 relative before:block before:absolute before:bg-red-400 relative z-0 before:rounded-full'>
                    <img
                        src='profile.png'
                        width='240'
                        height='240'
                        alt='Image of Chris'
                        className='z-10 relative rounded-full'
                    />
                </span>
            </div>
        </header>
    )
}
