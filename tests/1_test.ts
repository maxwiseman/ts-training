// ! Do not change this file

import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import testFunction from "../exercises/1.ts";

Deno.test("Exercise 1", () => {
  assertEquals(testFunction([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
});
