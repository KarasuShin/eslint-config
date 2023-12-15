export function interopDefault<T>(m: T): T extends { default: infer U } ? U : T {
  return (m as any).default || m
}
