import React from 'react';
import faker from 'faker';

import AvatarDefault from '../../../assets/img/icons/avatar.svg';

import { HeaderUserOptions, UserAvatar, UserInformation, AvatarClipCounding } from './styles';

export default function UserHeaderOptions() {
  const userImage = faker.image.avatar();

  return (
    <HeaderUserOptions>
      <UserAvatar>
        <div>
          <img alt='User profile' src={userImage ?? <AvatarClipCounding source={AvatarDefault} size="60%" />} />
        </div>
      </UserAvatar>
      <UserInformation>
        <div>
          {faker.name.suffix()} {faker.name.lastName()}, {faker.name.firstName()}
        </div>
        <div>{faker.company.companyName()}</div>
      </UserInformation>
    </HeaderUserOptions>
  );
}
