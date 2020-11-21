import React from 'react';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

export interface User {
    name: string,
    email: string
}

declare interface ProfileCardProps {
    user: User
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    return <div style={{
        minWidth: '320px'
    }}>
        <Form title="Profile">
            <Input 
                label="name"
                value={props.user.name}
                disabled
            />
            <Input 
                label="E-mail"
                value={props.user.email}
                disabled
            />
        </Form>
    </div>
}

export default ProfileCard;
