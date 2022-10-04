import SectionHeader from "./sectionHeader";
import Work from "./work";

export default function FeaturedWork() {
    return (
        <section className='px-6'>
            <div className='max-w-4xl mx-auto py-12'>
                <SectionHeader title='Featured work' href='#' />
                <div className='flex flex-col gap-2'>
                    <Work />
                    <Work />
                </div>
            </div>
        </section>
    )
}
