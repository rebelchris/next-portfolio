import Link from "next/link";
import {useRouter} from "next/router";

export default function Header() {
    const router = useRouter();
    const routes = ['Blog', 'Work', 'Contact'];

    return (
        <header className='container mx-auto flex justify-between h-24 items-center px-6 md:px-0'>
            <Link href='/'>
                <svg aria-label="Daily Dev Tips logo" xmlns="http://www.w3.org/2000/svg" width="30" height="24">
                    <path d="M 13.073 23.977 L 10.214 23.147 C 9.914 23.063 9.746 22.748 9.83 22.448 L 16.228 0.406 C 16.312 0.106 16.626 -0.063 16.926 0.022 L 19.785 0.851 C 20.085 0.936 20.254 1.25 20.17 1.55 L 13.772 23.592 C 13.683 23.892 13.373 24.066 13.073 23.977 Z" fill="rgb(255,188,61)"></path>
                    <path d="M 9.769 16.542 C 9.985 16.312 9.971 15.946 9.732 15.735 L 5.485 11.999 L 9.732 8.263 C 9.971 8.052 9.989 7.686 9.769 7.457 L 7.73 5.281 C 7.519 5.056 7.163 5.042 6.933 5.258 L 0.179 11.587 C -0.06 11.807 -0.06 12.187 0.179 12.407 L 6.933 18.74 C 7.163 18.956 7.519 18.947 7.73 18.717 Z" fill="rgb(218,0,96)"></path>
                    <path d="M 23.066 18.745 L 29.821 12.412 C 30.06 12.191 30.06 11.812 29.821 11.591 L 23.066 5.253 C 22.841 5.042 22.485 5.052 22.27 5.277 L 20.231 7.452 C 20.015 7.682 20.029 8.047 20.268 8.258 L 24.515 11.999 L 20.268 15.735 C 20.029 15.946 20.01 16.312 20.231 16.542 L 22.27 18.717 C 22.48 18.947 22.837 18.956 23.066 18.745 Z" fill="rgb(0,185,232)"></path>
                </svg>
            </Link>
            <nav>
                <ul className='flex gap-6 font-medium'>
                    {routes.map(route => {
                        return (
                            <li key={route} className={`hover:underline ${router.pathname === `/${route.toLowerCase()}` && 'text-red-400'}`}>
                                <Link href={`/${route.toLowerCase()}`}>{route}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
