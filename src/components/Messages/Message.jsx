import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

const Message = (props) => {
    const currentUser = useSelector((state) => state.user);

    return (
        <S.UserMsg>
            <S.ProfileImage src={props.profileImage} />
            <S.UserInfo>
                <S.UserInfoDiv>
                    <S.UserName>
                        {props.userName} {currentUser === props.userName && '*'}
                    </S.UserName>

                    <S.DateSpan> {props.date}</S.DateSpan>
                </S.UserInfoDiv>
                <div>{props.content}</div>
            </S.UserInfo>
        </S.UserMsg>
    );
};

export default Message;
