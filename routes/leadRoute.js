import express from 'express'
export const lead = express()
import { postLead , getNoCalledLeads } from '../controllers/leadController.js'

lead.post('/', postLead)
lead.get('/', getNoCalledLeads)