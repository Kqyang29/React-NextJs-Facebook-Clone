import InputBox from "./InputBox"
import Post from "./Post"
import Stories from "./Stories"

function Feed({posts}:any) {
  return (
    <div className="flex-grow scrollbar-hide h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto bg-slate-100">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* stories */}
        <Stories/>
        {/* Input Box  */}
        <InputBox/>
        {/* post */}
        <Post posts={posts} />
      </div>
    </div>
  )
}

export default Feed