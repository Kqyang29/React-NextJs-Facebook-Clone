
function HeaderIcon({ Icon, active }: any) {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 md:active:border-b-2 md:active:border-blue-500 group">
      <Icon className={`h-6 text-gray-500 sm:h-7 text-center mx-auto group-hover:text-blue-600 ${active && 'text-blue-600'}`} />
    </div>
  )
}

export default HeaderIcon