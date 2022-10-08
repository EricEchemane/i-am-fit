/* eslint-disable @next/next/no-img-element */
import { Paper, Stack, Typography } from '@mui/material';
import { HealthTip } from 'constants/health-tips';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    tip: HealthTip;
}

export default function HealthTipComponent({ tip }: Props) {
    return (
        <Paper>
            <Stack
                spacing={1}
                alignItems="space-between">
                <Typography
                    p={2}
                    variant='h5'>
                    {tip.title}
                </Typography>

                <img
                    style={{ width: "100%" }}
                    src={tip.image}
                    alt={tip.title} />

                <Accordion elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> Read more </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography lineHeight={1.7}>
                            {tip.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Paper >
    );
}
