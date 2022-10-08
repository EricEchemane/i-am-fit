
function calculateBmi(height: number, weight: number): number {
    return weight / (height / 100) ** 2;
}

export default function BMICalculator() {
    return (
        <div>BMICalculator</div>
    );
}
