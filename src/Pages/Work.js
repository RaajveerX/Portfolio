import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {Chip} from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { WorkOutlineOutlined } from "@mui/icons-material";

/*

Prop for this will be of this form

title -> "Work Title"
from -> "time"
to -> "present or something"
softs -> soft skills, technicals
bullets -> 
*/

const it = {
    "title":"Student IT Consultant - UMass IT",
    "from" : "Aug 2022",
    "to" : "Present",
    "techs":["Information Technology","Customer Service", "Problem solving"],
    "bullets":[ "Provides in-person technical support to students and faculty, resolving an average of 35 daily service tickets",
    "Handles ∼ 30 on-demand remote support requests per week with a resolution rate of 98%"
    ]
}

const tutor = {
    "title":"Peer Tutor - Learning Resource Center",
    "from":"Feb 2023",
    "to":"May 2023",
    "techs":["Problem solving","Tutoring","Debugging"],
    "bullets":["Tutored an average of 8 students per week resulting in improved understanding of projects and course material",
        "Supported students in debugging projects and resolving code errors with a student satisfaction rating of 5/5 based on tutee feedback surveys",
        "Courses Supported: Artificial Intelligence, Programming Data Structures w/Java, Programming Basics w/Java"]
}


function WorkTile({info}){
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

export default function Work(){
    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={1}>
                <WorkOutlineOutlined fontSize="large" sx={{color:"white",paddingTop:"2px"}}/>
                <Typography variant="h4" color={"white"}>Work Experience</Typography>
            </Stack>
            <WorkTile info={it}/>
            <WorkTile info={tutor}/>
        </Stack>
    )
}