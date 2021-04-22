function Ship(draft,crew) {
   this.draft = draft
   this.crew = crew
   
   this.isWorthIt = () => {
      return (this.draft -(1.5 * this.crew) > 20 )
   }
}

//ANSWERS
function Ship(draft,crew) {
   this.draft = draft;
   this.crew = crew;
  }
  
  Ship.prototype.isWorthIt = function(){
  return this.draft-(this.crew*1.5) > 20;
  }