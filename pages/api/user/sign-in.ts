
import connectToDatabase from "db/connect";
import { NextApiRequest } from "next";
import { JWT } from "next-auth/jwt";
import normalize, { RequestError } from "utils/response_normalize";

async function handler(req: NextApiRequest, token: JWT) {
    if (req.method !== "POST") throw new RequestError(405, "Method not allowed");

    const { birthDate, yearLevel, gender } = req.body;

    const db = await connectToDatabase();
    if (!db) {
        throw new RequestError(500, 'Database connection failed');
    }

    const { User } = db.models;

    const user = new User({
        email: token.email,
        name: token.name,
        picture: token.picture,
        birthDate,
        yearLevel,
        gender
    });

    await user.save();

    return user;
}

export default normalize(handler);