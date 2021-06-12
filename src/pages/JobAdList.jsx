import React, { useState, useEffect } from 'react'
import { Card, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import JobAdService from '../services/jobAdService'

export default function JobAdList() {

    const [jobads, setJobAds] = useState([])

    useEffect(() => {
        let jobAdService = new JobAdService()
        jobAdService.getJobAds().then(result => setJobAds(result.data.data))
    }, [])

    return (
        <div>
            <Menu fluid vertical>
                <Menu.Item>
                    {
                        jobads.map(jobAd => (
                            <Link to={`/jobads/${jobAd.id}`}>
                                <Card
                                    style={{ marginTop: '2em' }}
                                    key={jobAd.id}
                                    fluid
                                    header={jobAd.position.positionName}
                                    meta={jobAd.companyName}
                                    description={jobAd.description}
                                />
                            </Link>
                        ))
                    }
                </Menu.Item>
            </Menu>

        </div>
    )
}
