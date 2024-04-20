import mongoose from "mongoose"

export const connectToDb = async () => {
    let isConnected = false

    if (isConnected) {
        console.log('Alredy connected')
        return
    }
    await mongoose.connect(process.env.NEXT_PUBLIC_DB)
    console.log('Connected to DB')
    isConnected = true
}