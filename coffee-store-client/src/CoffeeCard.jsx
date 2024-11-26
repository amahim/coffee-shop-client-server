import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) => {

    const {_id , photo,name,details} = coffee;

    const handleDelete = _id =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    // headers: {
                    //     'content-type': 'application/json'
                    // },
                    // body: JSON.stringify(newCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log('successfully added');
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              );
                              const remaining = coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)
                        }
                    })
            }
          });

    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    src={photo}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-info">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                    <button className="btn btn-primary">Edit</button></Link>
                    <button className="btn btn-error " onClick={()=> handleDelete(_id)}>Dlt</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;