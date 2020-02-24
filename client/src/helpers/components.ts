import React from "react";

export function updateState<T, K extends keyof T>(comp: React.Component<unknown, T>, key: K, value: T[K]) {
  const state: T = { ...comp.state };
  state[key] = value;
  comp.setState(state);
}

export function getClassName<T>(props: T, keys: Array<keyof T>, ...classNames: string[]) {
  const cls = keys
    .filter((k) => props[k])
    .map<T[keyof T] | string>((k) => props[k])
  ;
  return classNames.concat(cls as string[]).join(" ");
}
