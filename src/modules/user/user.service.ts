import { BaseService } from "@/modules/core/base.service";

class UserService extends BaseService {
  constructor() {
    super("/api/user");
  }
  async findByEmail(email: string) {
    return fetch(`${this.route}/email/${email}`);
  }
  async findById(id: string) {
    return fetch(`${this.route}/${id}`);
  }
}

export const userService = new UserService();
