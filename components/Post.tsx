import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import PostData from './PostData';


function Post({posts}:any) {

  const [realtimePosts, loading, error] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc') as any
  );

  return (
    <div>
      {realtimePosts?
        realtimePosts?.docs.map(post => (
        <PostData
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}

        />
        )) : (
          posts.map((post:any) => (
            <PostData
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
  
            />
          ))
      )}
    </div>
  )
}

export default Post