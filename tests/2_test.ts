// ! Do not change this file

import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import testFunction from "../exercises/2.ts";

Deno.test("Exercise 2", () => {
  assertEquals(testFunction(10), [2, 4, 6, 8, 10]);
});
