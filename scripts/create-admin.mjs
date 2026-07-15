import bcrypt from 'bcryptjs';
import { Client } from 'pg';

const email = process.argv[2] || 'admin@lamat.com';
const password = process.argv[3] || 'Admin123!@#';

const hash = await bcrypt.hash(password, 10);

console.log('\n=== Admin User Credentials ===');
console.log(`Email: ${email}`);
console.log(`Password: ${password}`);
console.log(`Hash: ${hash}\n`);

if (!process.env.DATABASE_URL) {
  console.log('Skipping DB insert (DATABASE_URL not set)');
  console.log('\nRun with DATABASE_URL set to insert into database:');
  console.log(`  DATABASE_URL=... node scripts/create-admin.mjs ${email} ${password}`);
  process.exit(0);
}

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

try {
  await client.query(
    'INSERT INTO admin_users (email, password_hash) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash',
    [email, hash]
  );
  console.log(`✓ Admin user created/updated in database`);
} catch (err) {
  console.error('✗ Database error:', err.message);
  process.exit(1);
} finally {
  await client.end();
}
