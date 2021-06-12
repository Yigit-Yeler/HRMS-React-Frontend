import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import JobAdService from '../services/jobAdService'

export default function JobAdDetail() {

    const { id } = useParams();

    const [jobad, setJobAd] = useState({ position: { positionName: null } })

    useEffect(() => {
        let jobAdService = new JobAdService()
        jobAdService.getJobAdById(id).then(result => { setJobAd(result.data.data) })
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            style={{ marginBottom: '3em' }}
                            size='medium'
                            src='https://galeri8.uludagsozluk.com/498/killua-zoldyck_808025_m.jpg'
                        />
                        <Card.Header>{jobad.position.positionName}</Card.Header>
                        <Card.Meta>{jobad.companyName}</Card.Meta>
                        <Card.Description>
                            {jobad.description}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
