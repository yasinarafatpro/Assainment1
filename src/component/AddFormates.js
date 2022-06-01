import { Button, Stack } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Title1 from './Title1'

export const AddFormates = () => {
    return (
        <>
            <div style={{ alignItems: 'center', border: '50px', paddingLeft: '450px', paddingTop: '30px', cursor: 'pointer' }}>
                <Stack spacing={3} direction="row">
                    <Button variant="contained" color='inherit'>POP-UNDER</Button>
                    <Button variant="contained">BANNER AD</Button>
                    <Button variant="contained">NATIVE</Button>
                    <Button variant="contained">SKIM</Button>
                </Stack>

                <div style={{ alignItems: 'baseline', border: '50px', paddingBottom: '20px', paddingTop: '100px' }}>

                    <div style={{textAlign:'right',paddingRight:'50px',textAlignLast:'unset',padding:'50px'}}>
                    <h2>POP-UNDER</h2><br />
                        <h5>This is one of the most popular ads. After user’s click, this
                            ad opens landing page in behind. So, the user experience is
                            not hampered much
                        </h5>
                    </div>
                    <Container >
                        <Box component="span" sx={{ border: '1px ', bgcolor: '#644F9' }}>
                            <h3>Ad Format</h3>
                            <h4>Explanation graphics of ad format</h4>
                            <h4>(Image will be changed)</h4>
                        </Box>
                    </Container>
                </div>
            </div>
            <div>
                <div style={{ alignItems: 'center', border: '50px', paddingLeft: '450px', paddingTop: '30px', cursor: 'pointer' }}>
                    <Stack spacing={3} direction="row">
                        <Button variant="contained">POP-UNDER</Button>
                        <Button variant="contained" color='inherit'>BANNER AD</Button>
                        <Button variant="contained">NATIVE</Button>
                        <Button variant="contained">SKIM</Button>
                    </Stack>

                    <div style={{ alignItems: 'baseline', border: '50px', paddingBottom: '20px', paddingTop: '100px' }}>
                        <div style={{textAlign:'right',padding:'50px'}}>
                            <h2>BANNER AD</h2>
                        </div>
                        <Container >
                            <Box component="span" sx={{ border: '1px ', bgcolor: '#644F9' }}>
                                <h3>Ad Format</h3>
                                <h4>Explanation graphics of ad format</h4>
                                <h4>(Image will be changed)</h4>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ alignItems: 'center', border: '50px', paddingLeft: '450px', paddingTop: '30px', cursor: 'pointer' }}>
                    <Stack spacing={3} direction="row">
                        <Button variant="contained">POP-UNDER</Button>
                        <Button variant="contained">BANNER AD</Button>
                        <Button variant="contained" color='inherit'>NATIVE</Button>
                        <Button variant="contained">SKIM</Button>
                    </Stack>

                    <div style={{ alignItems: 'baseline', border: '50px', paddingBottom: '20px', paddingTop: '100px' }}>
                        <div style={{textAlign:'right',padding:'50px'}}>
                            <h2>NATIVE</h2>
                        </div>
                        <Container >
                            <Box component="span" sx={{ border: '1px ', bgcolor: '#644F9' }}>
                                <h3>Ad Format</h3>
                                <h4>Explanation graphics of ad format</h4>
                                <h4>(Image will be changed)</h4>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ alignItems: 'center', border: '50px', paddingLeft: '450px', paddingTop: '30px', cursor: 'pointer' }}>
                    <Stack spacing={3} direction="row">
                        <Button variant="contained">POP-UNDER</Button>
                        <Button variant="contained">BANNER AD</Button>
                        <Button variant="contained">NATIVE</Button>
                        <Button variant="contained" color='inherit'>SKIM</Button>
                    </Stack>

                    <div style={{ alignItems: 'baseline', border: '50px', paddingBottom: '20px', paddingTop: '100px' }}>
                        <div style={{textAlign:'right',padding:'50px'}}>
                            <h2>SKIM</h2>
                        </div>
                        <Container >
                            <Box component="span" sx={{ border: '1px ', bgcolor: '#644F9' }}>
                                <h3>Ad Format</h3>
                                <h4>Explanation graphics of ad format</h4>
                                <h4>(Image will be changed)</h4>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
            <Title1/>
        </>
    )
}
