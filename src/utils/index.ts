export function shortenString(text: string, size: number = 20) {
  return text.length > size ? `${text?.slice(0, size)} ...` : text;
}
