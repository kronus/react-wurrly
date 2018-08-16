import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SongsComponent from './songs.component'
import RoyaltiesComponent from './royalties.component'

const MainComponent = () => (
    <main>
        <Switch>
            <Route path='/Songs' component={SongsComponent}/>
            <Route path='/Royalties' component={RoyaltiesComponent}/>
        </Switch>
    </main>
)

export default MainComponent