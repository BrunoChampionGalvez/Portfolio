import "./Navbar.css"

function Navbar() {
    return (
        <div className="fixed min-w-[100vw] top-0 right-0 flex justify-end mb-10 bg-white h-16 items-center gap-10 shadow-md pr-10 font-bold text-gray-800">
            <a className="nav-item cursor-pointer">Home</a>
            <a className="nav-item cursor-pointer">Contact</a>
            <a className="nav-item cursor-pointer">CV</a>
            <a className="nav-item cursor-pointer">Blog</a>
        </div>
    )
}

export default Navbar