import { Separator } from '../ui/separator'
import { Conversations } from './Conversations'
import { LogoutButton } from './LogoutButton'
import { SearchInput } from './SearchInput'

export function Sidebar() {
  return (
    <div className='flex flex-col p-4 border-r border-slate-400'>
      <SearchInput />
      <Separator className='mt-2' />
      <Conversations />
      <LogoutButton />
    </div>
  )
}
