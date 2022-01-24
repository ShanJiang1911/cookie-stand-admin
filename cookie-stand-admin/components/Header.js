import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-green-400 text-black font-sans flex items-center justify-between p-4">
        <h1 className="text-4xl font-bold">
          Cookie Stand Admin
        </h1>
        <Link href="/overview">
            <a className="bg-white px-2 py-1 rounded-lg">Overview</a>
        </Link>
      </header>
    )
}

