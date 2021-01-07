import React from "react";
import avatarFemale from '../avatar.jpg';
import avatarMale from '../avatar-male.jpg';

interface AvatarProps {
    gender: string;
}

const Avatar = (props: AvatarProps) => {

    const avatar = (props.gender == 'M') ? avatarMale : avatarFemale;

    return (<div>
        <img src={avatar} className="App-avatar" alt="avatar" />
    </div>)
}

export default Avatar
