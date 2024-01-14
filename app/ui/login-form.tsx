'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { Button } from './button'

export default function LoginForm() {
  return (
    <form>
      <div>
        <h1>Please log in to continue</h1>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={8}
            />
          </div>
        </div>
        <LoginButton />
      </div>
    </form>
  )
}

function LoginButton() {
  return <Button>Log in </Button>
}
