import { useEffect, useState } from "react"

function Test() {

    const [postId, setPostId] = useState(0)
    const [post, setPost] = useState(false)

    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır')

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))

        return () => {
            console.log('component destroyed')
        }
    }, [])

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //         .then(response => response.json())
    //         .then(data => setPost(data))
    // }, [postId])

    return (
        <div>
            <h3>{postId}</h3>
            {post && <div>{post.body}</div>}
            <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Konu</button>
            <hr />
            test component
        </div>
    )
}

export default Test