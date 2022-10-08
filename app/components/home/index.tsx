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

        <div className="box-lists">
            {healthTips.map((tip, idx) => <HealthTipComponent key={idx} tip={tip} />)}
        </div>
    </>;
}
