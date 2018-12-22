
const mapArray = <Input, Output>(array: Input[] | ArrayLike<Input>, func: (value: Input) => Output): Output[] => {
  if (array instanceof Array) {
    return array.map(func);
  }
  const result: Output[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
};

function map<Input, Output>(arg1: (value: Input) => Output): (value: ArrayLike<Input> | Input[]) => Output[]
function map<Input, Output>(arg1: ArrayLike<Input> | Input[], arg2: (value: Input) => Output): Output[]
function map<Input, Output>(arg1: ((value: Input) => Output) | ArrayLike<Input> | Input[], arg2?: (value: Input) => Output):
  ((value: ArrayLike<Input> | Input[]) => Output[]) | Output[] {
  if (arg1 && (arg1 instanceof Array || typeof arg1.length === 'number') && arg2 && arg2 instanceof Function) {
    return mapArray(arg1 as ArrayLike<Input>, arg2);
  }
  if (arg1 && arg1 instanceof Function) {
    return (array: ArrayLike<Input> | Input[]) => mapArray(array, arg1);
  }
  throw new Error('bad args');
}

export default map;