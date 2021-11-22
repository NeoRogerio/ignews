import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Rogério' },
        { id: 2, name: 'Cibele' },
        { id: 3, name: 'Renan' },
    ]

    return response.json(users)
}