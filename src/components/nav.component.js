import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SongsComponent from './songs.component';
import RoyaltiesComponent from './royalties.component';

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    render(){
        return (
            <div>
                <div>
                    <nav>
                        <div>
                            <div>
                                <a>Simple Getters</a>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/">Nav</a></li>
                                    <li><Link to={'/Songs/'}>Songs</Link></li>
                                    <li><Link to={'/Royalties/'}>Royalties</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Router>
                        <Route path={"SongsComponent"} component={SongsComponent}></Route>
                    </Router>
                    <Router>
                        <Route path={"RoyaltiesComponent"} component={RoyaltiesComponent}></Route>
                    </Router>
                </div>
            </div>
        );
    }

}

export default NavComponent