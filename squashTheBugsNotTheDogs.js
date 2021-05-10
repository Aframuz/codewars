function howManyDalmations(number) {
   const dogs = [
      "Hardly any",
      "More than a handful!",
      "Woah that's a lot of dogs!",
      "101 DALMATIONS!!!",
   ]

   const respond =
      number <= 10
         ? dogs[0]
         : number <= 50
         ? dogs[1]
         : number < 101
         ? dogs[2]
         : dogs[3]

   return respond
}
