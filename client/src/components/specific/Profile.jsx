import { Avatar, Icon, Stack, Typography } from '@mui/material';
import React from 'react';
import moment from "moment"
import { 
  Face as FaceIcon,
  CalendarMonth as CalendarIcon,
  AlternateEmail as UserNameIcon
 } from "@mui/icons-material";

const Profile = () => {
  return (
    <Stack direction={"column"} spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white"
        }}
      />
      <ProfileCard heading={"Bio"} text={"sakht launda"} />
      <ProfileCard heading={"Username"} text={"sunny@123"} Icon={UserNameIcon} />
      <ProfileCard heading={"Name"} text={"Sunny Shukla"} Icon={FaceIcon}/>
      <ProfileCard heading={"Joined"} text={moment('2023-11-05T00:00:00.000Z').fromNow()} Icon={CalendarIcon} />


    </Stack>
  );
};

const ProfileCard = ({ heading, text, Icon }) => (
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"}>
    {Icon && <Icon />} 
    <Stack alignItems={"center"}>
      <Typography variant="body1" >{text} </Typography>
      <Typography color={"gray"} variant="body1" >{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
