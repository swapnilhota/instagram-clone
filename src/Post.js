import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase'

function Post({ postId, username, caption, imageUrl }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => ))
                })
        }
        return () => {
            unsubscribe();
        }
    }, [postId])

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="swapnil"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            <img className="post__image" src={imageUrl} alt="" />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
