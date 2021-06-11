import React from 'react'
import { Dropdown, DropdownItem, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image
                    avatar spaced="right"
                    src="https://galeri8.uludagsozluk.com/498/killua-zoldyck_808025_m.jpg"
                />
                <Dropdown text="Yiğit" pointing="top left">
                    <Dropdown.Menu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem text="Cıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
