import { Pool } from 'pg';

const pool = new Pool({
  password: 'D11ur22a33ck',
  database: 'educational_platform',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
});

export default pool;
