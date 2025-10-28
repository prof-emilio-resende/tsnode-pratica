export class BankAccount {
    number: number;
    balance: number;

    constructor(number?: number, balance?: number) {
        this.number = number ?? 0;
        this.balance = balance ?? 0;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
}