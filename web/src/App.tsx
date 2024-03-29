import { useState, useEffect } from 'react'
import axios from 'axios'

import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([]) //typescript generics

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])//array de dependências

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Sua <span className='text-transparent bg-nlw-gradient bg-clip-text'>dupla</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mx-16 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}