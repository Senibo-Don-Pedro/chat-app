import express from 'express'

const router = express.Router()

router.get('/', protectRoute, getUsersForSidebar)

export default router