function solution(bridgeLength, weight, truckWeights) {
  const firstTruck = truckWeights.shift();
  const bridge = new Array(bridgeLength - 1).fill(0);

  bridge.push(firstTruck);

  let bridgeWeight = firstTruck;
  let time = 1;

  while (bridgeWeight) {
    bridgeWeight = bridgeWeight - bridge.shift();

    const nextTruckWeight = truckWeights[0];

    if (weight > bridgeWeight + nextTruckWeight - 1) {
      bridge.push(nextTruckWeight);
      truckWeights.shift();
      bridgeWeight = bridgeWeight + nextTruckWeight;
    } else {
      bridge.push(0);
    }
    time++;
  }
  return time;
}
