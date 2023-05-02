import * as db from "../../database/db";
import User from "../../models/User";
import {initialData} from "../../database/seed-data";

export default async function handler(req, res) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({message: "No tiene acceso a esta api"})
    }

    await db.connect()
    await User.deleteMany()
    await User.insertMany(initialData.users)

    await db.disconnect()

    res.status(200).json({message: 'Proceso realizado correctamente'})
}