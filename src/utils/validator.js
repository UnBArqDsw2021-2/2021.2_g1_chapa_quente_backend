const validatePassword = password => {
  if (password.length < 6 && password.length > 16) {
    throw new Error(
      'Tamanho da senha inválida, o tamanho deve ser entre 6 e 16 caracteres',
    );
  }
};

module.exports = { validatePassword };
