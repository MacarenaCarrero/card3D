let uniqueNumbers = [];

const generateUniqueNumbers = () => {
  while (uniqueNumbers.length < 6) {
    const number = Math.floor(Math.random() * 11);
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }
  uniqueNumbers = [...uniqueNumbers, ...uniqueNumbers];

  uniqueNumbers.sort(() => Math.random() - 0.5);

  console.log(uniqueNumbers);
};
generateUniqueNumbers();
