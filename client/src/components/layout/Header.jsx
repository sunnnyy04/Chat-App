import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { lazy, Suspense, useState } from 'react';
import { orange } from '../../constants/color';
import Title from '../shared/Title';
import {Search as SearchIcon,Add as AddIcon, Menu as MeunIcon, Group as GroupIcon,Logout as LogOutIcon,Notifications as NotificationsIcon} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';
import { LayoutLoaders } from './Loaders';

const SearchDialog=lazy(()=>import("../specific/Search"))
const NotificationsDialog=lazy(()=>import("../specific/Notifications"))
const NewGroupDialog=lazy(()=>
  import("../dialogs/NewGroup")
)
const Header = () => {
  const [isMobile,setIsMobile]=useState(false)
  const [isSearch,setIsSearch]=useState(false)
  const [isNewGroup,setIsNewGroup]=useState(false)
  const [isNotification,setIsNotification]=useState(false)
  const handleMobile=()=>{
    setIsMobile((prev)=>!prev);

  }
  const openSearchDialog=()=>{
    setIsSearch((prev)=>!prev)
  
  }
  const addNewGorup=()=>{
    setIsNewGroup((prev)=>!prev)
  
  }
  const openNotification=()=>{
    setIsNotification((prev)=>!prev)
  }
  const navigate=useNavigate();
  const NavigateToGroup=()=>navigate("/groups")
  const LogOutHandler=()=>{

  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
           <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
            Chattu
           </Typography >
           <Box sx={{display:{xs:"none",sm:"block"}}}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MeunIcon/>
            </IconButton>
           </Box>
           <Box sx={{flexGrow:1}}/>
           <Box >
            <IconBtn title="search" icon={<SearchIcon/>} onClick={openSearchDialog}/>
            <IconBtn title="New Group" icon={<AddIcon/>} onClick={addNewGorup}/>
            <IconBtn title="Manage Groups" icon={<GroupIcon/>}/>
           </Box>
           <IconBtn title="logout" icon={<LogOutIcon/>} onClick={LogOutHandler}/>
           <IconBtn  title="notification" icon={<NotificationsIcon/>} onClick={openNotification}/>


          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && <Suspense fallback={<Backdrop open/>}>
        <SearchDialog/>
      </Suspense>}
      {isNotification && <Suspense fallback={<Backdrop open/>}>
        <NotificationsDialog/>
      </Suspense>}
      {isNewGroup && <Suspense fallback={<Backdrop open/>}>
        <NewGroupDialog/>
      </Suspense>}
      
    </>
  );
};
const IconBtn=({title,icon,onClick})=>{
  return (
            <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick} >
              {icon}
            </IconButton>

            </Tooltip>

  )
}

export default Header;
