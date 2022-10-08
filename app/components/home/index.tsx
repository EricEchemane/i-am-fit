import { Stack, Typography } from "@mui/material";
import HealthTipComponent from "components/shared/HealthTip";
import healthTips from "constants/health-tips";
import Head from "next/head";

export default function HomeComponent() {
    return <>
        <Head>
            <title> Weekly Health Tips </title>
        </Head>

        <Typography
            ml={2} mb={4}
            variant="h4">
            Your weekly health tips
        </Typography>

        <Stack
            m={2}
            spacing={4}>
            {healthTips.map((tip, idx) => <HealthTipComponent key={idx} tip={tip} />)}
        </Stack>
    </>;
}
