import { Button, Chip, FormControl, FormHelperText, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import useAlertDialog from "hooks/with_provider/useAlertDialog";
import { useState } from "react";

type Gender = "male" | "female";
type BmiCategories = "Normal" | "Underweight" | "Overweight" | "Obese";

function calculateBmi(height: number, weight: number): number {
    return weight / (height / 100) ** 2;
}
function calculateBmr(args: { weight: number, height: number, age: number; }, gender: Gender): number {
    if (gender === "male") {
        return 88.362 + (13.397 * args.weight) + (4.799 * args.height) - (5.677 * args.age);
    }
    else {
        return 447.593 + (9.247 * args.weight) + (3.098 * args.height) - (4.330 * args.age);
    }
}
function inferBmiCategory(bmi: number): BmiCategories {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 25.0 && bmi <= 29.9) return "Overweight";
    if (bmi > 29.9) return "Underweight";
    return "Normal";
}

interface Props {
    age: number;
    gender: string;
}

export default function BmiAndBmrCalculator({ age, gender }: Props) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [bmr, setBmr] = useState<number | null>(null);
    const alertDialog = useAlertDialog();

    const calculateAndSave = () => {
        if (weight.trim() === '' || height.trim() === '') {
            alertDialog.show("Ooops! 😄", "Please enter your height and weight first.");
            return;
        }
        setBmi(calculateBmi(+height, +weight));
        setBmr(calculateBmr({
            age,
            weight: +weight,
            height: +height
        }, gender as Gender));
    };

    return <>
        <Grid
            container
            spacing={2}>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        value={weight}
                        placeholder="Enter your weight"
                        type="number"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setWeight(event.target.value);
                        }}
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-height"
                        value={height}
                        placeholder="Enter your height"
                        type="number"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setHeight(event.target.value);
                        }}
                        endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                        aria-describedby="outlined-height-helper-text"
                        inputProps={{
                            'aria-label': 'height',
                        }}
                    />
                    <FormHelperText id="outlined-height-helper-text">Height</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
        <Stack
            pt={3}
            direction="row"
            spacing={2}>
            <Button
                onClick={calculateAndSave}
                variant="outlined">
                Calculate my BMI and BMR
            </Button>
        </Stack>

        {bmi !== null && bmr !== null &&
            <Stack
                spacing={1}
                pt={4}>
                <Typography variant="h5">
                    Results:
                </Typography>
                <Typography>
                    Your Body Mass Index is <Chip
                        label={`${bmi.toFixed(2)} - ${inferBmiCategory(bmi)}`}
                        variant='filled'
                        color={bmi >= 18.5 && bmi <= 24.9 ? "success" : "warning"} />
                </Typography>
                <Typography>
                    Your Body Metabolic Rate: {bmr}
                </Typography>
            </Stack>}
    </>;
}
