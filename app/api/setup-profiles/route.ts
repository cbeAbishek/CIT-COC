import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL })

const SQL = `
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY,
  email text UNIQUE,
  full_name text,
  created_at timestamptz DEFAULT now()
);
`

export async function POST(request: Request) {
  const reqSecret = request.headers.get('x-setup-secret') || (await request.json()).secret
  if (!reqSecret || reqSecret !== process.env.SETUP_ROUTE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const client = await pool.connect()
    try {
      await client.query(SQL)
      return NextResponse.json({ ok: true, message: 'profiles table ensured' })
    } finally {
      client.release()
    }
  } catch (err) {
    console.error('setup-profiles error', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
