// ! Do not change this file

import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import testFunction from "../exercises/3.ts";

Deno.test("Exercise 3", () => {
  assertEquals(testFunction(100, 10), true);
  assertEquals(testFunction(7, 3), false);
});
