//Exercicio 1
const formatString = (
    text: string
  ): string => {
    return text
      .toLowerCase()
      .replace(/[ôó]/g, "o")
      .replace(/[áàâ]/g, "a")
      .replace(/[í]/g, "i")
      .replace(/[ñ]/g, "n")
      .replace(/[^a-z]/g, "")
  }

const isOneEdit = (firstString: string, secondString: string): boolean => {
    const firstStringFormated = formatString(firstString)
    const secondStringFormated = formatString(secondString)
    
    if (Math.abs(firstStringFormated.length - secondStringFormated.length) > 1){
        return false
    }


    if(firstStringFormated.length > secondStringFormated.length){
        return firstStringFormated.includes(secondStringFormated)
    }

    if(secondStringFormated.length > firstStringFormated.length){
        secondStringFormated
        return secondStringFormated.includes(firstStringFormated)
    }

    let count = 0 //vai contar os caracteres diferentes

    for(let i =0; i<firstStringFormated.length; i++){
        if(firstString[i] !== secondStringFormated){
            count++
        }
    }

    return count === 1
}


console.log(isOneEdit("banana", "banan"))