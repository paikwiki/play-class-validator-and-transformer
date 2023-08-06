import { validateSync } from "class-validator";
import type { ValidationError } from "class-validator";

export class Validatable {
  validate() {
    const errors = validateSync(this);
    if (errors.length === 0) return;

    const errorMessage = this.generateErrorMessage(errors);
    throw new Error(`[${this.constructor.name}] ${errorMessage}`);
  }

  private generateErrorMessage(errors: ValidationError[]) {
    return errors
      .map(({ constraints }) => JSON.stringify(constraints))
      .join("\n");
  }
}
