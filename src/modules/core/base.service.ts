export class BaseService {
  constructor(protected readonly route: string) {
    this.route = route;
  }
  findAll() {
    return fetch(this.route);
  }
  find(id: string) {
    return fetch(`${this.route}/${id}`);
  }
  create(data: Record<string, unknown>) {
    return fetch(this.route, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
  update(id: string, data: Record<string, unknown>) {
    return fetch(`${this.route}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }
  delete(id: string) {
    return fetch(`${this.route}/${id}`, {
      method: "DELETE",
    });
  }
}
