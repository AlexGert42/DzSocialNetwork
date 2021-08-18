import {Field, reduxForm} from "redux-form";


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
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Email'} type={'text'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'} type={'text'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} placeholder={'rememberMe'} type={'checkbox'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({
        form: 'ligin'
})(LoginForm)