import Swal from "sweetalert2";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import './AddProperty.css'


const AddProperty = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user?.email, user?.displayName);

    const handleAddProperty = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const location = form.location.value;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description = form.description.value;
        const addProperty = { image, title, location, email, name, maxPrice, minPrice, description, photo  };
        console.log(addProperty);

        const addProperties = await axiosSecure.post('/add', addProperty)
        console.log(addProperties.data);

        if (addProperties.data.insertedId) {
            e.target.reset();
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data added Successfully",
                showConfirmButton: false,
                timer: 2000
            });
        }

    }


    return (
        <div>
            <SectionTitle heading='Add Property'></SectionTitle>
            <div className="bg-white shadow-lg p-5 mt-5 mb-5 rounded-xl max-w-screen-lg mx-auto form">
                {/* <h2 className="text-4xl font-extrabold text-center text-black">Add Jobs</h2> */}
                <form onSubmit={handleAddProperty} >
                    {/* photo and title */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Property Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="photo url...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Property Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Title Here...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* location and agent name */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Property Locaton</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Locaton...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Agent Name</span>
                            </label>
                            <label className="input-group">
                                <input type="name" name="name" defaultValue={user?.displayName} readOnly placeholder="Agent Name Here....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* agent email and price */}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Agent Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Agent Email Here....." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Agent Image</span>
                            </label>
                            <label className="input-group">
                                <input type="photo" name="photo" defaultValue={user?.photoURL} readOnly  placeholder="Agent Email Here....." className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* price*/}
                    <div className="md:flex gap-4 mt-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Minimum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="minPrice" placeholder="Minimum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black-600">Maximum Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="maxPrice" placeholder="Maximum Price...." className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-black-600">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description Here...." className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Add Property" className="btn btn-outline border-0 border-b-4 mt-4 text-center mx-auto block text-xl" />
                </form>
            </div>
        </div>
    );
};

export default AddProperty;