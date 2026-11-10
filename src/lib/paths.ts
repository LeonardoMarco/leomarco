/** Prefixa arquivos de public/ quando o site é servido em um subcaminho. */
export function publicAsset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
