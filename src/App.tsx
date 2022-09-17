import './styles/main.css';
import logo from './assets/logo.svg';
import BannerGame from './components/BannerGame';
import { useEffect, useState } from 'react';
import AddAds from './components/addAds';
import * as Dialog from '@radix-ui/react-dialog'
import { TbDeviceGamepad2 } from 'react-icons/tb'

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(data => setGames(data))
    
  }, [])

  return (
      <div className='max-w-[1345px] mx-auto flex items-center justify-center my-20 flex-col'>

        <img src={logo} alt='logo' />

        <h1 className='text-5xl text-white -black my-20'>
          Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui
        </h1>

        <div className='grid grid-cols-6 gap-6'>
          {games.map(game => <BannerGame key={game.id} title={game.title} bannerUrl={game.bannerUrl} ads={game._count.ads}/>)}
        </div>
      
        <Dialog.Root>
          <AddAds />
        
          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/50 inset-0 fixed' />
            
            <Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2634] py-8 px-10 text-white w-[480px] shadow-black/25 rounded'>
              <Dialog.Title className='text-3xl font-bold mb-8'>
                Publique um anúncio
              </Dialog.Title>
              <Dialog.Content>
                <form className='grid' action="">
                  <label className='font-semibold' htmlFor="gameName" >Qual o game?</label>
                  <input className='mb-4 rounded-[6px] w-full h-12 bg-zinc-900 text-[12px] p-4 mt-2' id="gameName" type="text" placeholder="Selecione o game que deseja jogar" />

                  <label className='font-semibold' htmlFor="nickName" >Seu nome (ou nickname)</label>
                  <input className='mb-4 rounded-[6px] w-full h-12 bg-zinc-900 text-[12px] p-4 mt-2' id="nickName" type="text" placeholder="Como te chamam dentro do game?" />

                  <div className='flex'>
                    <div>
                      <label className='font-semibold' htmlFor="yearsPlaying">Joga há quantos anos?</label>
                      <input className='w-48 h-12 rounded-[6px] bg-zinc-900 text-[12px] p-4 mt-2 text-zinc-600' type="number" id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
                    </div>
                    <div>
                      <label className='font-semibold' htmlFor="discord">Qual seu Discord?</label>
                      <input className='w-48 h-12 rounded-[6px] bg-zinc-900 text-[12px] p-4 mt-2' type="text" id="discord" placeholder='Usuario#0000' />
                    </div>
                  </div>

                  <div className='flex justify-between mt-4'>
                    <div>
                      <label className='font-semibold' htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label className='font-semibold' htmlFor="hours">Qual horário do dia?</label>
                      <div className='flex gap-2 pt-2'>
                        <input className='h-12 w-20 bg-zinc-900 text-sm p-4 rounded-[6px]' type="time" id='hourStart' />
                        <input className='h-12 w-20 bg-zinc-900 text-sm p-4 rounded-[6px]' type="time" id='hourEnd' />
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <input type="checkbox" name="voice"/>
                    Costumo me conectar ao chat de voz?
                  </div>

                  <footer className='flex justify-end gap-2 mt-8'>
                    <button className='h-12 p-4 flex items-center bg-zinc-500 rounded-[6px] font-semibold'>Cancelar</button>
                    <button className='h-12 p-4 flex items-center gap-3 bg-violet-500 rounded-[6px] font-semibold' type='submit'>
                      <TbDeviceGamepad2 className='text-2xl' />
                      Encontrar Duo
                    </button>
                  </footer>
                </form>
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
  )
}

export default App
