import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styles';

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.Image
                src='https://avatars.githubusercontent.com/u/79462616?v=4'
                alt='Profile'
            />
            <S.InfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.Username>
                        <h3>Username: </h3>
                        <a href={githubState.user.html_url}
                            target='_blank'
                            rel='noreferrer'>
                            {githubState.user.login}
                        </a>
                    </S.Username>
                </div>
                <S.Status>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.Status>
            </S.InfoUser>
        </S.Wrapper>
    );
};

export default Profile;