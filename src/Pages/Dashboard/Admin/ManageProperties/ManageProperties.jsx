import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const ManageProperties = () => {
    const axiosSecure = useAxiosSecure();
    const { data: add = [], refetch } = useQuery({
        queryKey: ['add'],
        queryFn: async () => {
            const res = await axiosSecure.get('/add');
            return res.data
        }
    })
    console.log(add);


    const handleVerify = (data) => {
        axiosSecure.patch(`/add/verify/${data._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is an Verified Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleReject = (data) => {
        axiosSecure.patch(`/add/reject/${data._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is an Rejected Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }




    return (
        <div>
            <SectionTitle heading="Manage Properties"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl">
                                <th>
                                    No.
                                </th>
                                <th>Property Name and Location</th>
                                <th>Agent Name and Email</th>
                                <th>Max-Price</th>
                                <th>Min-Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {add.map((data, index) => <tr key={data._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <td>
                                        <span className="text-xl">{data.title}</span>
                                        <br />
                                        <span className="text-base">{data.location}</span>
                                    </td>
                                </td>
                                <td>
                                    <span className="text-xl ">{data.name}</span>
                                    <br />
                                    <span className="text-base ">{data.email}</span>
                                </td>
                                <td className="text-xl ">{data.maxPrice}</td>
                                <td className="text-xl ">{data.minPrice}</td>
                                <th>
                                    {
                                        data.status === 'reject' ? undefined : data.status == 'verify' ? "Verified" : <button onClick={() => handleVerify(data)} className={`btn btn-primary mr-5 text-lg ${data.status === 'rejected' ? 'btn-disabled' : ''} text-white`}>Verify</button>
                                    }
                                    {
                                        data?.status === 'verify' ? undefined : data.status == 'reject' ? 'Rejected' : <button onClick={() => handleReject(data)} className={`btn btn-primary ml-5 text-lg ${data.status === 'verified' ? 'btn-disabled' : ''}  text-white `}>Reject</button>
                                    }


                                </th>
                            </tr>
                            )}



                        </tbody>


                    </table>
                </div>
            </div>
        </div >
    );
};

export default ManageProperties;