//La contraseña debe tener al menos 6 caracteres con una mayúscula, una minúscula y un número.

exports.regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
