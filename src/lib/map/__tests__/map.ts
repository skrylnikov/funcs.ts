import map from '../map';

describe('map', () => {
  it('array', () => {
    const r = map([{ i: 5 }, { i: 3 }], (element) => element.i);

    expect(r).toEqual([5, 3]);
  });
  it('currying', () => {
    const f = map((value: { n: number }) => value.n * 2);

    expect(f([{ n: 2 }, { n: 3 }])).toEqual([4, 6]);
  });

  it('array like', () => {
    const array = {
      length: 3,
      2: { a: 10 },
      0: { a: 5 },
      1: { a: 3 },
    };

    expect(map(array, (value) => value.a)).toEqual([5, 3, 10]);
  });
});