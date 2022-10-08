/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

interface IExercise {
    caloriesCanBurn: string;
    name: string;
    duration: string;
    image: string;
    overview: string;
}

const rows: IExercise[] = [
    {
        name: "High-knee Running",
        image: "https://user-images.githubusercontent.com/108642522/194210313-2130c2ba-c3fd-4857-8cf3-9c358938dd99.png",
        caloriesCanBurn: "240 to 355.5",
        duration: "30 minutes",
        overview: "High-knee running is a vigorous cardio workout. It raises your heart rate while strengthening your lower body. As a high-intensity exercise, high-knee running is useful for burning calories in a short amount of time.",
    },
    {
        name: "But Kicks",
        image: "https://user-images.githubusercontent.com/108642522/194211131-862ecfc4-2ea0-4047-9fef-cfccd0f695bf.png",
        caloriesCanBurn: "240 to 355.5",
        duration: "30 minutes",
        overview: "Butt kicks are a cardio workout, just like high-knee running. You can quickly burn calories within 30 minutes by doing butt kicks at a high intensity.",
    },
    {
        name: "Mountain Climber",
        image: "https://user-images.githubusercontent.com/108642522/194211359-9f5b67d8-4814-4fad-96fc-075ae0d45e76.png",
        caloriesCanBurn: "240 to 355.5",
        duration: "30 minutes",
        overview: "The mountain climber is a cardio exercise that doubles as a full-body workout. Since you need to use your entire body, you’ll burn a lot of calories in a short period of time.",
    },
    {
        name: "Swimming",
        image: "https://user-images.githubusercontent.com/108642522/194211664-a7d1b400-4f35-41f1-8e08-8cd83d66ec2f.png",
        caloriesCanBurn: "198 to 294",
        duration: "30 minutes",
        overview: "Swimming is a low-impact workout that burns energy while improving muscle strength, blood flow, and lung and heart capacity. Thirty minutes of casual swimming burns about the same number of calories as 30 minutes of jogging.",
    },
    {
        name: "Stationary Cycling",
        image: "https://user-images.githubusercontent.com/108642522/194211767-3c0cdc66-b0c5-4799-84e3-66c68010a197.png",
        caloriesCanBurn: "210 to 311",
        duration: "30 minutes",
        overview: "If you have access to a stationary bike, try intervals of high-intensity cycling. As a vigorous cardio workout, stationary bicycling can burn a significant number of calories in 30 minutes. Start with a five- minute warmup and alternate between one - minute speed and two - minute recovery intervals.On a scale from 0 to 10, your speed intervals should be 7 to 9. Your recovery intervals should be at 5 to 6.",
    },
    {
        name: "Sprints",
        image: "https://user-images.githubusercontent.com/108642522/194211860-c0aa7d33-5272-41a6-a9b0-65793668ebf8.png",
        caloriesCanBurn: "240 to 355.5",
        duration: "30 minutes",
        overview: "Generally, running is the best calorie-burning exercise. But if you don’t have enough time to go on a run, you can shorten your workout into high-intensity sprints. Your body will rapidly burn calories to fuel your workout. Before sprinting, warm up by doing jumping jacks or high- knee running.",
    },
];

export default function Exercises() {
    return (
        <Box px={3} pb={3}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Visual </TableCell>
                            <TableCell> Exercise Name </TableCell>
                            <TableCell> Calories Can Burn </TableCell>
                            <TableCell> Duration </TableCell>
                            <TableCell> Overview </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <img
                                        width={200}
                                        src={row.image}
                                        alt={row.name} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.caloriesCanBurn}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>{row.overview}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
