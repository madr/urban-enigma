// Epleys formula for 1rm
export default (weight, reps) =>
  Math.round(
    parseFloat(weight) + parseFloat(weight) * (parseInt(reps, 10) / 30)
  );
