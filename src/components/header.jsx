export default function Header() {
    return (
        <header className="flex items-center justify-center gap-4 shadow-lg bg-[#7289da] px-6 py-3 h-[80px]">
            <img
                src="src/components/gearpng.parspng.com-7.png"
                alt="GradGearIcon"
                className="h-[60px] w-[60px] object-contain transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-[40px] text-[#FAF9F6] font-extrabold tracking-wide font-sans drop-shadow-md">
                GradGear
            </h1>
        </header>
    )
}
