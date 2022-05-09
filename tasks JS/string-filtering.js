const string = "Привет! Как дела?";

const vowels = ["а", "ё", "и", "у", "о", "э", "ы", "е"]

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i];
        
        if (vowels. includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
     }

    return extractedVowels;

}

console.log(getVowels(string));
