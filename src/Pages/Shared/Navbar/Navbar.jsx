import { Link } from "react-router-dom";



const Navbar = () => {


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrolling(true);
    //         } else {
    //             setScrolling(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);




    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li> <Link to='/wishlist'>WishList</Link> </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <>
            {/* <div className={`flex top-0 left-0 right-0 ${navbarBackground} transition-all duration-300 `}> */}
            {/* <div className={`navbar ${scrolling ? 'bg-[#1a2d62]' : 'bg-slider-color'}`}> */}
            {/* fixed z-10 bg-opacity-70 text-white bg-black */}
            <div className="navbar fixed z-10 bg-opacity-70 text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">realEstate</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
