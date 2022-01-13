import React from 'react'
import { useSelector } from 'react-redux'

function Drivers() {
    const drivers = useSelector(state=>state.Drivers);
    return (
        <div style={{marginTop:"20px"}}>
            <h3>Drivers page</h3>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
            {
           drivers.map(driver=>(
                <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.first_name}</td>
                <td>{driver.last_name}</td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default Drivers
