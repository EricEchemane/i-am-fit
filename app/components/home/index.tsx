import { Typography } from "@mui/material";
import HealthTipComponent from "components/shared/HealthTip";
import healthTips from "constants/health-tips";

export default function HomeComponent() {
    return <>
        <Typography
            ml={3} mb={1}
            variant="h4">
            Your weekly health tips
        </Typography>

        <div className="box-lists">
            {healthTips.map((tip, idx) => <HealthTipComponent key={idx} tip={tip} />)}
        </div>
    </>;
}
