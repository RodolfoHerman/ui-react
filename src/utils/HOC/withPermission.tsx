import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux';

type Role = 'admin' | 'customer' | undefined;

const withPermission = (roles: Array<Role>, redirect: string = '') => (Component: FC<any>) => (props: any) => {
    // useSelector é um hook para acessar o estado do data store,
    // com isso conseguimos acessar os dados de reducer
    const auth = useSelector((state: RootState) => ({
        profile: state.authentication.profile
    }));

    return roles.includes(auth.profile?.role)
        ? <Component {...props} />
        : redirect 
            ? <Redirect to={redirect} />
            : null ;
}

export default withPermission;
