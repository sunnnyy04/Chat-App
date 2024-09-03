import { Dialog, DialogTitle, Stack, Typography, ListItem, Avatar, Button } from '@mui/material';
import React, { memo } from 'react';
import { SampleNotifications } from '../../constants/sampleData';

const NotificationsDialog = () => {
    const friendRequestHandler = (_id, accept) => {
        console.log(`Friend request ${accept ? 'accepted' : 'declined'} for user with ID: ${_id}`);
    };

    return <Dialog open>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle>Notifications</DialogTitle>

                {
                    SampleNotifications.length > 0 ? (
                        SampleNotifications.map((i) => 
                            <NotificationItem 
                                sender={i.sender} 
                                _id={i._id} 
                                handler={friendRequestHandler} 
                                key={i._id}
                            />
                        )
                    ) : (
                        <Typography textAlign={"center"}>No Notifications</Typography>
                    )
                }
            </Stack>
        </Dialog>
    
};

const NotificationItem = memo(({ sender, _id, handler }) => {
    const { name, avatar } = sender;
    return (
        <ListItem sx={{ marginBottom: "1rem" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width="100%">
                <Avatar src={avatar} alt={name} />
                <Typography
                    variant="body1"
                    sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%"
                    }}
                >
                    {`${name} sent you a friend request`}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                    <Button 
                        variant="contained" 
                        size="small" 
                        onClick={() => handler(_id, true)}
                    >
                        Accept
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="error" 
                        size="small" 
                        onClick={() => handler(_id, false)}
                    >
                        Decline
                    </Button>
                </Stack>
            </Stack>
        </ListItem>
    );
});

export default NotificationsDialog;
