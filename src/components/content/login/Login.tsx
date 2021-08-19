import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../form/FormControl";


export const Login = (props: any) => {

    const formHendler = (data: any) => {
        props.loginHendler(data)
    }

    return (
        <div style={{marginTop: '150px'}}>
            <ReduxFormLogin onSubmit={formHendler}/>
        </div>
    )
}

export const LoginForm = (props: any) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={FormControl('input')}
                    name={'login'}
                    placeholder={'Email'}
                    type={'text'}
                />
            </div>
            <div>
                <Field
                    component={FormControl('input')}
                    name={'password'}
                    placeholder={'password'}
                    type={'text'}
                />
            </div>
            <div>
                <Field
                    component={FormControl('input')}
                    name={'rememberMe'}
                    placeholder={'rememberMe'}
                    type={'checkbox'}
                />
            </div>
            {props.error && <div style={{color: 'red', margin: '5px 0'}}>Error Validation</div>}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm)