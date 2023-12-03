import img from '../../../assets/logo/estate.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-base-content">
                <aside className="text-white lg:ml-0 md:ml-0 ml-20">
                    <img className='w-40 h-20' src={img} alt="" />
                    <p className='md:text-start text-center'>Sky Line Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>

             
                    <nav className="text-white">
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="text-white">
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="text-white">
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
               

            </footer>
            <div className="footer-center p-4 bg-black md:text-lg text-xs  text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by realEstate Industries Ltd</p>
                </aside>
            </div >
        </div>
    );
};

export default Footer;