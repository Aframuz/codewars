function getSize(width, height, depth) {
   const surfaceArea = 2*(width*height) + 2*(width*depth) + 2*(height*depth)
   const volume = width * height * depth
   return [surfaceArea, volume]

}
