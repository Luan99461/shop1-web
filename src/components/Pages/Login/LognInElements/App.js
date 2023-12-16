import React, { useState } from 'react';
import Footer from '../../ElementsHome/Footer/Footer';
import RegistrationForm from '../../Sign-up/SignupElements/App';
import HeaderLogin from '../PagesLogin/Header';
import LoginForm from '../PagesLogin/LognInForm';

function App() {
    // const [isRegistered, setIsRegistered] = useState(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [registrationInfo, setRegistrationInfo] = useState({});

    // const handleRegistration = (info) => {
    //     setIsRegistered(true);
    //     setRegistrationInfo(info);
    // };

    // const handleLogin = (email, password) => {
    //     // Xác thực đăng nhập ở đây, ví dụ: kiểm tra email và password với dữ liệu đã đăng ký
    //     if (email === registrationInfo.email && password === registrationInfo.password) {
    //         setIsLoggedIn(true);
    //     } else {
    //         alert('Sai mật khẩu hoặc email');
    //     }
    // };

    return (
        <div className="App">
            {/* <HeaderLogin/>
            {!isLoggedIn && (
                <>
                    {isRegistered ? (
                        <LoginForm
                            handleLogin={handleLogin}
                            isRegistered={isRegistered}
                            registrationInfo={registrationInfo}
                        />
                    ) : (
                        <RegistrationForm handleRegistration={handleRegistration} />
                    )}
                </>
            )}
            {isLoggedIn && <div className="success-message">Đã hoàn tất đăng nhập!</div>}
            <Footer/> */}

            <HeaderLogin/>
            <LoginForm/>
            <Footer/>
        </div>
        
    );
}

export default App;