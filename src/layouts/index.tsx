import {Box, useTheme} from "@mui/material";
import LeftAside from "./left.layout";
import MainLayout from "./main.layout";
import RightAside from "./right.layout";

export default function Layout (){
    const theme = useTheme();
    return (
        <Box>
            <LeftAside />
            <Box component="section" bgcolor="primary">
                <MainLayout />
                <RightAside />
            </Box>
        </Box>
    )
}