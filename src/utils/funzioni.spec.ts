import { assert, expect, describe, it } from "vitest";
import { calcolaCapacityFactor } from "./funzioni";

describe("Calcolo capacity factor", () => {
  //num prove 0
  it("Num prove 0 sampleCapacity valido, result deve essere 0", () => {
    assert.equal(calcolaCapacityFactor(0, 1), 0);
  });

  //Sample capacity 0
  it("Sample capacity 0 NumProve valido, result deve essere 0", () => {
    expect(calcolaCapacityFactor(1, 0)).eq(0);
  });

  //Divisione minore di 1
  it("Num prove 3 sampleCapacity 6, result deve essere 1", () => {
    expect(calcolaCapacityFactor(3, 6)).eq(1);
  });

  //Divisione uguale a 1
  it("Num prove 3 sampleCapacity 3, result deve essere 1", () => {
    expect(calcolaCapacityFactor(3, 3)).eq(1);
  });

  //Divisione maggiore di 1, Arrotondamento al integer successivo
  it("Num prove 3 sampleCapacity 2, result deve essere 2", () => {
    expect(calcolaCapacityFactor(3, 2)).eq(2);
  });

  //Divisione intera
  it("Num prove 4 sampleCapacity 2, result deve essere 2", () => {
    expect(calcolaCapacityFactor(4, 2)).eq(2);
  });
});
