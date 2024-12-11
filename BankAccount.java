import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class BankAccount {
    private User user;
    private double balance;
    private List<String> transactionHistory;

    // Construtor
    public BankAccount(User user, double initialBalance) {
        this.user = user;
        this.balance = initialBalance;
        this.transactionHistory = new ArrayList<>();
        recordTransaction("Conta criada com saldo inicial: R$ " + initialBalance);
    }

    // Método para obter o usuário da conta
    public User getUser() {
        return user;
    }

    // Método para obter o saldo da conta
    public double getBalance() {
        return balance;
    }

    // Método para obter o histórico de transações
    public List<String> getTransactionHistory() {
        return new ArrayList<>(transactionHistory); // Retorna uma cópia para segurança
    }

    // Método para depositar dinheiro na conta
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            recordTransaction("Depósito: R$ " + amount);
        } else {
            System.out.println("Erro: O valor do depósito deve ser positivo.");
        }
    }

    // Método para sacar dinheiro da conta
    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            recordTransaction("Saque: R$ " + amount);
        } else if (amount <= 0) {
            System.out.println("Erro: O valor do saque deve ser positivo.");
        } else {
            System.out.println("Erro: Saldo insuficiente para o saque.");
        }
    }

    // Método para transferir dinheiro para outra conta
    public boolean transfer(BankAccount recipient, double amount) {
        if (amount > 0 && balance >= amount) {
            this.withdraw(amount);
            recipient.deposit(amount);
            recordTransaction("Transferência enviada: R$ " + amount + " para " + recipient.getUser().getUsername());
            recipient.recordTransaction("Transferência recebida: R$ " + amount + " de " + this.user.getUsername());
            return true;
        } else if (amount <= 0) {
            System.out.println("Erro: O valor da transferência deve ser positivo.");
        } else {
            System.out.println("Erro: Saldo insuficiente para a transferência.");
        }
        return false;
    }

    // Método privado para registrar transações no histórico
    private void recordTransaction(String transactionDetail) {
        String transaction = transactionDetail + " em " + LocalDateTime.now();
        transactionHistory.add(transaction);
    }

    // Método para imprimir o histórico de transações
    public void printTransactionHistory() {
        if (transactionHistory.isEmpty()) {
            System.out.println("Nenhuma transação realizada.");
        } else {
            System.out.println("Histórico de Transações:");
            for (String transaction : transactionHistory) {
                System.out.println(transaction);
            }
        }
    }
}