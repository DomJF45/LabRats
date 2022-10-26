export const randomColor = () => {
  const colors = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500']
  const randColor = Math.floor(Math.random() * 5);
  return colors[randColor];
}