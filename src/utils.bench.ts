import { bench, describe } from "vitest";
import { arraySort, fibonacci, objectMerge } from "./utils";

describe("fibonacci", () => {
  bench("fibo 10", () => {
    fibonacci(10);
  });

  bench("fibo 15", () => {
    fibonacci(15);
  });
});

describe("arraySort", () => {
  const smallArray = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 1000)
  );

  const largeArray = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 100000)
  );

  bench("sort 100 items", () => {
    arraySort(smallArray);
  });

  bench("sort 10000 items", () => {
    arraySort(largeArray);
  });
});

describe("objectMerge", () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { d: 4, e: 5, f: 6 };
  const obj3 = { g: 7, h: 8, i: 9 };

  bench("merge 2 objects", () => {
    objectMerge(obj1, obj2);
  });

  bench("merge 3 objects", () => {
    objectMerge(obj1, obj2, obj3);
  });
});
