import React, { useEffect } from 'react'
import { Card, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getJobAds } from '../store/actions/jobAd/jobAdList';

export default function JobAdList() {
    const { JobAdsReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJobAds())
        // let jobAdService = new JobAdService()
        // jobAdService.getJobAds().then(result => setJobAds(result.data.data))
    }, [])

    return (
        <div>
            <Menu fluid vertical>
                <Menu.Item>
                    {
                        JobAdsReducer.isLoading ? <h1>YÜKLENİYOR...</h1> : JobAdsReducer.jobAds.map(jobAd => (
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
