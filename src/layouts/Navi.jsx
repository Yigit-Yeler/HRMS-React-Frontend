import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="Human Resource Management System" />

                    <Menu.Menu position="right">
                        <SignedOut />
                        <SignedIn />
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
