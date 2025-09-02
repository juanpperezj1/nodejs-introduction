export default function getRandomNumber(): void {
  const random = Math.floor(Math.random() * 1000) + 1;
  console.log(`Random number: ${random}`);
}

getRandomNumber();
