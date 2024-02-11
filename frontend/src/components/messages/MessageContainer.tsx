import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
        {/* Header */}
        <div className='px-4 py-2 mb-2 bg-blue-200'>
          <span className='text-gray-500'>To:</span>{' '}
          <span className='font-bold text-gray-900'>John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  )
}
export default MessageContainer
