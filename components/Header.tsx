import Image from "next/image"
import { HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { BellIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon,Squares2X2Icon } from '@heroicons/react/20/solid'
import { signOut,useSession } from "next-auth/react"

import HeaderIcon from "./HeaderIcon"


function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">

      {/* Left side */}
      <div className="flex items-center">
        <Image
          alt="facebook"
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path className="text-gray-600" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            className=" items-center ml-2 outline-none bg-transparent placeholder:bg-gray-100 hidden md:inline-flex mr-5 "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Middle side */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-4">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>


      {/* Right side */}
      <div className="flex items-center sm:space-x-2 ml-5 justify-end">
        {/* profile pic */}
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          alt="profile picture"
          src={session!.user!.image!}
          width="40"
          height="40"
          layout="fixed"
        />

        <p className="pr-3 font-semibold whitespace-nowrap hidden sm:inline-flex">{session?.user?.name}</p>
        <Squares2X2Icon className="icon"/>
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>

    </div>
  )
}

export default Header