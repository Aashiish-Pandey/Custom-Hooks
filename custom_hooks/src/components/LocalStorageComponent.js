import useLocalStorage from "./Hooks/useLocalStorage";
import useUpdateLogger from "./Hooks/useUpdateLogger";

export default function LocalStorageComponent() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}
