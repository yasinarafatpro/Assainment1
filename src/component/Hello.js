import { Button, Stack } from '@mui/material'
import React from 'react'

export const Hello = () => {
  return (
    <div>
        <div style={{alignItems:'center',border:'50px',paddingLeft:'500px',cursor:'pointer'}}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Hello 1</Button>
                    <Button variant="contained">Hello 2</Button>
                    <Button variant="contained">Hello 3</Button>
                </Stack>
            </div>
    </div>
  )
}
