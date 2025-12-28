interface PaymentGateway {
    process(amount: number): boolean;
}
class BankTransferGateway implements PaymentGateway {
    process(amount: number): boolean {
        console.log("Processing bank transfer of $" + amount);
        return true;
    }
}
class MockGateway implements PaymentGateway {
    process(amount: number): boolean {
        console.log("Mock processing of $" + amount + " (simulated failure)");
        return false; 
    }
}
class PaymentProcessor {
    private gateway: PaymentGateway;

    constructor(gateway: PaymentGateway) {
        this.gateway = gateway;
    }
    pay(amount: number): void {
        try {
            const success = this.gateway.process(amount);
            if (success) {
                console.log("Payment successful!");
            } else {
                throw new Error("Payment failed!");
            }
        } catch (error) {
            console.log("Error:", (error as Error).message);
        }
    }
}
const bankGateway = new BankTransferGateway();
const processor1 = new PaymentProcessor(bankGateway);
processor1.pay(100);
const mockGateway = new MockGateway();
const processor2 = new PaymentProcessor(mockGateway);
processor2.pay(50);