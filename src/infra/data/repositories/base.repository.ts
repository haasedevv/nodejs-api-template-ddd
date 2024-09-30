import DbContext from "../context/db.context";

class BaseRepository<T extends object> {
  protected readonly db: DbContext;

  constructor() {
    this.db = new DbContext();
  }

  public async add({ entity, table }: { entity: T; table: string }): Promise<T> {
    try {
      const columns = Object.keys(entity)
        .map((key) => `"${key}"`)
        .join(", ");
      const values = Object.values(entity);
      const placeholders = values.map((_, index) => `$${index + 1}`).join(", ");
      const query = `INSERT INTO "${table}" (${columns}) VALUES (${placeholders}) RETURNING *`;
      const res = await this.db.query(query, values);

      return res.rows[0];
    } catch (error) {
      console.error("Error adding entity:", error);
      throw error;
    }
  }

  public async update<T extends object>({ entity, table, id }: { entity: T; table: string; id: number }): Promise<T> {
    try {
      const columns = Object.keys(entity);
      const values = Object.values(entity);
      const setClause = columns.map((col, index) => `"${col}" = $${index + 1}`).join(", ");
      const query = `UPDATE "${table}" SET ${setClause} WHERE id = ${id} RETURNING *`;
      const res = await this.db.query(query, [...values]);

      return res.rows[0];
    } catch (error) {
      console.error("Error updating entity:", error);
      throw error;
    }
  }

  public async delete({ id, table, column }: { id: number; table: string; column: string }): Promise<T> {
    try {
      const query = `DELETE FROM "${table}" WHERE "${column}" = $1 RETURNING *`;
      const res = await this.db.query(query, [id]);

      return res.rows[0];
    } catch (error) {
      console.error("Error deleting entity:", error);
      throw error;
    }
  }

  public async findById({ id, table }: { id: number; table: string }): Promise<T | null> {
    try {
      const query = `SELECT * FROM "${table}" WHERE id = $1`;
      const res = await this.db.query(query, [id]);

      return res.rows[0] || null;
    } catch (error) {
      console.error("Error finding entity by ID:", error);
      throw error;
    }
  }

  public async findAll({ table }: { table: string }): Promise<T[]> {
    try {
      const query = `SELECT * FROM "${table}"`;
      const res = await this.db.query(query);

      return res.rows;
    } catch (error) {
      console.error("Error finding all entities:", error);
      throw error;
    }
  }
}

export default BaseRepository;
