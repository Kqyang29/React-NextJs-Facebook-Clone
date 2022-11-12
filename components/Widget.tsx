import { VideoCameraIcon,MagnifyingGlassIcon,EllipsisHorizontalIcon} from "@heroicons/react/24/solid";
import Contacts from "./Contacts";

const contacts = [
  { src:"https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src:"https://links.papareact.com/kxk", name: "Elon Musk" },
  { src:"https://links.papareact.com/zvy", name: "Bill Gates" },
  { src:"https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src:"https://links.papareact.com/d0c", name: "Harry Potter" },
  { src:"https://links.papareact.com/6gg", name: "The King" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
  
]
function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 h-screen overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6"/>
        </div>
      </div>

      {contacts.map(contact => (
        <Contacts
          key={contact.name}
          src={contact.src}
          name={contact.name}
        />
      ))}
    </div>
  )
}

export default Widget