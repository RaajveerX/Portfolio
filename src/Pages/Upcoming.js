import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Memoji from '../Assets/memoji.png'
import {Container} from "@mui/material"
import {Box} from "@mui/material"
import Chant1 from '../Assets/chant-1.png'
import Chant2 from '../Assets/chant-2.png'
import Chant3 from '../Assets/chant-3.png'
import Chant4 from '../Assets/chant-4.png'
import {List} from "@mui/material"
import {ListItem} from "@mui/material"


function Module(){
    return(
        <Stack direction={"row"} spacing={1} padding={5}>
            <Stack spacing={1} sx={{background:"rgba(217, 217, 217, 0.08)",borderRadius:"20px"}} padding={5} width={"50%"}>
                <Typography variant="h6" color={"#B6B6B6"} fontFamily={"Roboto Slab"} fontWeight={400}>CHANT APP</Typography>
                <List sx={{listStyleType:"square",color:"#B6B6B6"}}>
                    <ListItem sx={{display:"list-item"}}>Chanting is the process of iterating a word and meditating</ListItem>
                    <ListItem sx={{display:"list-item"}}>A chant has to be repeated a certain number of times which creates a certain involvement of the mind</ListItem>
                    <ListItem sx={{display:"list-item"}}>The purpose of this app is to keep the count for you</ListItem>
                    <ListItem sx={{display:"list-item"}}>This allows the user to be more mindful by delegating the counting part to this app</ListItem>
                    <ListItem sx={{display:"list-item"}}>The plan is to use initially use audio processing and then move on to a machine learning model to recognize the chants</ListItem>
                </List>
            </Stack>
            <Stack direction={"row"} spacing={1} overflow={"scroll"} sx={{background:"rgba(217, 217, 217, 0.08)",borderRadius:"20px"}} padding={5} width={"50%"}>
                <img src={Chant1} width={"100%"} style={{opacity:"70%"}}/>
                <img src={Chant2} width={"100%"} style={{opacity:"70%"}}/>
            </Stack>
        </Stack>
    )
}



export default function Upcoming(){

    return (
        <Box display={"flex"}>
            <Stack sx={{background:"black"}} textAlign={"center"} spacing={2}>
                <Box textAlign={"center"}>
                    <img src={Memoji} width="25%"/>
                </Box>
                <Typography
                color={"#E1E1E1"}
                fontFamily={"Inter"}
                fontSize={"50px"}
                fontStyle={"normal"}
                lineHeight={"normal"}
                sx={{textShadow:"0px -5px 2px rgba(255, 255, 255, 0.27)",fontWeight:"800"}}
                >CURRENTLY EXPLORING</Typography>
                <Module/>
            </Stack>
        </Box>
    )
}