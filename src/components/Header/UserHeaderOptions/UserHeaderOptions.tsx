import React, { useState } from 'react';
import faker from 'faker';

import AvatarDefault from '../../../assets/img/icons/avatar.svg';

import { HeaderUserOptions, UserAvatar, UserInformation, AvatarClipCounding } from './styles';

export default function UserHeaderOptions() {
  const [userImage] = useState(faker.image.avatar());
  const [nameSuffix] = useState(faker.name.suffix());
  const [lastName] = useState(faker.name.lastName());
  const [firstName] = useState(faker.name.firstName());
  const [companyName] = useState(faker.company.companyName());

  return (
    <HeaderUserOptions>
      <UserAvatar>
        <div>
          <img alt="User profile" src={userImage ?? <AvatarClipCounding source={AvatarDefault} size="60%" />} />
        </div>
      </UserAvatar>
      <UserInformation>
        <div>
          [{nameSuffix}] {lastName}, {firstName}
        </div>
        <div>{companyName}</div>
      </UserInformation>
    </HeaderUserOptions>
  );
}
