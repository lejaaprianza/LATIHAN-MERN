import React from 'react'
import {BlogItem, Button, Gap} from "../../components";
import './home.scss'
// tutorial 11, menit 2.50
const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog"/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
                <Gap height={20}/>

        </div>
    )
}

export default Home
