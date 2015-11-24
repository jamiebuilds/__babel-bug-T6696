class A {
  call constructor() {}
  static foo() {
    return A
  }
}
console.assert(A.foo() === A);
