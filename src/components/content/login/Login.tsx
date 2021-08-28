import {Button, Col, Form, Row} from "antd";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../form/FormControl";


export const Login = (props: any) => {

    const formHendler = (data: any) => {
        props.loginHendler(data)
    }

    return (
        <Row justify="center">
            <Col span={8}>
                <ReduxFormLogin onSubmit={formHendler}/>
            </Col>
        </Row>
    )
}

export const LoginForm = (props: any) => {
    return (
        <Form>
            <form onSubmit={props.handleSubmit}>


                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your Email!'}]}
                >
                    <Field
                        component={FormControl('input')}
                        name={'login'}
                        type={'text'}
                    />
                </Form.Item>


                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Field
                        component={FormControl('input')}
                        name={'password'}
                        type={'text'}
                    />
                </Form.Item>


                <Form.Item
                    label="RememberMe"
                    name="rememberme"
                    rules={[{required: false, message: 'Please input your RememberMe!'}]}
                >
                    <Field
                        component={FormControl('input')}
                        name={'rememberMe'}
                        type={'checkbox'}
                    />
                </Form.Item>


                {props.error && <div style={{color: 'red', margin: '5px 0'}}>Error Validation</div>}
                <div>
                    <button >Send</button>
                </div>
            </form>
        </Form>
    )
}

const ReduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm)