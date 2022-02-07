// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  } else if (req.method === 'POST') {
    const prisma = new PrismaClient()
    await prisma.user.create({data: {email: "test1@mail.ru", name: "John"}})
    res.status(200).json({ name: 'POST method' })
  }
}
