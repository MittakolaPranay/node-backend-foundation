import { User } from "../models/user.js"

export const getAllStaffMembers = async (req, res) => {
    try {
        const { name, email, _id, createdAt } = req.query;
        const filters = {
            role: 'staff'
        }

        if(name) {
            filters.name = {$regex: name, $options: 'i'}
        }

        if(email) {
            filters.email = email.toLowerCase();
        }
        if(_id) {
            filters._id = _id
        }

        if(createdAt) {
            const date = new Date(createdAt);
            filters.createdAt = {
                $gt: date,
                $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000)
            }
        }

        const staffMembers = await User.find(filters)
        res.status(200).json({
            staffMembers
        })
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch all staff members"
        })
    }
}



export const getStaffMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const staffMember = await User.findById(id);
        res.status(200).json({
            staffMember
        })
    } catch (error) {
        res.status(501).json({
            error: "Failed ro fetch staff member"
        })
    }
}
