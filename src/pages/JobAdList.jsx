import React from 'react'
import { Card, Menu } from 'semantic-ui-react'
export default function JobAdList() {
    return (
        <div>
            <Menu fluid vertical>
                <Menu.Item>
                    <Card fluid
                        href='#card-example-link-card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                    <Card fluid
                        href='#card-example-link-card'
                        header='Elliot Baker'
                        meta='Friend'
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    />
                </Menu.Item>
            </Menu>

        </div>
    )
}
