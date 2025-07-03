import wifiPassword from 'wifi-password';

try {
  const password = await wifiPassword(); // pega a senha do Wi-Fi atual
  console.log('Senha da rede atual:', password);
} catch (error) {
  console.error('Erro ao pegar a senha:', error.message);
}