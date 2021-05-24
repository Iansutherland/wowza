export default function deg2rad(degrees){
    return degrees * (Math.PI / 180);
  }
  
  export function getOrbitXY(deg, distance){
    const radians = deg2rad(deg);
    return {
      x: Math.cos(radians) * distance,
      y: Math.sin(radians) * distance
    }
  }