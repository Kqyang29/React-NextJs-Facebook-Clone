import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRef, useState } from "react";
import { VideoCameraIcon,FaceSmileIcon,CameraIcon} from '@heroicons/react/24/solid'
import { db, storage } from '../firebase';
import firebase from "firebase/compat/app";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef<any>(null);
  const filePickerRef = useRef<any>(null);
  const [imagePost, setImagePost] = useState<any>(null);

  const sendPost = (e:any) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then((doc) => {
      if (imagePost) {
        // funky upload stuff for image
        const uploadTask = storage.ref(`posts/${doc.id}`).putString(imagePost, "data_url");
        
        removeImage();

        uploadTask.on('state_change', null, error => console.error(error), () => {
          // upload compelete
          storage.ref(`posts/${doc.id}`).getDownloadURL().then(url => {
            db.collection('posts').doc(doc.id).set({
              postImage:url
            },{merge:true});
          })
        });
      
      }
    });

    inputRef.current.value = "";
  }

  const addImageToPost = (e:any) => {
    e.preventDefault();
    const reader = new FileReader();


    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagePost(readerEvent.target?.result);
    }

  }

  const removeImage = () => {
    setImagePost(null);
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session!.user!.image!}
          alt="InputBox user"
          width={40}
          height={40}
          layout='fixed'
        />
        
        <form className="flex flex-1">
        <input
          className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
          placeholder={`what's on your mind, ${session?.user?.name}?`}
        />

          <button
            className="hidden"
            type="submit"
            onClick={sendPost}
          >
            Submit
          </button>
      </form>

        {imagePost && (
          <div className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <Image
              src={imagePost}
              alt="post image"
              height={60}
              width={60}
              onClick={removeImage}
              className="object-contain"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 items-center border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={()=>filePickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>

      </div>
    </div>
  )
}

export default InputBox