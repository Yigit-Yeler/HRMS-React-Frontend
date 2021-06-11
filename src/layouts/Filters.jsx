import React from 'react'
import { Input, Menu, Icon, Container, Header, Dropdown, DropdownItem } from 'semantic-ui-react'

export default function Filters() {
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
                        <Header.Content>Uptime Guarante</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content>Uptime Guarante</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content>Uptime Guarantee</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>
        </div>
    )
}
