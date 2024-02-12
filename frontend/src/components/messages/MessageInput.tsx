import { Send } from 'lucide-react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='relative w-full'>
        <input
          className='border text-wrap text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-600 text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='absolute inset-y-0 flex items-center end-0 pe-3 text-black/40'
        >
          <Send />
        </button>
      </div>
    </form>
  )
}
export default MessageInput
