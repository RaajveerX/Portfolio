import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import {Stack} from "@mui/material";
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export default function Outro(){
    return(
        <div>
            <Stack>
                <Stack sx={{background:"rgba(0, 0, 0, 0.15)",borderRadius:"50px",padding:"15px"}} direction={"row"} spacing={3}>
                    <Stack spacing={1} direction={"row"} paddingLeft="10px">
                        <BuildOutlinedIcon sx={{color:"gray",paddingTop:"7px"}} fontSize="small" />
                        <Typography color={"white"} paddingTop={"6px"}>Made with React.js, JavaScript, MUI and CSS</Typography>
                    </Stack>
                    <Button variant="outlined" sx={{color:"white",borderColor:"white",textTransform:"none",borderRadius:"50px"}}>Code for this website</Button>
                    <Button href="/upcoming" variant="outlined" sx={{color:"white",backgroundColor:"rgba(0, 0, 0, 0.3)",textTransform:"none",borderRadius:"50px"}}>Upcoming Projects</Button>
                </Stack>
                <Stack>

                </Stack>
            </Stack>
        </div>
    )
}