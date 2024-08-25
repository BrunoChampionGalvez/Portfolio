function Navbar() {
    return (
        <div className="flex justify-end mb-10 bg-white h-16 items-center gap-10 shadow-md pr-10 font-bold text-gray-800">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Contact</a>
            <a className="cursor-pointer">CV</a>
            <a className="cursor-pointer">Blog</a>
        </div>
    )
}

export default Navbar