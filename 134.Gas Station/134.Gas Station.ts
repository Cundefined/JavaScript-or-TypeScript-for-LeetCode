function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalStationGas: number = 0;
  let totalTravalCost: number = 0;

  for (let i: number = 0; i < gas.length; i++) {
    totalStationGas += gas[i];
    totalTravalCost += cost[i];
  }

  if (totalStationGas < totalTravalCost) {
    return -1;
  }

  let currentGas: number = 0;
  let startStation: number = 0;

  for (let i: number = 0; i < gas.length; i++) {
    currentGas = currentGas + gas[i] - cost[i];
    if (currentGas < 0) {
      startStation = i + 1;
      currentGas = 0;
    }
  }
  return startStation;
}
