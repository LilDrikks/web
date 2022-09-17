interface Game {
    title: string;
    bannerUrl: string;
    ads: number;
}

function BannerGame(game: Game) {
  return (
    <a href="" className='relative  rounded-lg overflow-hidden'>
          <img src={game.bannerUrl} alt={game.title} />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold block text-white'>{game.title}</strong>
            <span className='text-zinc-300 text-sm'>{game.ads} anúncio(s)</span>
          </div>
        </a>
  )
}

export default BannerGame