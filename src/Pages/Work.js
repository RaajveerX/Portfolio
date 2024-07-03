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

const chan = {
    "title":"Software Automation Engineer Intern - UMass Chan Medical School",
    "from":"Sept 2023",
    "to":"Present",
    "techs":["ServiceNow", "Agile Team", "Azure",],
    "bullets":["Developed an automated, serverless system in C# using Azure Functions and Microsoft Graph API to create Microsoft Entra ID groups on demand, significantly reducing the manual effort to create groups",
                "Collaborated with a cross-functional agile team to implement C# scripts in Optimizely (a content management system), reducing micro-site setup time",
                "Wrote JavaScript scripts within ServiceNow to process request form inputs and present clear task details to fulfillment groups, reducing the time required to look up information by 15% and improving request turnaround time",
                "Implemented Azure Service Buses (a message broker system) to facilitate communication between applications, automating the creation of new microsites in Optimizely, and boosting team productivity by 30%",
                "Updated forms and flows in ServiceNow, enhancing readability for both requesters and fulfillers",
                "Added automated email notifications to update users on request progress, boosting user satisfaction",
                "Reduced the testing cycle by 50% by implementing automated tests using the Automated Testing Framework in ServiceNow"
    ]
    

}

const it = {
    "title":"Student IT Consultant - UMass IT",
    "from" : "Aug 2022",
    "to" : "Aug 2023",
    "techs":["Information Technology","Customer Service", "Problem solving"],
    "bullets":["Handled tickets on the ServiceNow platform and delivered in-person technical support to students and faculty resolving an average of 35 tickets per day reducing technical disruption",
               "Handled ~30 remote support requests per week on the BeyondTrust Remote Support Client achieving a 98% resolution rate"]
}

const tutor = {
    "title":"Peer Tutor - Learning Resource Center",
    "from":"Feb 2023",
    "to":"May 2023",
    "techs":["Problem solving","Tutoring","Debugging"],
    "bullets":["Tutored an average of 8 students per week resulting in improved understanding of projects and course material",
        "Supported students in debugging projects with a student satisfaction rating of 5/5 based on surveys",
        "Courses Supported: Artificial Intelligence (Python), Programming Data Structures (Java), Programming Basics (Java)"]
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
            <WorkTile info={chan}/>
            <WorkTile info={it}/>
            <WorkTile info={tutor}/>
        </Stack>
    )
}
