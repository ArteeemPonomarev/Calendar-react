import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom';
import {RouteNames} from '../roter';


export const Navbar: FC = () => {
    const router = useHistory();
    console.log(router)

    const auth = true;

    return (
        <Layout.Header>
            <Row justify="end">
                {auth ?
                    <Menu style={{width: '90px'}} theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: 'white'}}>
                            Artem P
                        </div>
                        <Menu.Item
                            onClick={() => console.log('Выйти')}
                            key={1}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu>
                    :
                    <Menu style={{width: '90px'}} theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => console.log('dfs')}
                            key={1}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

