import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material';
import {React,useState} from 'react';
import { useInputValidation } from '6pp';
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { Sampleusers } from '../../constants/sampleData';

const Search = () => {

  const search = useInputValidation();
  const [users, setUsers] = useState(Sampleusers);
    const addFriend=(id)=>{
        console.log(id);
    }
const isLoading=false;
    

  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
            <Stack>
                {users.map((user)=>(
                    <UserItem user={user} key={user._id} handler={addFriend} handlerIsLoading={isLoading}/>
                ))}
            </Stack>
    
    </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
