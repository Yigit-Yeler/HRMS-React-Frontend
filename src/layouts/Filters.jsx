import React, { useState, useEffect } from 'react'
import { Input, Menu, Icon, Header, Dropdown } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CityService from '../services/cityService'
import JobAdService from '../services/jobAdService'
import PositionService from '../services/positionService'
import { getCompanies } from '../store/actions/company/company';

export default function Filters() {
    const { CompanyReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    const [cities, setCities] = useState([])
    const [positions, setPositions] = useState([])
    const [companies, setCompanies] = useState([])
    let stateOptionsCities = [];
    let stateOptionsPositions = [];
    let stateOptionsCompanies = [];


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => {
            result.data.data.forEach(city => {
                stateOptionsCities.push({
                    key: city.id,
                    text: city.cityName,
                    value: city.id
                })
            })
            setCities(stateOptionsCities)
        })
    }, [])

    useEffect(() => {
        let positionService = new PositionService()
        positionService.getPositions().then(result => {
            result.data.data.forEach(position => {
                stateOptionsPositions.push({
                    key: position.id,
                    text: position.positionName,
                    value: position.id
                })
            })
            setPositions(stateOptionsPositions)
        })
    }, [])

    useEffect(() => {
        dispatch(getCompanies())
        console.log(CompanyReducer.companies)
        let jobAdService = new JobAdService()
        jobAdService.getJobAds().then(result => {
            result.data.data.forEach(jobAd => {
                stateOptionsCompanies.push({
                    key: jobAd.id,
                    text: jobAd.companyName,
                    value: jobAd.id
                })
            })
            setCompanies(stateOptionsCompanies)
        })
    }, [])


    return (
        <div>
            <Menu pointing vertical >
                <Menu.Item >

                    <Input
                        icon={<Icon name='search' inverted circular link />}
                        placeholder='Search...'
                    />
                    <br /><br /><br />
                    <Header as='h4' textAlign="left">
                        <Header.Content>Şehire Göre Ara</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='Şehir' search selection options={cities} clearable onChange />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content>Pozisyona Göre Ara</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection options={positions} />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content>Şirkete Göre Ara</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection options={companies} />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>
        </div>
    )
}
