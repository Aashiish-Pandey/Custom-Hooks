import { useEffect, useRef } from "react";

export function useUpdateEffect(callback, dependency) {
  const isMounted= useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }
    callback();
  }, dependency);
}
