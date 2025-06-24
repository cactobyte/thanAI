import pool from '../db.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function createUser({ name, email, password }) {
  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
  const result = await pool.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
    [name, email, password_hash]
  );
  return result.rows[0];
}

export async function findUserByEmail(email) {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
} 