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
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Signup() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

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
            <Input
              id='full-name'
              type='text'
              required
              placeholder='John Doe'
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  fullName: e.target.value,
                })
              }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' type='text' required placeholder='johndoe'
            value={inputs.username}
            onChange={(e) =>
              setInputs({
                ...inputs,
                username: e.target.value,
              })
            }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' required type='password'
            value={inputs.password}
            onChange={(e) =>
              setInputs({
                ...inputs,
                password: e.target.value,
              })
            }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='confirm-password'>Confirm Password</Label>
            <Input id='confirm-password' required type='password' />
          </div>
          <GenderCheckbox />
        </CardContent>
        <CardFooter className='flex flex-col'>
          <Button className='w-full'>Sign in</Button>
          <Link
            to='/login'
            className='pt-3 mr-auto underline hover:text-blue-800 '
          >
            Already have an account?
          </Link>
        </CardFooter>
      </form>
    </Card>
  )
}
