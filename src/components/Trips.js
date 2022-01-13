import React, {useState} from 'react'
import "./Trips.css"
import { useSelector } from 'react-redux'

function Trips() {
    const alltrips = useSelector(state=>state.Trips);
    console.log(alltrips)

    const[input, setInput] = useState('');
    const[searchResults, setSearchResults] = useState([]);

    // implementing filter functionality
    const searchHandler = (e)=>{
        setInput(e.target.value);
        if(alltrips && input!==""){
            const filteredTrips = alltrips.filter(trip=>{
                return Object.values(trip).join(" ").toLowerCase().includes(input.toLowerCase())
            });
            setSearchResults(filteredTrips);
        }
        if(input===""){
            setSearchResults([]);
        }
    }
    return (
        <div >
            <h4 className='mt-2'>Trips Table</h4>
            <div className="mt-4 mb-4 alert alert-success" role="alert">
                <p>(I implemented a search filter. you can enter hotel id, driver id, range, rating, start time etc  and the results will be filtered according to your search)</p>
                <p>search is automatic, as you type trips are being filtered and results being displayed instantly</p>
            </div>

            <div id="pol" className="input-group searchbar">
                <div className="form-outline searchinput">
                    <input value={input} onChange={searchHandler} id="search-focus" placeholder="Search..." type="search" className="form-control" />
                    {/* <button onClick={closeSearch} className="btn bg-dark text-light searchbutton">close</button> */}
                </div>
            </div>


            <table class="table table-striped" style={{marginTop:"10px"}}>
                <thead>
                    <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Driver ID</th>
                    <th scope="col">Hotel ID</th>
                    <th scope="col">Start time</th>
                    <th scope="col">Delivery time</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Range</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.length>0?
                        searchResults.map(trip=>(
                            <tr key={trip.id}>
                            {/* <th scope="row">{trip.id}</th> */}
                            <td>{trip.driver}</td>
                            <td>{trip.hotel}</td>
                            <td>{trip.start_time}</td>
                            <td>{trip.delivery_time}</td>
                            <td>{trip.rating}</td>
                            <td>{trip.time_range}</td>
                        </tr>
                        )) :
                        
                        alltrips.map(trip=>(
                            <tr key={trip.id}>
                            {/* <th scope="row">{trip.id}</th> */}
                            <td>{trip.driver}</td>
                            <td>{trip.hotel}</td>
                            <td>{trip.start_time}</td>
                            <td>{trip.delivery_time}</td>
                            <td>{trip.rating}</td>
                            <td>{trip.time_range}</td>
                        </tr>
                        ))
                     }

                </tbody>
            </table>
        </div>
    )
}

export default Trips
