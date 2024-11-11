'use client'
import { Button, TextField } from '@mui/material'

const SignIn = ({ onSignUpClick }: { onSignUpClick?: () => void }) => {
  return (
    <div className='w-[60%] m-0 p-8'>
      <form>
        <div>
          <TextField placeholder='Email' fullWidth />
        </div>
        <div className='mt-2'>
          <TextField placeholder='Password' type='password' fullWidth />
        </div>
        <div className='mt-2'>
          <Button variant='contained'>Sign In</Button>
          <Button
            sx={{ ml: 1 }}
            variant='text'
            onClick={() => onSignUpClick?.()}
          >
            Or, sign up
          </Button>
        </div>
      </form>
    </div>
  )
}

const SignInUp = () => {
  return (
    <div className='h-full flex justify-center items-center'>
      <SignIn />
    </div>
  )
}

export default SignInUp
