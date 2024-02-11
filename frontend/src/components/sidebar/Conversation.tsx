import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '../ui/separator'

const Conversation = () => {
  return (
    <>
      <div className='flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex-col flex-1 fle'>
          <div className='flex justify-between gap-3'>
            <p className='font-bold text-gray-200'>JohnDoe</p>
            <span className='text-xl'>😁</span>
          </div>
        </div>
      </div>
      <Separator />
    </>
  )
}

export { Conversation }
