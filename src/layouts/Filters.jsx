import React from 'react'
import { Input, Menu, Icon, Header, Dropdown } from 'semantic-ui-react'

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
                        <Header.Content>Şehire Göre Ara</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content>Yeteneğe Göre Ara</Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                    <Header as='h4' textAlign="left">
                        <Header.Content></Header.Content>
                    </Header>
                    <Menu.Menu>
                        <Dropdown placeholder='State' search selection />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>
        </div>
    )
}
