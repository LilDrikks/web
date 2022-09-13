import './styles/main.css'
import logo from './assets/logo.svg'
import {BiSearchAlt} from 'react-icons/bi'

function App() {


  return (
    <div className='max-w-[1345px] mx-auto flex items-center justify-center my-20 flex-col'>
      <img src={logo} alt='logo' />

      <h1 className='text-5xl text-white font-black my-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="" className='relative  rounded-lg overflow-hidden'>
          <img src="game1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>Dota 2</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>CS-GO</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>Fortnite</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
      </div>
      

      <div className='self-stretch bg-nlw-gradient pt-1 rounded-lg mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 rounded flex justify-between items-center'>
            <div>
            <strong className='text-xl font-bold block text-white'>Não encontrou seu duo?</strong>
            <span className='text-zinc-300 text-base'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className='flex items-center gap-3 bg-violet-500 hover:bg-violet-700 py-3 px-4 rounded text-white'>
              <BiSearchAlt className='text-xl' />
              Publicar anúncio
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
