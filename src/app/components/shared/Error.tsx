import fondo from '../../../assets/images/bg/error-bg.jpg';
export const Error = () => {
    return (
        <div className="loginBox" style={{ background: `rgb(255, 255, 255) url(${fondo}) center bottom no-repeat` }}>
            <div className="d-flex align-items-center justify-content-center h-100">
                <div className="text-center">
                    <h1 className="error-title">404</h1>
                    <div className="my-3">
                        <h4>PAGE NOT FOUND !</h4>
                        <span className="text-muted d-block fs-5">You seem to be trying to find his way home </span>
                    </div>
                    <a className="btn btn-danger" href="/">Back to home</a>
                </div>
            </div>
        </div>
    );
}