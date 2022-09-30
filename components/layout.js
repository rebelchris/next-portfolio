export default function Layout({ children }) {
    return (
        <>
            <header>
                Header
            </header>
            <main>{children}</main>
            <footer>
                &copy; 2022 - Our portfolio
            </footer>
        </>
    )
}
