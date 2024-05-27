const Dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

// Añade tus días festivos aquí
const diasFestivos = [
  { mes: 0, dia: 1 }, // Año Nuevo
  { mes: 4, dia: 1 }, // Día del Trabajo
  { mes: 4, dia: 13 }, // Día de la Asención
  { mes: 11, dia: 25 } // Navidad
]

function esFestivo (mes: number, dia: number) {
  return diasFestivos.some(festivo => festivo.mes === mes && festivo.dia === dia)
}

function getCalendarItems () {
  const date = new Date()
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const calendarItems = []

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarItems.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarItems.push({
      dia: i,
      esFestivo: esFestivo(date.getMonth(), i)
    })
  }

  return calendarItems
}

function Programador () {
  const calendarItems = getCalendarItems()
  return (
    <section className='w-screen'>
      <header className='flex justify-around py-2 font-semibold bg-yellow-100'>
        {Dias.map(dia => <div key={dia}>{dia}</div>)}
      </header>
      <div className='grid grid-cols-7 bg-gray-200 place-items-center gap-1'>
        {calendarItems.map((item, index) => (
          <div key={index} className={`flex w-full py-16 justify-center ${(index % 7 === 0 && index !== 0) || (item && item.esFestivo) ? 'bg-red-200' : 'bg-blue-200'}`}>
            {item && item.dia === null ? ' - ' : item && item.dia}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Programador
