import { Stack, Typography } from '@mui/material';
import { useUserContext } from 'app/user.context';
import React, { useEffect } from 'react';
import Chart from "chart.js";
import dayjs from 'dayjs';

export default function Monitoring() {
    const { user } = useUserContext();

    useEffect(() => {
        if (!window) return;

    }, [user.bmiHistory]);

    return <>
        <Stack spacing={2}>
            <Typography
                ml={3}
                variant="h5">
                Monitoring
            </Typography>

            <canvas
                id="myChart" />
        </Stack>
    </>;
}
