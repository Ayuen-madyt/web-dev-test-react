import React, {useState} from 'react'
import { useSelector } from 'react-redux'

function Hotels() {
    const hotels = useSelector(state=>state.Hotels);

    const[input, setInput] = useState('');
    const[searchResults, setSearchResults] = useState([]);

    const searchHandler = (e)=>{
        setInput(e.target.value);
        if(hotels && input!==""){
            const filteredHotels = hotels.filter(hotel=>{
                return Object.values(hotel).join(" ").toLowerCase().includes(input.toLowerCase())
            });
            setSearchResults(filteredHotels);
        }
        if(input===""){
            setSearchResults([]);
        }
    }

    return (
        <div style={{marginTop:"20px"}}>
            <h3>Hotels List</h3>
            <div id="pol" className="input-group searchbar">
                <div className="form-outline searchinput">
                    <input value={input} onChange={searchHandler} id="search-focus" placeholder="Search..." type="search" className="form-control" />
                    {/* <button onClick={closeSearch} className="btn bg-dark text-light searchbutton">close</button> */}
                </div>
            </div>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>

            {searchResults.length>0?
                        searchResults.map(hotel=>(
                            <tr key={hotel.id}>
                            <td>{hotel.id}</td>
                            <td>{hotel.name}</td>
                            <td>{hotel.address}</td>
                        </tr>
                        )) :
                        
                        hotels.map(hotel=>(
                            <tr key={hotel.id}>
                            <td>{hotel.id}</td>
                            <td>{hotel.name}</td>
                            <td>{hotel.address}</td>
                        </tr>
                        ))
                     }
            </tbody>
            </table>
        </div>
    )
}


export default Hotels
