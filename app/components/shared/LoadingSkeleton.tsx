import { Skeleton, Avatar, Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function LoadingSkeleton() {
    return <>
        <Container maxWidth="md">
            <Stack
                direction="row"
                spacing={3}
                py={5}>
                <Skeleton variant="rounded" width="100%">
                    <Typography />
                </Skeleton>
                <Skeleton variant="circular">
                    <Avatar />
                </Skeleton>
            </Stack>
            <Skeleton
                variant="rounded"
                height="50vh"
                width="100%" />
            <Skeleton
                sx={{ mt: 2 }}
                variant="rounded"
                height="1rem"
                width="100%" />
        </Container>
    </>;
}
