import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GenderCheckbox } from './GenderCheckbox'

export function Signup() {
  return (
    <Card className='w-full max-w-96'>
      <CardHeader>
        <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <form>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='full-name'>Full Name</Label>
            <Input id='full-name' type='text' required placeholder='John Doe' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' type='text' required placeholder='johndoe' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' required type='password' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='confirm-password'>Confirm Password</Label>
            <Input id='confirm-password' required type='password' />
          </div>
          <GenderCheckbox />
        </CardContent>
        <CardFooter className='flex flex-col'>
          <Button className='w-full'>Sign in</Button>
          <a href='' className='pt-3 mr-auto underline hover:text-blue-800 '>
            Already have an account?
          </a>
        </CardFooter>
      </form>
    </Card>
  )
}
