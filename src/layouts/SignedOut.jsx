import React from 'react'
import { Menu, Button, } from "semantic-ui-react";

export default function SignedOut() {
    return (
        <div>
            <Menu.Item>
                <Button inverted >
                    Giriş Yap
        </Button>
                <Button inverted style={{ marginLeft: '0.5em' }}>
                    Kayıt Ol
        </Button>
            </Menu.Item>
        </div>
    )
}
