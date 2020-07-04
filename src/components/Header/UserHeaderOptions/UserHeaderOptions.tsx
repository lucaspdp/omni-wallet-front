import React from 'react';
import AvatarDefault from '../../../assets/img/icons/avatar.svg';

import { HeaderUserOptions, UserAvatar, UserInformation, AvatarClipCounding } from './styles';

export default function UserHeaderOptions() {
  return (
    <HeaderUserOptions>
      <UserAvatar>
        <AvatarClipCounding source={AvatarDefault} size={'60%'} color={'var(--primary-color)'}></AvatarClipCounding>
      </UserAvatar>
      <UserInformation>
        <div>Usuário</div>
        <div>Empresa</div>
      </UserInformation>
    </HeaderUserOptions>
  );
}
