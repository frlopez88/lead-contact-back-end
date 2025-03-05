import { db } from "../cn.js"

export const postLead = async (req, res) => {

    const { full_name,
        phone_number,
        product_of_interest,
        note
    } = req.body

    const arr = [full_name, phone_number, product_of_interest, note]

    const sql = `insert into tbl_lead
                (full_name, phone_number, product_of_interest, note)
                values
                ($1, $2, $3, $4) returning id_lead, full_name`

    try {
        const result = await db.query(sql, arr)
        return res.json({ message: "Lead Created", lead: result })
    } catch (err) {
        const {message} = error
        return res.status(500).json({message})
    }



}

export const getNoCalledLeads = async (req, res)=>{

    const sql = `select * from tbl_lead
                where called = false`

    try {
        const result = await db.query(sql)
        return res.json(result)
    }catch(error){
        const {message} = error
        return res.status(500).json({message})
    }

}