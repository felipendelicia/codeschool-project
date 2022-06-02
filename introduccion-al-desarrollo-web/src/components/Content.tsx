import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';


const Content = () => {

    const [post, setPost] = useState("")

    useEffect(()=>{
        import(`../../../steps/Javascript/${"Javascript.md"}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
        })})

  return (
    <Markdown>
        {post}
    </Markdown>
  )
}

export default Content