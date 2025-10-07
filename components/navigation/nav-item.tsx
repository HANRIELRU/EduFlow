import Link from "next/link"

function NavItem({ label, link, icon }: { label: string, link: string, icon: string }) {
    return (
        <>
            <Link className="flex items-center h-12 pl-3.5 rounded-xl border border-transparent mr-6 p-2 transition-colors hover:border-blue-100 hover:bg-blue-500/10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href={link}>
            <i className={`inline-flex mr-2.5 ${icon}`}></i>
            <span>{label}</span>
            </Link>
            {/* <div className="bottom-0 pointer h-6 mb-auto mt-auto absolute right-3 top-0 w-6">
                <span>
                    <i className="icons-catmore"></i>
                </span>
            </div> */}
        </>
    )
}

export default NavItem