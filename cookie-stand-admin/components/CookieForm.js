export default function CookieForm(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
        props.onLocationAdded(event.target.location.value);
    }
    
    return (
        <div className="w-2/3 bg-green-300 mx-auto my-6">
              <p className="text-center p-3 text-3xl text-black-600">Create Cookie Stand</p>
              
              <div className="p-1">
                <form onSubmit={handleSubmit} className="p-3 inline-flex w-full">
                  <label htmlFor="name" className=" mr-6 text-right text-black-600">Location</label>
                  <input type="text" id="location" className="w-full" />
                  <button type="submit" className="flex text-black text-2xl p-4">Create</button>
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
                
                {/* <div className="bg-green-400 py-3 px-24 rounded-lg items-center mx-auto">

                </div> */}
            </div>
  
        </div>
    )
  }