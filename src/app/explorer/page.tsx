import React from 'react'
import styles from './page.module.css'
import CardExplorer from '@/components/cardExplorer/CardExplorer'
import { db } from '@/utils/db'

const iniciativas = [
  {
    id: "not found",
    title: "Hello world, this is a weird test",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "PRI",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "PAN",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "PRD",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 4",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "PVEM",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 1",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "MC",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "PT",
    date: '13/03/2024'
  },
  {
    id: "not found",
    title: "prueba 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    party: "Morena",
    date: '13/03/2024'
  },
]

const ExplorerPage = async () => {
  const initiatives = await db.initiative.findMany();

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className={styles.title}>
          Iniciativas
        </h1>
        <div className='flex justify-center'>
          <div className="flex flex-wrap justify-start gap-4 w-3/4">
            {initiatives.map((iniciativa, index) => (
              <CardExplorer
                key={index}
                id={iniciativa.id}
                title={iniciativa.title}
                description={iniciativa.description}
                political_party={iniciativa.party}
              />
            ))}
          </div>

        </div>


      </div>
    </>
  )
}

export default ExplorerPage;