import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import spiner_loader from "../../defaultStyle/img/SpinnerLoading.gif";
import React, {useState} from "react";
import {Button, Col, Drawer, Layout, List, Menu, Row, Typography} from 'antd';


export const Header = ({isFetching, login, id, email, logout, showNavbar}: any) => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }


    const logoutHendle = () => {
        logout()
    }

    return (
        <Layout className={s.header}>
            <Row className={s.header__inner} justify="space-between" align="middle">
                <Col>
                    <h1 className={s.header__logo}>social network</h1>
                </Col>
                <Col className={s.header__login}>
                    {isFetching ?
                        <>
                            <Drawer
                                title="Информация Пользователя"
                                placement={'top'}
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                                key={'top'}
                            >
                                <List size="small">
                                    <List.Item><Typography.Text>Id: {id}</Typography.Text></List.Item>
                                    <List.Item><Typography.Text>Login: {login}</Typography.Text></List.Item>
                                    <List.Item><Typography.Text>Email: {email}</Typography.Text></List.Item>
                                </List>
                                <div className={s.header__login_btn}>
                                    <Button type="primary" block onClick={logoutHendle}>Logout</Button>
                                </div>
                            </Drawer>
                            <Menu theme='light' mode="horizontal">
                                <Menu.Item onClick={showDrawer}>{login}</Menu.Item>
                                <Menu.Item onClick={() => showNavbar(true)}>{login && 'Navbar'}</Menu.Item>
                            </Menu>
                        </>
                        :
                        <></>
                        // <div>
                        //     <Button type="primary" block><NavLink to={'/login'}>Login</NavLink></Button>
                        // </div>
                    }
                </Col>
            </Row>
        </Layout>
    )
}
