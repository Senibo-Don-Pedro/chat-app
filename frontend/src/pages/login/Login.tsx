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

export function Login() {
  return (
    <Card className='w-full max-w-96'>
      <CardHeader>
        <CardTitle className='text-2xl text-center'>Login</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <form>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Username</Label>
            <Input id='username' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' required type='password' minLength={5} />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col'>
          <Button className='w-full'>Sign in</Button>
          <a href='' className='pt-3 mr-auto underline hover:text-blue-800 '>
            Don't Have an account?
          </a>
        </CardFooter>
      </form>
    </Card>
  )
}
