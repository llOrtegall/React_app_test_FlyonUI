function Programador () {
  const Dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const date = new Date()

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const calendarItems = []

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarItems.push(<div key={`empty-${i}`} />)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarItems.push(
      <div key={`day-${i}`} className='flex w-full bg-blue-100 py-16 justify-center'>
        {i}
      </div>
    )
  }

  return (
    <section className='w-screen'>
      <div className='flex font-semibold justify-around bg-green-100 py-2'>
        {Dias.map((dia, index) => (
          <div key={index}>{dia}</div>
        ))}
      </div>
      <div className='grid grid-cols-7 bg-gray-200 place-items-center gap-1'>
        {calendarItems}
      </div>
    </section>
  )
}

export default Programador
