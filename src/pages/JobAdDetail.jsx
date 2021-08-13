import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getJobAdById } from '../store/actions/jobAd/jobAdById';

export default function JobAdDetail() {
    const { JobAdReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    const { id } = useParams();

    useEffect(() => {
        dispatch(getJobAdById(id))
        console.log(JobAdReducer.jobAd)
        // let jobAdService = new JobAdService()
        // jobAdService.getJobAdById(id).then(result => { setJobAd(result.data.data) })
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    {JobAdReducer.isLoading ? (<h1>YÜKLENİYOR...</h1>) : (
                        <Card.Content>
                            <Image
                                style={{ marginBottom: '3em' }}
                                size='medium'
                                src='https://galeri8.uludagsozluk.com/498/killua-zoldyck_808025_m.jpg'
                            />
                            <Card.Header>{JobAdReducer.jobAd.position.positionName}</Card.Header>
                            <Card.Meta>{JobAdReducer.jobAd.companyName}</Card.Meta>
                            <Card.Description>
                                {JobAdReducer.jobAd.description}
                            </Card.Description>
                        </Card.Content>
                    )}

                </Card>
            </Card.Group>
        </div>
    )
}
