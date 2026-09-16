import React, { useEffect } from "react";
import "./SignUp.css";

const SignUp = () => {

    return (
        <div className="login_screen">
            <div className="login_form">
                <h1>Create your account</h1>
                <div className="inputs_column">
                    <div className="input_box">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Your Username"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="email@example.com"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="•••••••••••••••"/>
                    </div>
                    <div className="input_box">
                        <label htmlFor="password_repeat">Password</label>
                        <input id="password_repeat" type="password" placeholder="•••••••••••••••"/>
                    </div>
                </div>
                <input type="submit" value="Continue"/>
                <p className="login_option">Already have an account? <a href="/login" className="login_link">Log in</a></p>
            </div>
            <div className="login_divider">
                <div className="line"></div>
                <p className="or">OR</p>
                <div className="line"></div>
            </div>
            <div className="other_options">
                <button className="login_option_button login_google">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 23.4998C15.1049 23.4998 17.7081 22.4701 19.6108 20.7137L15.8942 17.8283C14.8644 18.5183 13.5472 18.926 11.9999 18.926C9.00467 18.926 6.46945 16.903 5.56513 14.1848H1.72308V17.1644C3.61536 20.9228 7.50445 23.4998 11.9999 23.4998Z" fill="#34A853"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 5.07386C13.6883 5.07386 15.2042 5.65409 16.396 6.79364L19.6944 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50445 0.5 3.61536 3.07705 1.72308 6.83545L5.56513 9.815C6.46945 7.09682 9.00468 5.07386 11.9999 5.07386Z" fill="#EA4335"/>
                    </svg>
                    <p className="other_options_label">Continue with Google</p>
                </button>
                <button className="login_option_button login_apple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="black"/>
                        <path d="M21.2806 18.424C20.9328 19.2275 20.5211 19.9672 20.0441 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.8151 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2483 23.3248 14.5129 23.0224C13.775 22.7214 13.097 22.5724 12.477 22.5724C11.8268 22.5724 11.1294 22.7214 10.3835 23.0224C9.63644 23.3248 9.03463 23.4824 8.5745 23.498C7.87472 23.5278 7.17722 23.2197 6.48099 22.5724C6.03662 22.1848 5.48081 21.5204 4.81496 20.5791C4.10057 19.5739 3.51323 18.4084 3.0531 17.0795C2.56032 15.6442 2.31329 14.2543 2.31329 12.9087C2.31329 11.3673 2.64636 10.0379 3.31348 8.92385C3.83778 8.029 4.53528 7.32312 5.40826 6.80493C6.28124 6.28674 7.2245 6.02267 8.2403 6.00578C8.79611 6.00578 9.52499 6.1777 10.4308 6.51559C11.334 6.85462 11.9139 7.02655 12.1682 7.02655C12.3583 7.02655 13.0026 6.82552 14.0948 6.42473C15.1276 6.05305 15.9993 5.89916 16.7134 5.95978C18.6485 6.11595 20.1023 6.87876 21.0691 8.25303C19.3385 9.30163 18.4824 10.7703 18.4994 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0975 17.1107 21.6867 17.3578C21.5589 17.7283 21.424 18.0832 21.2806 18.424V18.424ZM16.8426 0.960131C16.8426 2.11039 16.4224 3.18439 15.5847 4.17847C14.5739 5.36023 13.3513 6.04311 12.0254 5.93536C12.0085 5.79736 11.9987 5.65213 11.9987 5.49951C11.9987 4.39526 12.4794 3.21349 13.3331 2.24724C13.7593 1.75801 14.3013 1.35122 14.9586 1.02671C15.6146 0.707053 16.235 0.530273 16.8185 0.5C16.8355 0.653772 16.8426 0.807554 16.8426 0.960116V0.960131Z" fill="white"/>
                    </svg>
                    <p className="other_options_label">Continue with Apple</p>
                </button>
                <a className="login_link" href="/">Continue as Guest</a>
            </div>
        </div>
    )
}

export default SignUp;