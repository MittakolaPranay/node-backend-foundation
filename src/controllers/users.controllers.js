import { User } from "../models/user.js"

export const getAllStaffMembers = async (req, res) => {
    try {
        const staffMembers = await User.find({role: 'staff'})

        res.status(201).json({
            staffMembers
        })
    } catch (error) {
        res.status(501).json({
            error: "Failed to fetch all staff members"
        })
    }
}