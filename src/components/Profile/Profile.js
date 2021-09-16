import React from 'react';
import * as S from './styles';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.Image
                src='https://avatars.githubusercontent.com/u/79462616?v=4'
                alt='Profile'
            />
            <S.InfoUser>
                <div>
                    <h1>Davi Lima</h1>
                    <S.Username>
                        <h3>Username: </h3>
                        <a href='https://github.com/Davi-slima' target='_blank' rel='noreferrer'>Davi-slima</a>
                    </S.Username>
                </div>
                <S.Status>
                    <div>
                        <h4>Followers</h4>
                        <span>7</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>2</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>3</span>
                    </div>
                </S.Status>
            </S.InfoUser>
        </S.Wrapper>
    )
}

export default Profile;