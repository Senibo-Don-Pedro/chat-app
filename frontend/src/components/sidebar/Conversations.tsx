import { Conversation } from './Conversation'

export function Conversations() {
  return (
    <div className='flex flex-col py-2 overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}
