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
    if (bmi > 29.9) return "Obese";
    return "Normal";
}

interface Props {
    age: number;
    gender: string;
}

export default function BmiAndBmrCalculator({ age, gender }: Props) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [inferredBmiCategory, setInferredBmiCategory] = useState<BmiCategories>();
    const [bmi, setBmi] = useState<number | null>(null);
    const [bmr, setBmr] = useState<number | null>(null);
    const alertDialog = useAlertDialog();

    const calculateAndSave = () => {
        if (weight.trim() === '' || height.trim() === '') {
            alertDialog.show("Ooops! 😄", "Please enter your height and weight first.");
            return;
        }
        const newBmi = calculateBmi(+height, +weight);
        setBmi(newBmi);
        setBmr(calculateBmr({
            age,
            weight: +weight,
            height: +height
        }, gender as Gender));
        setInferredBmiCategory(inferBmiCategory(newBmi));
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
                <Typography component="div">
                    Your Body Mass Index is <Chip
                        label={`${bmi.toFixed(2)} - ${inferredBmiCategory}`}
                        variant='filled'
                        color={bmi >= 18.5 && bmi <= 24.9 ? "success" : "warning"} />
                </Typography>
                <Typography>
                    Your Body Metabolic Rate: {bmr}
                </Typography>

                {inferredBmiCategory === "Underweight" && <Stack spacing={2} py={2}>
                    <Typography>
                        Being underweight may weaken your immune system and put you at risk of osteoporosis. Ask your doctor what you can do to achieve a healthier weight or to address unexpected weight loss. For better health:
                    </Typography>
                    <Typography>
                        Embrace healthy eating by choosing a variety of nutrient-rich foods, including fruits, vegetables, and whole grains; healthy sources of protein, such as fish or beans; and energy-dense foods, such as olive oil, nuts, and dried fruits. To increase calorie intake, eat healthy snacks between meals such as whole-grain crackers and nuts.
                    </Typography>
                    <Typography>
                        Stay active. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity. Do strength training exercises for all major muscle groups at least twice a week. Aim to do a single set of each exercise using a weight or resistance level that can tire your muscles after about 12 to 15 repetitions.
                    </Typography>
                    <Typography>
                        Set action goals focused on specific healthy activities, such as building muscle through strength training.
                    </Typography>
                </Stack>}
                {inferredBmiCategory === "Normal" && <Stack spacing={2} py={2}>
                    <Typography>
                        Congratulations! Your healthy weight is well worth the effort. It reduces your risk of serious health conditions, including high blood pressure, heart disease, stroke, and diabetes. To maintain a healthy weight:
                    </Typography>
                    <Typography>
                        Embrace healthy eating by choosing a variety of nutrient-rich foods, including fruits, vegetables, and whole grains; healthy sources of protein, such as fish or beans; and smaller amounts of energy-dense food, such as olive oil, nuts, and dried fruits.
                    </Typography>
                    <Typography>
                        Stay active. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity. Do strength training exercises for all major muscle groups at least twice a week. Aim to do a single set of each exercise using a weight or resistance level that can tire your muscles after about 12 to 15 repetitions.
                    </Typography>
                    <Typography>
                        Set action goals focused on specific healthy activities such as improving muscle tone through strength training or increasing flexibility through stretching or yoga.
                    </Typography>
                </Stack>}
                {inferredBmiCategory === "Overweight" && <Stack spacing={2} py={2}>
                    <Typography>
                        Consider the many benefits of a healthy weight: reduced risk of heart disease, stroke, and diabetes, increased energy, and improved self-esteem. Talk with your doctor about the best weight-loss approach for you. To start:
                    </Typography>
                    <Typography>
                        Embrace healthy eating by choosing a variety of nutrient-rich foods, including fruits, vegetables, and whole grains; healthy sources of protein, such as fish or beans; and smaller amounts of energy-dense foods, such as olive oil, nuts, and dried fruits.
                    </Typography>
                    <Typography>
                        Increase your activity level. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity. Many adults will need to do more than the 150 minutes a week of moderate-intensity aerobic physical activity to lose weight or keep it off. Do strength training exercises for all major muscle groups at least twice a week. Aim to do a single set of each exercise using a weight or resistance level that can tire your muscles after about 12 to 15 repetitions. Before you start a new exercise program, ask your doctor about the right types of activity for you. Remember, even small amounts of activity provide immediate benefits.
                    </Typography>
                    <Typography>
                        Set action goals focused on specific healthy activities, such as starting a daily food and activity diary.
                    </Typography>
                </Stack>}
                {inferredBmiCategory === "Obese" && <Stack spacing={2} py={2}>
                    <Typography>
                        Consider the many benefits of a healthy weight: a reduced risk of heart disease, stroke, and diabetes, increased energy, and improved self-esteem. Talk to your doctor about the best weight-loss approach for you. To start:
                    </Typography>
                    <Typography>
                        Embrace healthy eating by choosing a variety of nutrient-rich foods, including fruits, vegetables, and whole grains; healthy sources of protein, such as fish or beans; and smaller amounts of energy-dense foods, such as olive oil, nuts, and dried fruits.
                    </Typography>
                    <Typography>
                        Increase your activity level. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity. Many adults will need to do more than the 150 minutes a week of moderate-intensity aerobic physical activity to lose weight or keep it off. Do strength training exercises for all major muscle groups at least twice a week. Aim to do a single set of each exercise using a weight or resistance level that can tire your muscles after about 12 to 15 repetitions. Remember, even small amounts of activity provide immediate benefits.
                    </Typography>
                    <Typography>
                        Set action goals focused on specific healthy activities to help manage weight, such as starting a daily food and activity diary.
                    </Typography>
                </Stack>}
            </Stack>}
    </>;
}
