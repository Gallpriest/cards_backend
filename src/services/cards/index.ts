import type { Payload } from "../../types";
import type { Repository } from "../../repository";

class CardService {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public async allCards() {
    return await this.repository.allCards();
  }

  public async getCard(payload: Payload<Repository["getCard"]>) {
    return await this.repository.getCard(payload);
  }

  public async createCard(payload: Payload<Repository["createCard"]>) {
    return await this.repository.createCard(payload);
  }

  public async deleteCard(payload: Payload<Repository["deleteCard"]>) {
    return await this.repository.deleteCard(payload);
  }

  public async updateCard(payload: Payload<Repository["updateCard"]>) {
    return await this.repository.updateCard(payload);
  }
}

export { CardService };
