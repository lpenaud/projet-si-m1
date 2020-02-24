export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>
