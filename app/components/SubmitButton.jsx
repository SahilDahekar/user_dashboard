//Defining client-side component
'use client'
// Importing the 'useFormStatus' hook from 'react-dom'
import { useFormStatus } from 'react-dom';
 
export default function SubmitButton() {
  // Destructuring 'pending' state from the 'useFormStatus' hook
  const { pending } = useFormStatus()
  return (
    // Render the submit button with conditional styles and attributes
    <button className="px-5 py-2 rounded-lg text-sm text-foreground bg-background hover:bg-opacity-90 font-semibold transition" type="submit" aria-disabled={pending}>
      Create Account
    </button>
  )
}