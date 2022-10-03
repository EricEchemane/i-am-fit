import { Typography } from '@mui/material';
import React from 'react';

type Props = { children: string; };

export default function TitleHeading({ children }: Props) {
    return (
        <Typography
            variant='h2'
            component="h1">
            {children}
        </Typography>
    );
}