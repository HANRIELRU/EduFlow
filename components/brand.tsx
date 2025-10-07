import Image from 'next/image'
import Link from 'next/link'

export default function Brand() {
    return (
    <>
        <Link className={`grid grid-cols-[max-content_1fr] gap-x-2 rounded-xl border border-transparent mr-6 p-2 transition-colors hover:border-blue-100 hover:bg-blue-500/10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`} href="/">
                <Image className="row-span-2" src="/eduflow.svg" width={68} height={68} alt="Logo PMK"/>
                <span className="font-bold self-end">EduFlow</span>
                <span className="text-xs">Образование в движении</span>
        </Link>
    </>
    )
}