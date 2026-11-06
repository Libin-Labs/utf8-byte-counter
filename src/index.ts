export function utf8ByteLength(value: string): number {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return new TextEncoder().encode(value).length;
}
