import { BankAccount } from  "../src/bank";

describe("Teste das funcionalidades de banco", () => {
  test("Deve inicializar uma conta bancaria", () => {
    // arrange
    const accNumber = 123;

    // act
    const acc = new BankAccount();
    acc.number = accNumber;

    // assert
    expect(acc.number).toBe(accNumber);
  });

  test("Deve construir uma conta bancaria com saldo inicial", () => {
    // arrange
    const accNumber = 123;
    const accBalance = 1000;

    // act
    const acc = new BankAccount(accNumber, accBalance);

    // assert
    expect(acc.number).toBe(accNumber);
    expect(acc.balance).toBe(accBalance);
  });

  test("Deve construir uma conta bancaria e efetuar deposito", () => {
    // arrange
    const accNumber = 123;
    const accBalance = 1000;
    const depositAmount = 500;

    // act
    const acc = new BankAccount(accNumber, accBalance);

    // assert
    expect(acc.number).toBe(accNumber);
    expect(acc.balance).toBe(accBalance);

    // act deposit
    acc.deposit(depositAmount);

    // assert deposit
    expect(acc.balance).toBe(accBalance + depositAmount);
  });
});