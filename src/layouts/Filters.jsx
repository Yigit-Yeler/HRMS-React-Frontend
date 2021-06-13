import React, { useState, useEffect } from 'react'
import { Input, Menu, Icon, Header, Dropdown } from 'semantic-ui-react'
import CityService from '../services/cityService'
import PositionService from '../services/positionService'

export default function Filters() {
    const [cities, setCities] = useState([])
    const [positions, setPositions] = useState([])
    let stateOptionsCities = [];
    let stateOptionsPositions = [];


    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => {
            result.data.data.map(city => {
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
            result.data.data.map(position => {
                stateOptionsPositions.push({
                    key: position.id,
                    text: position.positionName,
                    value: position.id
                })
            })
            setPositions(stateOptionsPositions)
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
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>
        </div>
    )
}
