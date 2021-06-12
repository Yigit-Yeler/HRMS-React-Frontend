import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import Filters from './Filters'
import JobAdList from '../pages/JobAdList'
import JobAdDetail from '../pages/JobAdDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Filters />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdList} />
                        <Route exact path="/jobads" component={JobAdList} />
                        <Route path="/jobads/:id" component={JobAdDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
