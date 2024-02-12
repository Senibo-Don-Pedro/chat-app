import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Message() {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <Avatar className='w-10 h-10'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hey whats up?</div>
      <div
        className={`chat-footer opacity-50 text-xs text-white flex gap-1 items-center`}
      >
        12:42pm
      </div>
    </div>
  )
}
