export async function parseStringToObj(inputString) {
  const regex = /: ([^;]+)/g;

  let match;
  const wordsAfterColon = [];

  // Use the regex to find all matches and extract the words after each ":"
  while ((match = regex.exec(inputString)) !== null) {
    wordsAfterColon.push(match[1].trim());
  }
  console.log(wordsAfterColon, "WORD");

  if (wordsAfterColon.length === 0) {
    return;
  }

  return {
    Departure: wordsAfterColon[0],
    Destination: wordsAfterColon[1],
    DepartureDate: wordsAfterColon[2].split(" to ")[0],
    ReturnDate: wordsAfterColon[2].split(" to ")[1],
  };
}
