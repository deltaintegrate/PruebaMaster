import pg from 'pg';
import dotenv from 'dotenv';


dotenv.config();

export class PostgresAutorRepository {
  constructor() {
    this.pool = new pg.Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
  }

  async obtenerAutorPorId(autorId) {
        const query = 'SELECT * FROM autores WHERE id = $1';
        const values = [autorId];
        const client = await this.pool.connect();
        try {
            const { rows } = await client.query(query, values);
            return rows[0];
        } finally {
            client.release();
        }
    }
}