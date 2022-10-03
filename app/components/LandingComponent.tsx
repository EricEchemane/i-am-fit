import { Google } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function LandingComponent() {
    return <>
        <Head>
            <title> Health Companion </title>
        </Head>
        <Container maxWidth="md">
            <Stack
                alignItems="flex-start"
                spacing={4}
                py={4}>
                <Typography
                    component="h1"
                    variant="h2">
                    Health Companion
                </Typography>
                <Typography
                    component="h2"
                    variant="h6">
                    ❤️‍🩹Your health monitoring system and companion for better lifestyle and health awareness.
                </Typography>
                <Stack spacing={1}>
                    <Typography mb={1}>
                        Features:
                    </Typography>
                    <Typography>
                        ✅Body Mass Index (BMI Monitor)
                    </Typography>
                    <Typography>
                        ✅Body Metabolic Rate (BMR Monitor)
                    </Typography>
                    <Typography>
                        ✅Calorie Intake Calculator and Suggestion
                    </Typography>
                    <Typography>
                        ✅Daily health and nutrition tips and facts
                    </Typography>
                    <Typography>
                        ✅Daily health and nutrition tips and facts
                    </Typography>
                    <Typography>
                        ✅Health Status Monitor, Exercise Catalogs and more!
                    </Typography>
                </Stack>
                <Button
                    onClick={() => signIn("google")}
                    size="large"
                    variant="contained"
                    endIcon={<Google />}>
                    Continue with Google
                </Button>
            </Stack>
        </Container>
    </>;
}