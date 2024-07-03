import { rgbToHex, Stack } from "@mui/system";
import { Button, Fab, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import '../layout.css'
import {Container} from "@mui/system";
import {Chip} from "@mui/material";
import SettingsEthernetSharpIcon from '@mui/icons-material/SettingsEthernetSharp';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {Tooltip} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { MailOutlineOutlined } from "@mui/icons-material";

function ThemeType() {
    return (
      <Stack direction="row" spacing={2}>
        <Tooltip title="light mode soon!">
            <Button variant="contained"
            startIcon={<LightModeIcon sx={{paddingLeft:"10px"}}/>} sx={{color:"orange", backgroundColor:"rgba(217, 217, 217, 0.20)", height:"50px",width:"50px"}}/>
        </Tooltip>
        <Button variant="contained" size="large" 
        endIcon={<DarkModeIcon sx={{paddingRight:"10px"}}/>} sx={{color:"white",backgroundColor:"rgba(217, 217, 217, 0.20)",height:"50px", width:"50px"}} />
      </Stack>
    );
  }

function About(){
    return(
        <Stack direction="column" spacing={10}>
            <ThemeType/>
            <Stack direction="column" spacing={0.5}>
                <Typography variant="h3" color="white" fontFamily={"Roboto Slab"} fontWeight="700" fontSize={"60px"}>Raaj</Typography>
                <Typography variant="h6" color={"white"} fontWeight="10">University of Massachussets, Amherst</Typography>
                <Stack>
                    <Typography variant="h6" color={"white"} fontWeight="10">B.S. Computer Science | Minor in Math</Typography>
                    <Typography variant="h6" color={"white"} fontWeight="40">Graduation Date: May 2024</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

function Descript(){
    return (
        <Stack margin={6} spacing={3}>
            <Typography variant="h7" fontWeight={"4px"} color={"white"}>I'm passionate about creating beautifully designed and human-centric products that seamlessly integrate into people's lives.</Typography>
            <Typography variant="h7" fontWeight={"4px"} color={"white"}>The intersection of creativity and technology is where my passion thrives, and music, as a form of art, has always been a significant source of inspiration for me.</Typography>
            <Stack spacing={1} direction={"row"}>
                <StarBorderOutlinedIcon fontSize="small" sx={{color:"white"}}/>
                <Typography variant="h7" fontWeight={"4px"} color={"white"}>Fun Fact: I am the co-captain of a collegiate dance team called UMass Jazba which competes all over the U.S!</Typography>
            </Stack>
            <Stack spacing={1} direction={"row"}>
                <Button variant="outlined" href="https://linkedin.com/in/raajveers" target={"_blank"}
                sx={{borderRadius:"20px",color:"white"}} startIcon={<LinkedInIcon/>}>LinkedIn</Button>
                <Button variant="outlined" href="https://github.com/RaajveerX" target={"_blank"}
                sx={{borderRadius:"20px",color:"white"}} startIcon={<GitHubIcon/>}>GitHub</Button>
                <Button variant="contained" disableTouchRipple disableFocusRipple disableRipple sx={{borderRadius:"20px",backgroundColor:"rgba(217, 217, 217, 0.16);",color:"white",textTransform:"none"}} startIcon={<MailOutlineOutlined/>}>raajveersokhi@gmail.com</Button>
            </Stack>
        </Stack>
    )
}

const skills = ["Git", "GitHub", "Postman", "Figma",
"React.js", "Node.js", "Express.js", "Redux", "MUI", "Axios", "Mongo-DB", "PyTorch", "ServiceNow", "Azure"]

const languages = ["Python", "JavaScript", "Java", "C", "C++", "C#", "CSS", "HTML"]

const courses = ["Web Programming", "Machine Learning", "Artificial Intelligence (AI)", "Data Structures", "Algorithms", "Object-Oriented programming", "Operating Systems","Programming Methodology","Secure Distributed Systems","Information Retrieval", "UI/UX Design"]

function Skills(){
    return (
        <Stack margin={5} spacing={3}>
            <Stack spacing={1} direction={"row"}>
                <SettingsEthernetSharpIcon fontSize="medium" sx={{color:"white",paddingTop:"2px"}}/>
                <Typography variant="h6" color={"white"} paddingLeft={0}>Technologies I have worked with</Typography>
            </Stack>
            <Container>
                <Stack direction="row" spacing={1} overflow="scroll" paddingBottom={4}>
                    {
                        skills.map((x)=>{
                            return <Chip label={x} variant="outlined" size="medium" sx={{color:"white", height:"10"}}/>
                        })

                    }
                </Stack>
            </Container>
            <Stack spacing={1} direction={"row"}>
                <TranslateOutlinedIcon fontSize="medium" sx={{color:"white",paddingTop:"2px"}}/>
                <Typography variant="h6" color={"white"} paddingLeft={0}>Languages</Typography>
            </Stack>
            <Container>
                <Stack direction="row" spacing={1} overflow="scroll" paddingBottom={4}>
                    {
                        languages.map((x)=>{
                            return <Chip label={x} variant="outlined" size="medium" sx={{color:"white", height:"10"}}/>
                        })

                    }
                </Stack>
            </Container>
            <Stack spacing={1} direction={"row"}>
                <LibraryBooksOutlinedIcon fontSize="medium" sx={{color:"white",paddingTop:"3px"}}/>
                <Typography variant="h6" color={"white"} paddingLeft={0}>Courses I have taken</Typography>
            </Stack>
            <Container>
                <Stack direction="row" spacing={1} overflow="scroll" paddingBottom={4}>
                    {
                        courses.map((x)=>{
                            return <Chip label={x} variant="outlined" size="medium" sx={{color:"white", height:"10"}}/>
                        })
                    }
                </Stack>
            </Container>
        </Stack>
    )
}



export default function Intro(){
    return(
        <div className="parent"> 
            <div className="div1"> <About/></div> 
            <div className="div2"> <Descript/> </div> 
            <div className="div3"> <Skills/></div> 
        </div>
    )
}
