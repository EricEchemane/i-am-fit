import { Stack, Typography } from '@mui/material';
import { useUserContext } from 'app/user.context';
import BMICalculator from 'components/shared/BMICalculator';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
// import BMRCalculator from 'components/shared/BMRCalculator';

export default function HealthChecks() {
    const { user } = useUserContext();
    const [age, setAge] = useState(0);

    useEffect(() => {
        if (!user) return;
        const birhtDate = dayjs(user.birthDate);
        const currentDate = dayjs(new Date());
        setAge(currentDate.diff(birhtDate, 'years'));
    }, [user]);

    return <>
        <Typography
            px={3} mb={3}
            variant="h6">
            Your are {age} years old
        </Typography>
        <Stack
            direction="row"
            px={3}
            spacing={2}>

            <BMICalculator />
            {/* <BMRCalculator /> */}
        </Stack>
    </>;
}
