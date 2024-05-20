import pg from "pg";

import { loadDevVariables } from "../env";

import type {
  CardRecord,
  CardGetPayload,
  CardCreatePayload,
  CardDeletePayload,
  CardUpdatePayload,
} from "./types";

const { Client, Pool } = pg;

class Repository {
  private pool: pg.Pool;
  private client: pg.Client;

  constructor() {
    this.pool = new Pool(this.loadClientVariables());
    this.client = new Client(this.loadClientVariables());
  }

  private loadClientVariables() {
    const {
      db: database,
      dbHost: host,
      dbPort: port,
      dbUser: user,
      dbPassword: password,
    } = loadDevVariables();

    return { host, user, port, password, database };
  }

  public async getCard(payload: CardGetPayload): Promise<CardRecord> {
    try {
      const {
        rows: [record],
      } = await this.pool.query<CardRecord>(
        "SELECT id, value, translation FROM cards WHERE id = $1;",
        [payload.id]
      );

      return record;
    } catch (error) {
      throw error;
    }
  }

  public async createCard(payload: CardCreatePayload): Promise<void> {
    try {
      await this.pool.query(
        "INSERT INTO cards (value, translation) VALUES ($1, $2);",
        [payload.value, payload.translation]
      );
    } catch (error) {
      throw error;
    }
  }

  public async updateCard(payload: CardUpdatePayload): Promise<void> {
    try {
      await this.pool.query(
        "UPDATE cards SET value=COALESCE($1, value), translation=COALESCE($2, translation) WHERE id=$3",
        [payload.value, payload.translation, payload.id]
      );
    } catch (error) {
      throw error;
    }
  }

  public async deleteCard(payload: CardDeletePayload): Promise<void> {
    try {
      await this.pool.query("DELETE FROM cards WHERE id=$1;", [payload.id]);
    } catch (error) {
      throw error;
    }
  }
}

export { Repository };