import React from 'react'
import { useSelector } from 'react-redux'

function Hotels() {
    const hotels = useSelector(state=>state.Hotels);
    return (
        <div style={{marginTop:"20px"}}>
            <h3>Hotels List</h3>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
            {
           hotels.map(hotel=>(
                <tr key={hotel.id}>
                <td>{hotel.id}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}


export default Hotels
