// Card.js
import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src={props.imageUrl} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p>{props.price}</p>
          <div className='container w-100'>
            <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select className='m-2 h-100 bg-success rounded'>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className='d-inline h-100 fs-5'>
              Pieces Available
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
