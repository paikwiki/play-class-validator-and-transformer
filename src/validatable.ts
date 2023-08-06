import { validateSync } from "class-validator";
import type { ValidationError } from "class-validator";

export class Validatable {
  validate() {
    const errors = validateSync(this);
    if (errors.length === 0) return;

    throw new Error(this.generateErrorMessage(errors));
  }

  private generateErrorMessage(errors: ValidationError[]) {
    const details = errors
      .map(({ constraints }) => `  - ${JSON.stringify(constraints)}`)
      .join("\n");

    return `[${this.constructor.name}] ${errors.length} error(s)\n${details}`;
  }
}
