function pitchClass(note) {
   notes = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
   console.log(note)
   if (note.length > 2) return null

   if (note.length === 2) {
      if (note.includes("#")) {
         if (note[0] === "B") return 0
         else return notes[note[0]] + 1
      }
      if (note.includes("b")) {
         if (note[0] === "C") return 11
         else return notes[note[0]] - 1
      } else return null
   }

   return notes[note[0]]
}

// ANSWERS
function pitchClass(note) {
   if (!/^[A-G][#b]?$/.test(note)) return null

   var pitch = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
   var accidental = { "#": 1, b: -1 }

   return (12 + pitch[note[0]] + (accidental[note[1]] || 0)) % 12
}
