import React, { lazy }  from "react";

export const Login = lazy(() => import('auth/Login').catch(() => {
        return { default: () => <div className='error'>Не удалось загрузить компонент Login</div> };
    })
);

export const Register = lazy(() => import('auth/Register').catch(() => {
        return { default: () => <div className='error'>Не удалось загрузить компонент Register</div> };
    })
);

export const Profile = lazy(() => import('profile/Profile').catch(() => {
        return { default: () => <div className='error'>Не удалось загрузить компонент Profile</div> };
    })
);

export const Places = lazy(() => import('places/Places').catch(() => {
        return { default: () => <div className='error'>Не удалось загрузить компонент Places</div> };
    })
);

export const AddPlace = lazy(() => import('places/AddPlace').catch(() => {
        return { default: () => <div className='error'>Не удалось загрузить компонент AddPlace</div> };
    })
);