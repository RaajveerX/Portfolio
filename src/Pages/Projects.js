import { Paper, Typography } from "@mui/material";
import {Stack} from "@mui/material";
import {Chip} from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


/*
structure of props
{title,techs, from, to, bullets, team or solo}


*/

const imagecolor = {

    "title":"Image Colorizer- ML Model",
    "from": "May 2023",
    "bullets": ["Infused color to grayscale images by leveraging the PyTorch framework and creating a machine-learning model",
        "Achieved accurate feature extraction by training the model on grayscale images and designing a custom CNN architecture with multiple convolutional layers",
        "Utilized MSE loss function to reduce loss by ∼ 98% resulting in more realistic and vibrant images",
        "Tuned hyperparameters such as learning rate and batch size to optimize the model by ∼ 10%"],
    "type":"Team",
    "techs":["CNN's","PyTorch"]
}

const kendra = {

    "title":"Kendra - Web Application",
    "from":"August 2022",
    "techs":["Mongo-DB","React.js","Express.js","Node.js"],
    "bullets":["Utilized React and customized MUI components to develop a visually appealing task/course management solution for university students",
    "Implemented Redux as a state management solution reducing API calls by ∼20% and eliminating code redundancy",
    "Employed Node.js for server-side JavaScript execution and Express.js to write a scalable RESTful API",
    "Integrated Mongoose API seamlessly into the MERN stack, ensuring a cohesive data schema and facilitating data validation"]
}

const foodie = {
    "bullets":["Developed a web application empowering users to access restaurant recommendations, save their favorite restaurants and post reviews",
        "Conducted thorough API testing using Postman minimizing potential occurrences of critical errors",
        "Optimized database implementation by transitioning from Pouch-DB to Mongo-DB, enhancing scalability and enabling easy integration of additional features",
        "Collaborated with partners using the Git workflow and completed the project 7 days ahead of schedule exceeding project requirements and quality"],
    "title":"FoodieFrenz - Web Application",
    "from":"May 2023",
    "techs":["Node.js","Express.js","Mongo-DB"]
}

//We will pass props on this component
function ProjectTile({info}){
    return(
            <Stack direction={"row"} spacing={2}>
                <Stack direction={"column"} sx={{border:"white"}} borderRadius={5} width="88%">
                        <Stack direction={"row"} spacing={1} marginTop={3} marginLeft={5}>
                            <Typography variant="h5" color={"white"} >{info.title}</Typography>
                            <Stack direction={"row"} spacing={1} display="flex">

                                { info.techs.map((x)=>{
                                    return <Chip label={x} variant="filled" sx={{color:"white"}}/>
                                })}

                            </Stack>
                            <Chip label={info.from} variant="outlined" sx={{color:"white"}}/>
                        </Stack>
                        <List sx={{listStyleType:"square",color:"white", marginLeft:"60px"}}>
                            { info.bullets.map((x)=>{
                                    return <ListItem sx={{display: "list-item"}}>{x}</ListItem>
                                })}
                        </List>
                </Stack>

                <Stack direction={"column"} spacing={5} paddingTop={3}>
                    <Button variant="outlined" startIcon={<GitHubIcon/>} sx={{color:"white"}}>
                        code
                    </Button>
                    <Button variant="outlined" startIcon={<LinkIcon/>} sx={{color:"white"}}>
                        link
                    </Button>
                </Stack>
            </Stack>

    )
}

export default function Projects(){
    return(
        //Main Stack
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={1}>
                <HandymanOutlinedIcon fontSize="large" sx={{color:"white",paddingTop:"2px"}}/>
                <Typography variant="h4" color={"white"}>Projects</Typography>
            </Stack>
            <ProjectTile info={imagecolor}/>
            <ProjectTile info={foodie}/>
            <ProjectTile info={kendra}/>
        </Stack>
    )
}
