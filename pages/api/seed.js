export default function handler(req, res) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({message: "No tiene acceso a esta api"})
    }


}