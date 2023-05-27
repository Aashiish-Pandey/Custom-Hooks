import { useArray } from "../Hooks/useArray";

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div>
      <div>{array.join(",")}</div>
      <button onClick={() => push(7)}>add 7</button>
      <button onClick={() => update(1, 9)}>change second element to 9</button>
      <button onClick={() => remove(1)}>remove Second element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep number less than 4
      </button>
      <button onClick={() => set([1, 2])}>set to 1,2</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}
