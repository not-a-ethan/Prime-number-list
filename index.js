let composite = false

for (let j = 2; j < 9007199254740991; j++) {
  for (let i = 2; i < j; i++) {
    if (j % i === 0 && j !== i){
      composite = true
    }
    
  }

  if (composite === false) {
   console.log(j)
  }
  composite = false
}