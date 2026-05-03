// shared/lib/utils/validate-step.ts
import { z } from "zod";

import { UseFormReturn, Path } from "react-hook-form";

export async function validateStep<T extends Record<string, unknown>>(
  form: UseFormReturn<T>,          
  schema: z.ZodTypeAny,
  fields: Path<T>[]
): Promise<boolean> {
  const values = form.getValues();
  const subset = Object.fromEntries(fields.map((f) => [f, values[f]]));
  const result = schema.safeParse(subset);

  form.clearErrors(fields);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as Path<T>;
      form.setError(field, { message: issue.message });
    });
    return false;
  }
  return true;
}