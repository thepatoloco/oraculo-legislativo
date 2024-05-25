import React from 'react'
import styles from './page.module.css'
import CardExplorer from '@/components/cardExplorer/CardExplorer'

const iniciativas = [
  {
    title: "prueba 1",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 4",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 1",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
  {
    title: "prueba 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    political_party: "test",
    date: '13/03/2024'
  },
]

const ExplorerPage = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className={styles.title}>
          Iniciativas
        </h1>
        <div className='flex justify-center'>
          <div className="flex flex-wrap justify-start gap-4 w-3/4">
            {iniciativas.map((iniciativa, index) => (
              <CardExplorer
                key={index}
                title={iniciativa.title}
                description={iniciativa.description}
                political_party={iniciativa.political_party}
                date={iniciativa.date}
              />
            ))}
          </div>

        </div>


      </div>
    </>
  )
}

export default ExplorerPage;