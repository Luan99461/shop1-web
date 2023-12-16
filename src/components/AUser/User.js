import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import './style.css'
import { logout } from "./authSlice"
import { useSelector } from "react-redux/es/hooks/useSelector"

export const User = () => {
    //   const user = true
    //   const [profileOpen, setProfileOpen] = useState(false)

    //   const close = () => {
    //     setProfileOpen(null)
    //   }

    //   const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const logoutHandler = (e) => {
        dispatch(logout());
    }
    return (
        <>
            <div className='profile'>
                {user ? (
                    <>
                        <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
                            <img src='https://yt3.ggpht.com/qoNJSK9xsuTjUQzNpZwfiu9WcHf6D8t6TWp8FNTYcxcVFLnvMgbbqI5NWNgiATdwChFjwI3SEbQ=s88-c-k-c0x00ffffff-no-rj' alt='' />
                        </button>

                        {profileOpen && (
                            <div className='openProfile boxItems' onClick={close}>
                                <div className='image'>
                                    <Link to='/account'>
                                        <div className='img'>
                                            <img src='https://yt3.ggpht.com/qoNJSK9xsuTjUQzNpZwfiu9WcHf6D8t6TWp8FNTYcxcVFLnvMgbbqI5NWNgiATdwChFjwI3SEbQ=s88-c-k-c0x00ffffff-no-rj' alt='' />
                                        </div>
                                    </Link>
                                    <div className='text'>
                                        <h4>Thạch Hạo</h4>
                                        <label htmlFor=''>Hoang Thiên Đế</label>
                                    </div>
                                </div>
                                <Link to='/login'>
                                    <button className='box'>
                                        <i class="bi bi-gear"></i>
                                        <h4>My Account</h4>
                                    </button>
                                </Link>
                                <button className='box'>
                                    <i class="bi bi-bag-check"></i>
                                    <h4>My Order</h4>
                                </button>
                                <button className='box'>
                                    <i class="bi bi-bag-heart"></i>
                                    <h4>Wishlist</h4>
                                </button>
                                <button className='box'>
                                    <i class="bi bi-question-lg"></i>
                                    <h4>Help</h4>
                                </button>
                                <button className='box' onClick={logoutHandler}>
                                    <i class="bi bi-box-arrow-left"></i>
                                    <h4>Log Out</h4>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <button>My Account</button>
                )}
            </div>
        </>
    )
}