import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    console.log(users);



    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleMakeAgent = (user) => {
        axiosSecure.patch(`users/agent/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Agent Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleMakeFraud = (user) => {
        axiosSecure.patch(`users/fraud/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an fraud Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }



    return (
        <div>
            <SectionTitle heading='manage users'></SectionTitle>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">Total User: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-sky-200">
                        <tr className="text-lg">
                            <th>No.</th>
                            <th>UserName</th>
                            <th>UserEmail</th>
                            <th>Admin Role</th>
                            <th>Agent Role</th>
                            <th>Fraud Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td className="text-base font-medium">{user.name}</td>
                            <td className="text-base font-medium">{user.email}</td>
                            <td>
                                {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-sky-300">Make Admin</button>}
                            </td>

                            <td>
                                {user.role === 'agent' ? 'Agent' : <button onClick={() => handleMakeAgent(user)} className="btn bg-sky-300">Make Agent</button>}
                            </td>

                            <td>
                                {user.role === 'fraud' ? 'Fraud' : <button onClick={() => handleMakeFraud(user)} className="btn bg-sky-300">Make Fraud</button>}
                            </td>

                            <td>
                                <button onClick={() => handleDeleteUser(user)} className="btn bg-red-600"><FaTrashAlt className="text-xl text-white"></FaTrashAlt></button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;