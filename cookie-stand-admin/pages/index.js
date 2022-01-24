import Head from 'next/head';
import CookieForm from '../components/CookieForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ReportTable from '../components/ReportTable';
import { hourly_sales } from '../data';
import { useState } from 'react';

export default function Home() {
  
  const [addedLocations, setAddedLocations] = useState([]);
  
  function handleLocationAdded(location) {
    const sales = hourly_sales;
    const addedLocation = {
      location: location,
      hourly_data: sales
    }
    setAddedLocations([...addedLocations, addedLocation]);
  }
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <body>

        <Header />

        <main className="relative">
          <CookieForm onLocationAdded={handleLocationAdded} />
          
          <div className="text-center text-3xl">
            <ReportTable questions={[]} />
          </div>

        </main>

        <Footer count={addedLocations.length}/>
        
      </body>
    </div>
  )
}
