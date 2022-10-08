
import connectToDatabase from "db/connect";
import { IUser } from "db/user.schema";
import { NextApiRequest } from "next";
import { JWT } from "next-auth/jwt";
import normalize, { RequestError } from "utils/response_normalize";

async function handler(req: NextApiRequest, token: JWT) {
    if (req.method !== "POST") throw new RequestError(405, "Method not allowed");

    const { bmi, bmr, height, weight } = req.body;
    if (!bmi || !bmr || !height || !weight) throw new RequestError(400, "Bad request");

    const db = await connectToDatabase();
    if (!db) throw new RequestError(500, "Cannot connect to database");

    const { User } = db.models;
    const user = await User.findOneAndUpdate({
        email: token.email,
    }, {
        $push: {
            bmiHistory: { date: new Date().toString(), bmi, height, weight },
            bmrHistory: { date: new Date().toString(), bmr, height, weight },
        }
    });

    return user;
}

export default normalize(handler);