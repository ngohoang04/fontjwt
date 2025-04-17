import './Login.scss';

const Login = (props) => {
    return (
        <div className="login-container ">
            <div className="container">
                <div className="row">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                        <div className='brand'>Trong Hoang</div>
                        <div className='detail'>abc</div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <input type='text' placeholder='Username' className='input' />
                        <input type='password' placeholder='Password' className='input' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'><a href='#' className='forgot-pass'>Forgot password</a></span>
                        <hr />
                        <div className='text-center'><button className='btn btn-success'>Create account</button></div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Login;