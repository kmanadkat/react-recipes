const expensiveFibonacci = (n) => {
  if (n <= 1) return n
  return expensiveFibonacci(n - 1) + expensiveFibonacci(n - 2)
}

export {
  expensiveFibonacci
}