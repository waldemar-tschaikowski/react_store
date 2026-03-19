export async function fetchDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const { message } = await res.json();
  return message;
}
