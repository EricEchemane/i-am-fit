/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import foods from 'constants/foods';
import { FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';

export default function CalorieMonitor() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [foodList, setFoodList] = useState(foods);

    useEffect(() => {
        filter === 'all'
            ? setFoodList(foods)
            : setFoodList(foods.filter((food) => food.category === filter));
    }, [filter]);

    return (
        <Stack px={4} spacing={2}>

            <Typography variant='h5'>
                Search for food
            </Typography>

            <Stack
                direction={'row'}
                spacing={2}>
                <TextField
                    sx={{ flex: 1 }}
                    type='search'
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
                        <MenuItem value={'sweet'}> Sweet </MenuItem>
                        <MenuItem value={'vegetable'}> Vegetable </MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            <Stack spacing={2}>
                {foodList.map((food, index) => (
                    <Paper key={index}>
                        <Stack
                            p={1}
                            direction={'row'}
                            alignItems={'center'}
                            spacing={2}>
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
                    </Paper>
                ))}
            </Stack>

        </Stack>
    );
}
