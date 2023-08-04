export interface ICategory {
  id: string,
  name: string,
  validate(): void,
};

export class Category implements ICategory {

  id: string;
  name: string;

  constructor(name: string) {

    if (!name.trim()) {
      throw new Error('Category name cannot be empty!');
    }

    this.id = crypto.randomUUID();
    this.name = name;
  }

  validate(): void {

    if (!this.id?.trim()) {
      throw new Error('Category id cannot be empty!');
    }

    if (!this.name?.trim()) {
      throw new Error('Category name cannot be empty!');
    }
  }
};