import Image from "next/image"
import {HandThumbUpIcon,ChatBubbleBottomCenterIcon,ShareIcon} from '@heroicons/react/24/outline'

function PostData({name,image,email,postImage,message,timestamp}:any) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">

        {/* post user info */}
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            alt="image"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div >
            <p>{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
                <p className="text-xs text-gray-400">
                 Loading
                </p>
            )}
           
          </div>
        </div>

        {/* post content */}
        <p className="pt-4">
          {message}
        </p>

      </div>

      {/* post image */}
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            alt="postImage"
            className="object-fill"
            layout="fill"
          />
        </div>
      )}

      {/* footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ChatBubbleBottomCenterIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>

    </div>
  )
}

export default PostData