function login(){
    return (
        <>
        <div>
            <label className="login-title">Email</label>
            <input type="email"
            classname="email"
            placeholder="Enter your email">
            </input>
        </div>

        <div>
            <label className="password=title">Password</label>
            <input type="password"
            className="password"
            placeholder="Enter your password">
            </input>
        </div>

        <button className="button">
            Show
        </button>
        </>
    )
}