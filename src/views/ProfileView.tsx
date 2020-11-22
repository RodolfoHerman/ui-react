import React from 'react';
import { connect } from 'react-redux';
import ProfileCard, { User } from '../components/Authentication/ProfileCard';
import Header from '../components/Header';
import Container from '../shared/Container';
import withPermission from '../utils/HOC/withPermission';

declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    return <>
        <Header title="Alga-stock" />
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <ProfileCard user={props.user} />
            </div>
        </Container>
    </>
}

const mapStateToProps = () => ({
    user: {
        name: "Rodolfo",
        email: "rodolfo@textSpanEnd.com"
    }
})

// Caso outro perfil sem ser customer tente visualizar a view de profile
// ele não terá permissão e será redirecionado para a página raiz
export default connect(mapStateToProps)(
    withPermission(['customer'], '/')(ProfileView)
);
