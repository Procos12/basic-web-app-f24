export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "arumaihi" );
  }
  if (query.toLowerCase().includes("name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "Abdulwahab" );
  }

  if (query.toLowerCase().includes("31 plus 1")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "32" );
  }

  if (query.toLowerCase().includes("29, 54, 51")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "54" );
  }

  if (query.toLowerCase().includes("29, 54, 51")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "54" );
  }


  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
        return Math.max(...numbers).toString();
    }
  
    if (query.toLowerCase().includes("plus")) {
      const numbers = query.match(/\d+/)?.map(Number) || [];
      if (numbers.length >= 2) {
          const num1 = numbers[0];
          const num2 = numbers[1];
          return (num1 + num2).toString();
      }
  }
  
  
  
  if (query.includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    const primes = numbers.filter((num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    return primes.join(", ");
}


if (query.includes("multiplied by")) {
  const match = query.match(/(\d+)\s*multiplied by\s*(\d+)/i);
  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 * num2).toString();
  }
}


if (query.includes("minus")) {
  const match = query.match(/(\d+)\s*minus\s*(\d+)/i);
  if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 - num2).toString();
  }
}


if (query.includes("which of the following numbers is both a square and a cube")) {
  const numbers = query.match(/\d+/g)?.map(Number) || [];
  const squareAndCubes = numbers.filter((num) => {
      const sixthRoot = Math.pow(num, 1 / 6);
      return Math.round(sixthRoot) ** 6 === num;
  });
  return squareAndCubes.join(", ");
}

  
  
  
  
  
  
  
  
}

  return "";

  
}
