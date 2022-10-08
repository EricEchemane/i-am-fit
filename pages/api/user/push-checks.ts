
import connectToDatabase from "db/connect";
import { IUser } from "db/user.schema";
import { NextApiRequest } from "next";
import { JWT } from "next-auth/jwt";
import normalize, { RequestError } from "utils/response_normalize";

async function handler(req: NextApiRequest, token: JWT) {
    if (req.method !== "POST") throw new RequestError(405, "Method not allowed");

    const { bmi, bmr } = req.body;
    if (!bmi || !bmr) throw new RequestError(400, "Bad request");

    const db = await connectToDatabase();
    if (!db) throw new RequestError(500, "Cannot connect to database");

    const { User } = db.models;
    const user = await User.findOneAndUpdate({
        email: token.email,
    }, {
        $push: {
            bmiHistory: { date: new Date().toString(), bmi },
            bmrHistory: { date: new Date().toString(), bmr },
        }
    });

    return user;
}

export default normalize(handler);