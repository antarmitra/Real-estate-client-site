/* eslint-disable react/prop-types */



const WishListCard = ({ data }) => {
    const { photo, name, maxPrice, minPrice } = data;

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/addProperty/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Product has been deleted.',
    //                             'success'
    //                         )
    //                         // handleDeleteItem(_id);
    //                     }
    //                 })
    //         }

    //     })
    // }


    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[250px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-lg font-medium text-gray-500">Property-Name: <span className="text-lg font-medium text-black">{name}</span></h2>
                <p className="text-lg font-medium text-gray-500">Max-Price: <span className="text-lg font-medium text-black">{maxPrice}</span></p>
                <p className="text-lg font-medium text-gray-500">Min-Price: <span className="text-lg font-medium text-black">{minPrice}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;