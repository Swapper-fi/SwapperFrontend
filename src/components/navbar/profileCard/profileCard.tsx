import React from 'react';
import { Typography } from '../../typography';
import ProfilePicture from '../../../assets/profile.svg'
import "./profileCard.css"
export interface ProfileCardProps {
  image: String;
  address: String;
  value: String;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { image, address, value } = props;
  return (
    <div className="profileCard">
      <div className="profileImage">
        <img src={ProfilePicture} />
      </div>
      <div className="profileMetadata">
        <Typography type="title" text={address} />
        <Typography type="title" text={value} />
      </div>
    </div>
  )
}

export {
  ProfileCard
}