function Card({ date, text, descr } : {date: string, text: string, descr: string}) {
    return (
        <>
          <article className="flex rounded-lg h-auto max-h-64 aspect-square overflow-hidden relative border border-transparent hover:border-blue-100 hover:bg-blue-500/10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

            <img className="w-full h-full absolute brightness-50 z-0" src="cat.jpg"></img>
            <div className="grid m-4 relative z-10 ">
              <span className="text-xs text-white">{date}</span>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a className="text-lg text-white font-bold">{text}</a>
                <p className="text-xs text-white">{descr}</p>
              </div>
            </div>
          </article>
        </>
    )
}

export default Card