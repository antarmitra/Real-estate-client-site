// import cover from '../../../../assets//banner/img6.jpg'
import './Offer.css'

const Offer = ({data}) => {
    const {title, location, name} = data;
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row login shadow-2xl">
                {/* <div className="w-1/2 mr-12">
                    <img src={cover} alt="" />
                </div> */}
                <div className=" ">
                    <h1 className="text-4xl text-center font-bold">Login</h1>
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Property-Tile</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="name here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Property-Location</span>
                            </label>
                            <input type="text" name="title" defaultValue={location} placeholder="location here...." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Agent-Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="agent name here...." className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input  className="btn text-xl text-white bg-[#d1a054b2]" type="submit" value="Login" />
                        </div>
                        {/* google sign in */}
                       
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default Offer;