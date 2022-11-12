import { useSession } from "next-auth/react"
import {ChevronDownIcon,ShoppingBagIcon,UserGroupIcon} from '@heroicons/react/24/outline'
import {CalendarIcon,ClockIcon,ComputerDesktopIcon,UserIcon} from '@heroicons/react/24/solid'
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session,status } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] h-screen overflow-y-auto scrollbar-hide">
      <SidebarRow src={session!.user!.image} title={session!.user!.name} />
      <SidebarRow Icon={UserGroupIcon} title="Friends" />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar