/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import foods from 'constants/foods';
import { FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import useNotification from 'hooks/with_provider/useNotification';

type localCaloryType = {
    level: number;
    date: string;
};

export default function CalorieMonitor() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [foodList, setFoodList] = useState(foods);
    const [calories, setCalories] = useState(0);
    const notify = useNotification();

    // update calories fromlocal storage
    useEffect(() => {
        let currentCalories = localStorage.getItem('calories');
        if (!currentCalories) return;
        const localCalory: localCaloryType = JSON.parse(currentCalories);
        setCalories(localCalory.level);
    }, []);

    useEffect(() => {
        filter === 'all'
            ? setFoodList(foods)
            : setFoodList(foods.filter((food) => food.category === filter));
    }, [filter]);

    useEffect(() => {
        setFoodList(
            foods.filter((food) =>
                food.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery]);

    const addCalory = (calory: number) => {
        // increment calories and track the date in local storage
        const currentCalories = localStorage.getItem('calories');
        if (!currentCalories) {
            const localCalory: localCaloryType = {
                level: calory,
                date: new Date().toDateString()
            };
            localStorage.setItem('calories', JSON.stringify(localCalory));
            setCalories(localCalory.level);
            return;
        }
        const localCalory: localCaloryType = JSON.parse(currentCalories);
        if (localCalory.date === new Date().toDateString()) {
            localCalory.level += calory;
        } else {
            localCalory.level = calory;
            localCalory.date = new Date().toDateString();
        }
        localStorage.setItem('calories', JSON.stringify(localCalory));
        setCalories(localCalory.level);
    };

    return (
        <Stack px={4} spacing={2}>

            <Typography variant='h6'>
                You have consumed {calories} calories today
            </Typography>
            <Typography variant='h5'>
                Search for food
            </Typography>

            <Stack
                direction={'row'}
                spacing={2}>
                <TextField
                    sx={{ flex: 1 }}
                    type='search'
                    placeholder='start typing'
                    label='Search for food'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery} />
                <FormControl sx={{ width: 'max-content' }}>
                    <InputLabel id="category-filter"> Filter </InputLabel>
                    <Select
                        labelId="category-filter"
                        id="category-filter"
                        value={filter}
                        label="Filter"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <MenuItem value={'all'}> All </MenuItem>
                        <MenuItem value={'meat'}> Meat </MenuItem>
                        <MenuItem value={'grain'}> Grain </MenuItem>
                        <MenuItem value={'sweets'}> Sweets </MenuItem>
                        <MenuItem value={'vegetable'}> Vegetable </MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            <Stack
                flexWrap={'wrap'}
                direction={'row'}
                justifyContent='flex-start'>
                {foodList.map((food, index) => (
                    <Paper
                        sx={{ m: 1, width: 'min(300px, 100%)', height: 'min-content' }}
                        key={index}>
                        <Stack
                            p={1}
                            flexWrap={'wrap'}
                            spacing={1}>
                            <div className='food'>
                                <img src={food.image} alt={food.name} />
                            </div>
                            <Typography variant='h5'>
                                {food.name}
                            </Typography>
                            <Typography variant='body1'>
                                {food.calorie} calories
                            </Typography>
                        </Stack>

                        <Stack direction={'row'} justifyContent='flex-end'>
                            <IconButton onClick={() => {
                                addCalory(food.calorie);
                                notify(`Added ${food.calorie} calories to your total`, 'success');
                            }} aria-label="add" >
                                <AddIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Paper>
                ))}
            </Stack>

        </Stack>
    );
}
