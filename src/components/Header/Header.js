import React, { useState } from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styles';

const Header = () => {
    const { getUser } = useGithub();
    const [username, setUsername] = useState()

    const submitGetUser = () => {

        if (!username) return;
        return getUser(username);
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Search profile..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>SEARCH</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;
