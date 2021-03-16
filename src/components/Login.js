import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((err) => alert(err.message));
    }
    return <LoginContainer>
            <LoginInnerContainer>
                <img
                alt=""
                src="https://static.surveysparrow.com/site/assets/integrations/inner/slack.png"
                />
                <h1>Sign in to the vanThang</h1>
                <p>vanThang.slack.com</p>

                <Button type="submit" onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display: grid;
    place-items: center;
    border-radius: 10px;
`;
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
    }
`;
