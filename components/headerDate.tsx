'use client'

import { useEffect } from "react";

 
export default function HeaderDate() {

    var date = new Date();
    let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    return (
        <>
        <span className="text-[14px] cursor-pointer" id="date">{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}<br/>{daysOfWeek[date.getDay()-1]}</span>
        </>
    )
}
