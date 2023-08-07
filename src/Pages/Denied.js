import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Deniedasset from "../Assets/denied.svg"
import { Box } from "@mui/material"

export default function Denied(){
    return (
        <Stack spacing={2} textAlign={"center"} paddingTop={"80%"}>
            <Box sx={{textAlign:"center",}}>
                <img src={Deniedasset} width="50%"/>
            </Box>
            <Typography variant="h7" color={"white"}>ONLY SUPPORTED ON A DESKTOP</Typography>
        </Stack>
    )
}