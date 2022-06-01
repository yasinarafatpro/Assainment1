import { Box, Container } from '@mui/system'
import React from 'react'
import './Body.css'

export const Body = () => {

    return (
        <div>
            <div style={{alignItems:'center',border:'50px',paddingLeft:'50px'}}>
                <h2>Title Here</h2>
            </div>
            <div style={{alignItems:'center',border:'50px',paddingLeft:'50px'}}>
                <p>Text Here</p>
            </div>
            <div style={{alignItems:'center',border:'50px',paddingLeft:'500px',cursor:'pointer'}}>
                <Container>
                    <Box sx={{
                        bgcolor: '#cfe8fc',
                        height: '40vh',
                        width: '110vh',
                        alignItems: 'rignt'
                    }} />
                </Container>
            </div>
        </div>
    )
}
