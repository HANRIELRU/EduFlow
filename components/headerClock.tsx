'use client'

import { useEffect, useState } from "react";

 
export default function HeaderClock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
          }, 1000);
          return () => clearInterval(interval);
    }, [date])

  return (
    <>
    <span className="w-20 font-bold text-[32px] cursor-pointer" id="time">{date.getHours().toString().padStart(2, '0')}<span className="blink_me">:</span>{date.getMinutes().toString().padStart(2, '0')}</span>

    </>
  )
}
