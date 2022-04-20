import { signOut } from "next-auth/react"

export default function Navbar() {
  return (
    <nav>
      <button onClick={signOut}>sign out</button>
    </nav>
  )
}