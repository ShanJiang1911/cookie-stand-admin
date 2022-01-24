import Link from 'next/link'

export default function Overview() {
    return (
        <>
            <h1>This is Overview Page</h1>
            <Link href="/">
                <a>Return Home</a>
            </Link>
        </>
    )
}