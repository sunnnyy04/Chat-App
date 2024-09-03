import React, { memo } from 'react'
import { Avatar, IconButton, ListItem,ListItemText, Stack, Typography } from '@mui/material'
import { Add as AddIcon} from '@mui/icons-material'
import { red } from '@mui/material/colors'

const UserItem = ({user,handler,handlerIsLoading}) => {
    const {name,_id,avatar}=user
  return (
    <ListItem 
        sx={{
           

        }}
    >
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <Avatar/>
            <Typography
                varient="body1"
                sx={{
                    flexGrow:1,
                    display:"-webkit-box",
                    WebkitLineClamp:1,
                    WebkitBoxOrient:"vertical",
                    overflow:"hidden",
                    textOverflow:"ellipsis",
                    width:"100%"
                }}
            >{name}</Typography>
            <IconButton size='small' 
                sx={{
                    bgcolor:"primary.main",
                    color:"white",
                    "&:hover":{
                        bgcolor:"primary.dark"
                    },
                }}
            onClick={()=>handler(_id)} disabled={handlerIsLoading}>
                <AddIcon/>

            </IconButton>
        </Stack>
    </ListItem>
  )
}

export default memo(UserItem)