import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <div className="p-4 pr-7 flex justify-between items-center">
                <img className="w-24" src="https://res.cloudinary.com/dyddnbt5h/image/upload/v1725759047/firma_logo_ujsnwz.png" alt="Signature logo" />
                <div>
                    <div className="hamburger-line bg-gray-700"></div>
                    <div className="hamburger-line bg-gray-700"></div>
                    <div className="hamburger-line bg-gray-700"></div>
                </div>
            </div>
            <div className="hidden sm:block fixed min-w-[100vw] top-0 left-0 justify-end mb-10 bg-white h-16 items-center gap-10 shadow-md pr-10 font-bold text-gray-800 z-20">
                <div>
                    <a className="nav-item cursor-pointer">Home</a>
                    <a className="nav-item cursor-pointer">Contact</a>
                    <a className="nav-item cursor-pointer">CV</a>
                    <a className="nav-item cursor-pointer">Blog</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar