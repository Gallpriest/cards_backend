import type { Payload } from "../../types";
import type { Repository } from "../../repository";

class DeckService {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public async getDeck(payload: Payload<Repository["getDeck"]>) {
    return await this.repository.getDeck(payload);
  }

  public async createDeck(payload: Payload<Repository["createDeck"]>) {
    return await this.repository.createDeck(payload);
  }

  public async deleteDeck(payload: Payload<Repository["deleteDeck"]>) {
    return await this.repository.deleteDeck(payload);
  }

  public async updateDeck(payload: Payload<Repository["updateDeck"]>) {
    return await this.repository.updateDeck(payload);
  }
}

export { DeckService };
