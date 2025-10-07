import Card from "@/components/card";
import { Key } from "react";


export default async function Home()  {

  return (
    <>
      <div className="flex justify-between mt-8 mb-4">
        <h2 className="text-lg font-bold">Расписание</h2>
        <a className="text-xs" href="/all">Сформировано {}</a>
      </div>
      <section className="grid grid-cols-[1fr_1fr_1fry] gap-8">
        {/* { schedule.map((group : { pairs : string, date: string, startAt : string, group_id : { id: number, label : string } }) => (
            <article key={group.group_id.id} className="flex rounded-lg h-auto overflow-hidden relative border dark:border-neutral-700 hover:border-blue-100 hover:bg-blue-500/10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div className="grid gap-1 m-4 relative z-10 ">
              <span className="text-lg font-bold">
                {group.group_id.label}
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 float-right">{group.startAt}</span>
              </span>
              { JSON.parse(group.pairs).map((pair: { number: number, aud: number, teacher: string, label: string }) => (
                <div key={group.group_id.id + "_" + pair.number}>
                  <div className="grid grid-rows-1 grid-flow-col items-center gap-4 mt-auto">
                    <p className="text-sm font-bold">{pair.number}</p>
                    <p className="text-sm">{pair.label}</p>
                  </div>
                  <a className="flex text-sm gap-2 justify-end">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{pair.teacher}</span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{pair.aud}</span>
                  </a>
                </div>
              ))}
            </div>
          </article>
        ))} */}
      </section>

      <div className="flex justify-between mt-8 mb-4">
        <h2 className="text-lg font-bold">Мероприятия</h2>
        <a className="text-xs" href="/all">См. ещё</a>
      </div>

      <section className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-8">
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:30"
          text="Разговоры о важном"
          descr="Ответственные: Кураторы групп"
          />
        <Card
          date="ВТ 6 февраля 2024"
          text="Малый педагогический совет в группе ТКПД-2021-1 (240а)"
          descr="Ответственные: Поспелова&nbsp;И.А., Чебан&nbsp;Ж.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
        <Card
          date="ПН 5 февраля 2024 08:29"
          text="Церемония поднятия Государственного флага РФ ТКПД-2023-1, ТМС-2023-3/6, ЭКТ-2023-1"
          descr="Ответственные: Приказчиков&nbsp;И.В."
        />
      </section>

      {/* <section className="section__cards">
        <article className="card">
          <div className="card__container">
            <h3>95%</h3>
            <i>уровень трудоустройства выпускников спустя пол года после окончания колледжа</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>16 тыс.</h3>
            <i>выпускников основных образовательных программ</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>50</h3>
            <i>преподавателей и исследователей</i>
          </div>
        </article>
        <article className="card">
          <div className="card__container">
            <h3>>5 тыс.</h3>
            <i>выпускников ДПО</i>
          </div>
        </article>
      </section> */}
    </>
  );
}