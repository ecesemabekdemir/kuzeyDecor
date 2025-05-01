"use server";

import { createServerAction } from "zsa";
import z from "zod";

export const incrementNumberAction = createServerAction()
  .input(
    z.object({
      number: z.number(),
    })
  )
  .handler(async ({ input }) => {
    // Sleep for .5 seconds
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Increment the input number by 1
    return input.number + 1;
  });
