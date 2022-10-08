
function calculateBmr(args: { weight: number, height: number, age: number; }, gender: "male" | "female"): number {
    if (gender === "male") {
        return 88.362 + (13.397 * args.weight) + (4.799 * args.height) - (5.677 * args.age);
    }
    else {
        return 447.593 + (9.247 * args.weight) + (3.098 * args.height) - (4.330 * args.age);
    }
}

export default function BMRCalculator() {
    return (
        <div>BMRCalculator</div>
    );
}
