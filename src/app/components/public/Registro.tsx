export const Registro = () => {
    return (
        <div>
            <div className="loginBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="376" height="317" fill="none" className="position-absolute left bottom-0"><path fill="#2B87F3" d="M98 59.596c-28-61.6-77-63.667-98-57v314l375-1c2.4-80.8-78-135.333-118-150-41.333-9.667-131-44.4-159-106Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="235" height="255" fill="none" className="position-absolute end-0 top"><path fill="#62CFF1" fill-opacity="0.5" d="M68.1 80.835C29.568 58.825 50.747 26.4 66.154 12.937L221.33 57.304l-47.588 170.031c-54.155 25.255-83.028 7.944-90.695-3.868-5.774-13.59 7.306-40.363 14.567-52.051 19.963-22.85 22.57-48.563 21.379-58.563-6.44-19.763-36.613-29.58-50.894-32.018Z"></path><path fill="#62CFF1" d="M88 72C43.2 60 55.333 19 67 0l168 1v196c-47.2 43.2-81 33.333-92 23-9.6-12.8-4-45.333 0-60 13.6-30.4 9-58.667 5-69-12-19.2-45-20.667-60-19Z"></path></svg>
                <div className="h-100 container-fluid">
                    <div className="d-flex justify-content-center align-items-center row">
                        <div className="loginContainer col-lg-12 p-4">
                            <div className="card">
                                <div className="p-4 m-1 card-body">
                                    <h4 className="mb-0 fw-bold">Register</h4>
                                    <small className="pb-4 d-block">Already have an account?
                                        <a className="link-info fw-normal" href="/auth/loginformik">Login</a>
                                    </small>
                                    <form action="#">
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">User Name</label>
                                            <input name="UserName" type="text" className="form-control " value="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input name="email" type="text" className="form-control" value="" />
                                        </div><div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input name="password" type="password" className="form-control" value="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                            <input name="confirmPassword" type="password" className="form-control" value="" />
                                        </div>
                                        <div className="form-check mb-3">
                                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className="form-check-input " value="false" />
                                            <label htmlFor="acceptTerms" className="form-check-label form-label">Accept Terms &amp; Conditions
                                            </label>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="me-2 btn btn-info">Register</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );


}