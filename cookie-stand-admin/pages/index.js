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
          <div className="w-2/3 bg-green-300 mx-auto my-6">
            <p className="text-center p-3 text-3xl text-black-600">Create Cookie Stand</p>
            
            <div className="p-1">
              <form className="p-3 inline-flex w-full">
                <label htmlFor="name" className=" mr-6 text-right text-black-600">Location</label>
                <input type="text" className="w-full" />
              </form>
            </div>

            <div className="inline-flex p-3 w-full">
              
              <div className="bg-green-100 py-3 px-24 rounded-lg mx-auto">
                <form className="text-m">Minimum Customers per Hour</form>
                  <input type="text" className="w-full"/>
              </div>
              
              <div className="bg-green-100 py-3 px-24 rounded-lg mx-auto">
                <form className="text-m">Maximum Customers per Hour</form>
                  <input type="text" className="w-full"/>
              </div>
              
              <div className="bg-green-100 py-3 px-24 rounded-lg mx-auto">
                <form className="text-m">Average Cookies per Sale</form>
                  <input type="text" className="w-full"/>
              </div>
              
              <div className="bg-green-400 py-3 px-24 rounded-lg items-center mx-auto">
              <button className="flex text-black text-2xl p-4">Create</button>
              </div>
            </div>

          </div>
          {/* report table */}
          <p className="text-center text-m text-black-700">Report Table Coming Soon...</p>
          {/* Json */}
          <p className="w-1/2 text-center mx-auto my-4" >{`{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}`}</p>
        </main>

        <footer className="bg-green-400 mt-10 mb-20 p-4 text-black">
          <p className="text-sm">@2021</p>
        </footer>
      </body>
    </div>
  )
}