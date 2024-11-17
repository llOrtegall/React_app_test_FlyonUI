import { useState } from 'react'
import { AreaChart, TooltipProps } from './components/ui/AreaChart'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { DonutChart } from './components/ui/DonutChart'

import { useTheme } from './context/ThemeProvider'
import { DonutChartCallbackExample } from './components/DonutColors'

const chartdata = [
  {
    date: 'Jan 23',
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: 'Feb 23',
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: 'Mar 23',
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: 'Apr 23',
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: 'May 23',
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: 'Jun 23',
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: 'Jul 23',
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: 'Aug 23',
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: 'Sep 23',
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: 'Oct 23',
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: 'Nov 23',
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: 'Dec 23',
    SolarPanels: 3239,
    Inverters: 3736,
  },
]
const chartdata2 = [
  {
    name: 'SolarCells',
    amount: 4890,
  },
  {
    name: 'Glass',
    amount: 2103,
  },
  {
    name: 'JunctionBox',
    amount: 2050,
  },
  {
    name: 'Adhesive',
    amount: 1300,
  },
  {
    name: 'BackSheet',
    amount: 1100,
  },
  {
    name: 'Frame',
    amount: 700,
  },
  {
    name: 'Encapsulant',
    amount: 200,
  },
]

interface DataItem {
  date: string
  revenue: number
}

const data: DataItem[] = [
  {
    date: 'Jan 23',
    revenue: 2340,
  },
  {
    date: 'Feb 23',
    revenue: 3110,
  },
  {
    date: 'Mar 23',
    revenue: 4643,
  },
  {
    date: 'Apr 23',
    revenue: 4650,
  },
  {
    date: 'May 23',
    revenue: 3980,
  },
  {
    date: 'Jun 23',
    revenue: 4702,
  },
  {
    date: 'Jul 23',
    revenue: 5990,
  },
  {
    date: 'Aug 23',
    revenue: 5700,
  },
  {
    date: 'Sep 23',
    revenue: 4250,
  },
  {
    date: 'Oct 23',
    revenue: 4182,
  },
  {
    date: 'Nov 23',
    revenue: 3812,
  },
  {
    date: 'Dec 23',
    revenue: 4900,
  },
]

function App() {
  const { toggleDarkMode } = useTheme()

  const [datas, setDatas] = useState<TooltipProps | null>(null)

  const currencyFormatter = (number: number) =>
    `$${Intl.NumberFormat('us').format(number)}`

  const payload = datas?.payload?.[0]
  const value = payload?.value ?? 0

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(data[data.length - 1].revenue)


  return (
    <section className='dark:bg-slate-900 h-screen w-screen p-2'>

      <Card className='flex justify-around'>
        <Button onClick={toggleDarkMode}>
          Button
        </Button>

        <Button isLoading>Primary</Button>

        <Button isLoading loadingText='Loading text'>
          Primary
        </Button>

      </Card>

      <Card className='flex'>
        <div className='w-1/2'>
          <AreaChart
            className='h-80 dark:text-white'
            data={chartdata}
            index='date'
            categories={['SolarPanels', 'Inverters']}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat('us').format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>

        <div className='w-1/2'>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            Revenue by month
          </p>
          <p className='mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50'>
            {formattedValue}
          </p>

          <AreaChart
            data={data}
            index='date'
            categories={['revenue']}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className='-mb-2 mt-8 h-48'
            tooltipCallback={(props) => {
              if (props.active) {
                setDatas((prev) => {
                  if (prev?.label === props.label) return prev
                  return props
                })
              } else {
                setDatas(null)
              }
              return null
            }}
          />
        </div>

      </Card>

      <Card className='flex'>
        <DonutChartCallbackExample />

        <DonutChart
          className='mx-auto'
          data={chartdata2}
          category='name'
          value='amount'
          showLabel={true}
          valueFormatter={(number: number) =>
            `$${Intl.NumberFormat('us').format(number).toString()}`
          }
        />
        <DonutChart
          className='mx-auto'
          variant='pie'
          data={chartdata2}
          category='name'
          value='amount'
          showLabel={true}
          valueFormatter={(number: number) =>
            `$${Intl.NumberFormat('us').format(number).toString()}`
          }
        />

      </Card>

    </section>
  )
}

export default App
