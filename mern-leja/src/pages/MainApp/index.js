import React from 'react'
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = () => {
    // menit 8.06, tutorial 10
    return (
        <div className="main-app-wrapper"> 
            <Header/>
            <Router>
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog/>
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default MainApp
