import HeaderClock from './headerClock'
import HeaderDate from './headerDate'
import Image from 'next/image'
import { auth, signOut } from '@/auth';
import { Button } from './ui/button';
import { ModeToggle } from './modeToggle';
import UserNav from './user-nav';

export default async function Header() {
  // const session = await auth()
  // if (!session?.user) return null

  return (
    <>
      <header className="flex gap-x-8 justify-between items-center">
          <input className="grow rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm ml-0.5" placeholder="Поиск по порталу"></input>
          <HeaderDate/>
          <HeaderClock/>
          <ModeToggle></ModeToggle>
          <UserNav/>
      </header>
    </>
  )
}