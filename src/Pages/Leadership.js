import { Stack } from "@mui/material"
import { Typography } from "@mui/material"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {Chip} from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { WorkOutlineOutlined } from "@mui/icons-material";

//Props for this
const jazba ={

    "title":"UMass Jazba Fusion Dance Team",
    "position":"Vice-President/Co-Captain",
    "from":"Sep 2021",
    "to":"Present",
    "techs":["Choreography","Audio Editing","Video Editing"],
    "bullets":["Collaborates with the exec board to train a team of 20+ diverse individuals in 7+ dance styles to compete in competitions nationwide ",
        "Produces captivating and creative audio mixes using Logic Pro, enhancing performance quality and energy",
        "Communicates with the executive board and advisors to reflect on feedback and increase club-recognition on-campus"]
}



const hack = {

    "title":"HackUMass",
    "position":"Organizing PR Team",
    "bullets":["Produced social media content increasing overall event awareness and student registrations by 40% for HackUMass X",
        "Documented workshops and events on social media during the hackathon enabling a wider audience to benefit from valuable insights and experiences"],
    "from":"May 2022",
    "to":"May 2023",
    "techs":["Marketing","Graphic Design"]
}

function LeaderTile({info}){
    return(
            <Stack direction={"row"} spacing={2}>
                <Stack direction={"column"}  borderRadius={5} width="100%">
                        <Stack direction={"row"} spacing={1} marginTop={3} marginLeft={5}>
                            <Typography variant="h5" color={"white"}>{info.title}</Typography>
                            <Stack direction={"row"} spacing={1} display="flex">

                                { info.techs.map((x)=>{
                                    return <Chip label={x} variant="filled" sx={{color:"white"}}/>
                                })}

                                <Chip label={info.from} variant="outlined" sx={{color:"white"}}/>
                                <Typography variant="h7" color={"white"} paddingTop={0.5}>-</Typography>
                                <Chip label = {info.to} variant="outlined" sx={{color:"white"}}/>

                            </Stack>
                        </Stack>
                        <List sx={{listStyleType:"square",color:"white", marginLeft:"60px"}}>
                            { info.bullets.map((x)=>{
                                    return <ListItem sx={{display: "list-item"}}>{x}</ListItem>
                                })}
                        </List>
                </Stack>
            </Stack>

    )
}

export default function Leadership(){
    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={1}>
                <SchoolOutlinedIcon fontSize="large" sx={{color:"white",paddingTop:"2px"}}/>
                <Typography variant="h4" color={"white"}>Leadership</Typography>
            </Stack>
            <LeaderTile info={jazba}/>
            <LeaderTile info={hack}/>
        </Stack>
    )
}