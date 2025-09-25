// setup-profiles route intentionally removed. Schema changes must be done with migrations only.
export async function POST() {
  return new Response(JSON.stringify({ error: 'This route has been removed' }), { status: 410 })
}
