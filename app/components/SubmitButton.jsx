'use client'
import { useFormStatus } from 'react-dom';
 
export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button className="px-5 py-2 rounded-lg text-sm text-foreground bg-background hover:opacity-80 font-semibold transition" type="submit" aria-disabled={pending}>
      Create Account
    </button>
  )
}