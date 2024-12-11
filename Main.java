import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Bem-vindo ao Banco Virtual!");
        
        // Simulação de um banco de dados com usuários
        User user = new User("usuario1", "senha123");
        BankAccount account = new BankAccount(user, 1000.00);

        // Autenticação
        System.out.print("Usuário: ");
        String inputUsername = scanner.nextLine();
        System.out.print("Senha: ");
        String inputPassword = scanner.nextLine();

        if (inputUsername.equals(user.getUsername()) && inputPassword.equals(user.getPassword())) {
            System.out.println("Login bem-sucedido!");
            System.out.println("Saldo atual: R$ " + account.getBalance());
        } else {
            System.out.println("Usuário ou senha incorretos.");
        }

        scanner.close();
    }
}
