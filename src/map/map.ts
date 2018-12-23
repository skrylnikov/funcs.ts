
type FArrayLike<Item> = Item[] | ArrayLike<Item>;

type FMapCallback<Input, Output> = (value: Input, index: number, array: FArrayLike<Input>) => Output;

const mapArray = <Input, Output>(array: FArrayLike<Input>, func: FMapCallback<Input, Output>): Output[] => {
  if (array instanceof Array) {
    return array.map(func);
  }
  const result: Output[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i], i, array));
  }
  return result;
};

function map<Input, Output>(callback: FMapCallback<Input, Output>): (value: FArrayLike<Input>) => Output[]
function map<Input, Output>(array: ArrayLike<Input> | Input[], callback: FMapCallback<Input, Output>): Output[]
function map<Input, Output>(arg1: (FMapCallback<Input, Output>) | FArrayLike<Input>, arg2?: FMapCallback<Input, Output>):
  ((value: FArrayLike<Input>) => Output[]) | Output[] {
  if (arg1 && (arg1 instanceof Array || typeof arg1.length === 'number') && arg2 && arg2 instanceof Function) {
    return mapArray(arg1 as ArrayLike<Input>, arg2);
  }
  if (arg1 && arg1 instanceof Function) {
    return (array: ArrayLike<Input> | Input[]) => mapArray(array, arg1);
  }
  throw new Error('bad args');
}

export default map;