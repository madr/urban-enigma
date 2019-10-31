// Epleys formula for 1rm
export default (weight, reps) =>
  parseFloat(weight) + parseFloat(weight) * (parseInt(reps, 10) / 30);
