import Image from "next/image"

function StroyCard({profile,src,name}:any) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3">
       <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full z-30 top-0 "
          src={profile}
          alt="Story profile"
          width={40}
          height={40}
      />
       <Image
          className="rounded-full object-cover filter brightness-75 lg:rounded-3xl"
          src={src}
          alt="Story User"
          fill
      />
      <p
        className="absolute bottom-5 hidden lg:inline-flex text-white"
      >
        {name}
      </p>
    </div>
  )
}

export default StroyCard