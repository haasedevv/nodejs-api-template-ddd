import { Knex } from "knex";
class BaseRepository<T extends object> {
  protected readonly db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  public async add({ entity, table }: { entity: T; table: string }): Promise<T> {
    try {
      const [result] = await this.db(table).insert(entity).returning("*");
      return result;
    } catch (error) {
      console.error("Error adding entity:", error);
      throw error;
    }
  }

  public async update({ entity, table, id }: { entity: T; table: string; id: number }): Promise<T> {
    try {
      const [result] = await this.db(table).where({ id }).update(entity).returning("*");
      return result;
    } catch (error) {
      console.error("Error updating entity:", error);
      throw error;
    }
  }

  public async delete({ id, table }: { id: number; table: string }): Promise<T> {
    try {
      const [result] = await this.db(table).where({ id }).del().returning("*");
      return result;
    } catch (error) {
      console.error("Error deleting entity:", error);
      throw error;
    }
  }

  public async findById({ id, table }: { id: number; table: string }): Promise<T | null> {
    try {
      const result = await this.db(table).where({ id }).first();
      return result || null;
    } catch (error) {
      console.error("Error finding entity by ID:", error);
      throw error;
    }
  }

  public async findAll({ table }: { table: string }): Promise<T[]> {
    try {
      const results = await this.db(table).select("*");
      return results;
    } catch (error) {
      console.error("Error finding all entities:", error);
      throw error;
    }
  }
}

export default BaseRepository;
