import { AvatarGroup, Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({avatar=[],max=4}) => {
  return <Stack>
    <AvatarGroup max={max}></AvatarGroup>
  </Stack>
}

export default AvatarCard