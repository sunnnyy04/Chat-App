import React from 'react'
import Header from './Header'

import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { Samplechats } from '../../constants/sampleData'
import { useParams } from 'react-router-dom'

const AppLayout=(WrappedComponent)=> {
  return(props)=> {
    const params=useParams();
    const chatId=params.chatId;
    const handleDeleteChat=(e,_id,groupChat)=>{
      e.preventDefault();
      console.log("Delete Chat",_id,groupChat)
    }
    return (
    <>
        <Title/>
        <Header/>
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid sm={4} md={3} lg={3} item sx={{display:{xs:"none",sm:"block"}}} height={"100%"} bgcolor=""><ChatList chats={Samplechats} chatId={chatId} handleDeleteChat={handleDeleteChat}/></Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor=""><WrappedComponent {...props}/></Grid>
          <Grid item md={4} lg={3}  height={"100%"} sx={{display:{xs:"none",md:"block"},bgcolor:"rgba(0,0,0,0.85)", padding:"2rem"}}>third</Grid>

        </Grid>
        
    </>)
  
}
}

export default AppLayout