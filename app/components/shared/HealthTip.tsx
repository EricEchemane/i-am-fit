import { Paper, Stack, Typography } from '@mui/material';
import { HealthTip } from 'constants/health-tips';
import React from 'react';

interface Props {
    tip: HealthTip;
}

export default function HealthTipComponent({ tip }: Props) {
    return (
        <Paper
            elevation={1}>
            <Stack
                p={2}
                spacing={2}>
                <Typography variant='h5'>
                    {tip.title}
                </Typography>
                <Typography>
                    {tip.description}
                </Typography>
            </Stack>
        </Paper>
    );
}
