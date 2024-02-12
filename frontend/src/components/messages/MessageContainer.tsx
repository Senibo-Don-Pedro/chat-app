import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContainer = () => {
  const noChatSelected = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className='px-4 py-2 mb-2 bg-blue-200'>
            <span className='text-gray-500'>To:</span>{' '}
            <span className='font-bold text-gray-900'>John doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  )
}
