import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body>
        <header className="bg-green-400 text-black font-sans flex items-center justify-between p-4">
          <h1 className="text-4xl font-bold">
            Cookie Stand Admin
          </h1>
        </header>

        <main className="relative">
          {/* cookie form */}
          <div className="w-2/3 bg-green-100 mx-auto my-6">
            <p className="text-center p-3 text-3xl text-black-600">Create Cookie Stand</p>
            <form className="w-1/2 p-3">
              <label htmlFor="name" className="w-20 mr-6 text-right text-black-600">Location</label>
              <input type="text" className=" " />
            </form>

            <div className=" p-2">
              <form className="text-xs">Minimum Customers per Hour</form>
                <input type="text" />
              <form className="text-xs">Maximum Customers per Hour</form>
                <input type="text" />
              <form className="text-xs">Average Cookies per Sale</form>
                <input type="text" />
              <button className="flex bg-blue-300 text-black">Create</button>
            </div>

          </div>
          {/* report table */}
          <p className="text-center text-sm text-red-700">Report Table Coming Soon...</p>
          {/* Json */}
          <p className="text-center text-sm text-red-700"></p>
        </main>

        <footer className="bg-green-400 mt-10 mb-20 p-4 text-black">
          <p className="text-sm">@2021</p>
        </footer>
      </body>
    </div>
  )
}