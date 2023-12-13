/* 
   FILE NAME: complex_code.js
   CONTENT: Complex JavaScript Code Example 
*/

// Constants
const PI = 3.14159;
const EARTH_RADIUS = 6371;  // in kilometers

// Helper Functions
function toRadians(degrees) {
  return degrees * (PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / PI);
}

// Class Definitions
class Point {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  distanceTo(point) {
    const lat1 = toRadians(this.latitude);
    const lon1 = toRadians(this.longitude);
    const lat2 = toRadians(point.latitude);
    const lon2 = toRadians(point.longitude);

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dlon / 2) * Math.sin(dlon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = EARTH_RADIUS * c;

    return distance;
  }
}

class Route {
  constructor() {
    this.points = [];
  }

  addPoint(point) {
    if (this.points.length > 0) {
      const previousPoint = this.points[this.points.length - 1];
      const distance = previousPoint.distanceTo(point);
      console.log(`Distance from last point: ${distance} km`);
    }

    this.points.push(point);
  }

  getTotalDistance() {
    let totalDistance = 0;

    for (let i = 1; i < this.points.length; i++) {
      const previousPoint = this.points[i - 1];
      const currentPoint = this.points[i];
      const distance = previousPoint.distanceTo(currentPoint);
      totalDistance += distance;
    }

    return totalDistance;
  }
}

// Main code
const pointA = new Point(52.520008, 13.404954);  // Berlin, Germany
const pointB = new Point(40.712776, -74.005974);  // New York, USA
const pointC = new Point(-33.868820, 151.209290);  // Sydney, Australia

const route = new Route();
route.addPoint(pointA);
route.addPoint(pointB);
route.addPoint(pointC);

console.log(`Total distance of the route: ${route.getTotalDistance()} km`);