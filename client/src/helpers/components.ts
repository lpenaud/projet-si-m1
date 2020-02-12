import React from "react";

export function updateState<T, K extends keyof T>(comp: React.Component<unknown, T>, key: K, value: T[K]) {
  const state: T = { ...comp.state };
  state[key] = value;
  comp.setState(state);
}
