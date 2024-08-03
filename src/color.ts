export function getColor(
  primary: boolean,
  secondary: boolean,
  transition = true,
) {
  let colorStyle = primary
    ? "bg-cyan-400 hover:bg-cyan-500"
    : "bg-teal-200 hover:bg-teal-300";
  if (transition) {
    colorStyle += " transition";
    return secondary
      ? "bg-emerald-300 hover:bg-emerald-400 transition"
      : colorStyle;
  }
  return secondary ? "bg-emerald-300 hover:bg-emerald-400" : colorStyle;
}
