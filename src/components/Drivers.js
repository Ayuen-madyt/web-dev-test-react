import React , {useState} from 'react'
import { useSelector } from 'react-redux'

function Drivers() {
    const drivers = useSelector(state=>state.Drivers);
    const[input, setInput] = useState('');
    const[searchResults, setSearchResults] = useState([]);

    const searchHandler = (e)=>{
        setInput(e.target.value);
        if(drivers && input!==""){
            const filtereddrivers = drivers.filter(driver=>{
                return Object.values(driver).join(" ").toLowerCase().includes(input.toLowerCase())
            });
            setSearchResults(filtereddrivers);
        }
        if(input===""){
            setSearchResults([]);
        }
    }
    return (
        <div style={{marginTop:"20px"}}>
            <h3>Drivers page</h3>
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
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>

            {searchResults.length>0?
                        searchResults.map(driver=>(
                            <tr key={driver.id}>
                            <td>{driver.id}</td>
                            <td>{driver.first_name}</td>
                            <td>{driver.last_name}</td>
                        </tr>
                        )) :
                        
                        drivers.map(driver=>(
                            <tr key={driver.id}>
                            <td>{driver.id}</td>
                            <td>{driver.first_name}</td>
                            <td>{driver.last_name}</td>
                        </tr>
                        ))
                     }
            {/* {
           drivers.map(driver=>(
                <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.first_name}</td>
                <td>{driver.last_name}</td>
            </tr>
            ))} */}
            </tbody>
            </table>
        </div>
    )
}

export default Drivers
