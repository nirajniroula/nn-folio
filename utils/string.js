var animArray = [
  "hover:animate-spin",
  "hover:animate-ping",
  "hover:animate-pulse",
];
export const getRandomAnim = () => {
  var randomNumber = Math.floor(Math.random() * animArray.length);
  return animArray[randomNumber];
};
