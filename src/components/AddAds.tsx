import {BiSearchAlt} from 'react-icons/bi'
import * as Dialog from '@radix-ui/react-dialog'
function AddAds() {

  return (
    <div className='self-stretch bg-nlw-gradient pt-1 rounded-lg mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 rounded flex justify-between items-center'>
            <div>
            <strong className='text-xl font-bold block text-white'>Não encontrou seu duo?</strong>
            <span className='text-zinc-300 text-base'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.Trigger className='flex items-center gap-3 bg-violet-500 hover:bg-violet-700 py-3 px-4 rounded text-white'>
              <BiSearchAlt className='text-xl' />
              Publicar anúncio
            </Dialog.Trigger>
        </div>
      </div>
  )
}

export default AddAds