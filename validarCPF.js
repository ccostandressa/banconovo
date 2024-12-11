function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF é inválido por ser uma sequência de dígitos iguais (ex: 11111111111)
    }

    let sum = 0;
    let remainder;

    // Verifica o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }

    sum = 0;
    // Verifica o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true; // CPF é válido
}
