import React from 'react'
import { useHistory } from 'react-router-dom'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item">
                <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
            <p className="title">Title Blog</p>
            <p className="author">Author - Date post</p>
            <p className="body">Loerm ipsum</p>
            <Gap height={20}/>
            <Button title="View Detail" onClick={()=> history.push('/detail-blog')}/>
        </div>
        </div>
    )
}

export default BlogItem
