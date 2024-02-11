import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
      <Input className='rounded-full' type='text' placeholder='Search...' />
      <Button size={'sm'} className='rounded-full bg-sky-500'>
        <Search />
      </Button>
    </form>
  )
}
