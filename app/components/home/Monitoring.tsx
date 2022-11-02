import { Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IUser } from 'db/user.schema';
import { useUserContext } from 'app/user.context';
import useFetch from 'hooks/useFetch';

const formatDate = (date: string) => {
    return dayjs(date).format("MM/DD/YYYY-MM:HHA");
};
const createHistoryData = (user: IUser, variant: 'bmi' | 'bmr') => {
    if (variant === 'bmi') return user.bmiHistory.map(({ bmi, date, weight }) => ({ bmi, date: formatDate(date || ''), weight }));
    return user.bmrHistory.map(({ bmr, date, weight }) => ({ bmr, date: formatDate(date || ''), weight }));
};

export default function Monitoring() {
    const { data } = useFetch("/api/user");
    const { user, dispatch } = useUserContext();

    useEffect(() => {
        if (data) dispatch({ type: "set user", payload: data.data });
    }, [data, dispatch]);

    return <>
        <Stack spacing={2} mb={5} pr={2}>
            <Typography
                ml={3}
                variant="h5">
                Monitoring
            </Typography>
            <ResponsiveContainer height={250}>
                <LineChart
                    data={createHistoryData(user, 'bmi')}>
                    <Line type="linear" dataKey="weight" stroke="#20871f" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis
                        interval={0}
                        dataKey="date"
                        angle={-60}
                        style={{ fontSize: ".7rem" }} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={40} />
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer height={250}>
                <LineChart
                    data={createHistoryData(user, 'bmi')}>
                    <Line type="linear" dataKey="bmi" stroke="#20871f" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis
                        interval={0}
                        dataKey="date"
                        angle={-60}
                        style={{ fontSize: ".7rem" }} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={40} />
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer height={250}>
                <LineChart
                    data={createHistoryData(user, 'bmr')}>
                    <Line type="linear" dataKey="bmr" stroke="#20871f" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis
                        interval={0}
                        dataKey="date"
                        angle={-60}
                        style={{ fontSize: ".7rem" }} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={40} />
                </LineChart>
            </ResponsiveContainer>
        </Stack>
    </>;
}
