let secretNumber = [1, 2, 5];
let number = 0;

while (number < 4) {
  if (number == 3) {
    console.log("Alcanzó el límite de intentos y el numero secreto es 125");
    break;
  }
  number++;

  secretNumber = prompt("Ingrese un numero tres digitos");

  if (secretNumber[0] == 1 && secretNumber[1] == 2 && secretNumber[2] == 5) {
    console.log("Adivinaste el numero. Felicitaciones");
    break;
  } else {
    if (
      secretNumber[0] == 1 &&
      secretNumber.includes(2) &&
      secretNumber.includes(5)
    ) {
      console.log("Numero 2 y 5 son pica y Numero 1 es fija");
    } else {
      if (
        secretNumber[1] == 2 &&
        secretNumber.includes(1) &&
        secretNumber.includes(5)
      ) {
        console.log("Numero 1 y 5 son pica y Numero 2 es fija");
      } else {
        if (
          secretNumber[2] == 5 &&
          secretNumber.includes(1) &&
          secretNumber.includes(2)
        ) {
          console.log("Numero 2 y 1 son pica y Numero 5 es fija");
        } else {
          if (secretNumber[0] == 1 && secretNumber.includes(2)) {
            console.log("Numero 2 pica y Numero 1 fija");
          } else {
            if (secretNumber[0] == 1 && secretNumber.includes(5)) {
              console.log("Numero 5 pica y Numero 1 fija");
            } else {
              if (secretNumber[1] == 2 && secretNumber.includes(1)) {
                console.log("Numero 1 pica y Numero 2 fija");
              } else {
                if (secretNumber[1] == 2 && secretNumber.includes(5)) {
                  console.log("Numero 1 pica y Numero 2 fija");
                } else {
                  if (secretNumber[2] == 5 && secretNumber.includes(1)) {
                    console.log("Numero 1 pica y Numero 5 fija");
                  } else {
                    if (secretNumber[2] == 5 && secretNumber.includes(2)) {
                      console.log("Numero 2 pica y Numero 5 fija");
                    } else {
                      if (secretNumber[0] == 1) {
                        console.log("numero 1 fija");
                      } else {
                        if (secretNumber[1] == 2) {
                          console.log("numero 2 fija");
                        } else {
                          if (secretNumber[2] == 5) {
                            console.log("numero 5 fija");
                          } else {
                            if (secretNumber.includes(1)) {
                              console.log("numero 1 pica");
                            } else {
                              if (secretNumber.includes(2)) {
                                console.log("numero 2 es pica");
                              } else {
                                if (secretNumber.includes(5)) {
                                  console.log("numero 5 pica");
                                } else {
                                  console.log(
                                    "El numero de tres digitos no tiene Pica ni Fija"
                                  );
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
