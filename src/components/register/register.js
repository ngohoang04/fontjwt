import './register.scss';
import { useHistory } from 'react-router-dom';
const Register = (props) => {
    let history = useHistory();
    const handleCreateNewAccount = () => {
        // Redirect to the register page
        history.push('/login');
    };

    return (
        <div className="register-container ">
            <div className="container">
                <div className="row">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                        <div className='brand'>Trong Hoang</div>
                        <div className='detail'>abc</div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <input type='text' placeholder='Username' className='input' />
                        <input type='password' placeholder='Password' className='input' />
                        <button className='btn btn-primary'>Register</button>
                        <span className='text-center'><a href='#' className='forgot-pass'>Forgot password</a></span>
                        <hr />
                        <div className='text-center'><button className='btn btn-success' onClick={() => handleCreateNewAccount()}>Create account</button></div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Register;