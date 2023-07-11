let slider = document.getElementById("myRange")
let output = document.getElementById("password-length")
let length = 8
let buttons = document.querySelectorAll(".password")

let characterArray = [33, 64, 35, 36, 37, 38, 94, 42]
for (let i = 48; i < 58; i++) {
  characterArray.push(i)
}
for (let i = 65; i < 91; i++) {
  characterArray.push(i)
}
for (let i = 97; i < 123; i++) {
  characterArray.push(i)
}
output.textContent = "Length: " + slider.value

slider.addEventListener("input", (event) => {
  length = event.target.value
  output.textContent = "Length: " + length;
})

function generateRandomBetween(min, max, exclude) {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;

  if (exclude.includes(ranNum)) {
      ranNum = generateRandomBetween(min, max, exclude);
  }

  return ranNum;  
}

function generatePassword() {
  let password = ""
  let capital = Math.floor(Math.random()*length)
  let numeric = generateRandomBetween(0, length, [capital])
  let special = generateRandomBetween(0, length, [capital, numeric])
  let lower = generateRandomBetween(0, length, [capital, numeric, special])

  for (let i = 0; i < length; i++) {
    if (i === special) {
      password += String.fromCharCode(characterArray[generateRandomBetween(0, 8, [92])])
    }
    else if (i === numeric) {
      password += String.fromCharCode(characterArray[generateRandomBetween(8, 18, [92])])
    }
    else if (i === capital) {
      password += String.fromCharCode(characterArray[generateRandomBetween(18, 44, [92])])
    }
    else if (i === lower) {
      password += String.fromCharCode(characterArray[generateRandomBetween(44, 70, [92])])
    }
    else {
      password += String.fromCharCode(characterArray[generateRandomBetween(0, characterArray.length, [92])])
    }
  }
  return password;
}

function createPasswordList() {
  document.getElementById("password1").textContent = generatePassword()
  document.getElementById("password2").textContent = generatePassword()
  document.getElementById("password3").textContent = generatePassword()
  document.getElementById("password4").textContent = generatePassword()
  buttons.forEach(button => {
    button.style.color = 'white';
  });
}

function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      alert("Copied to clipboard");

    },
    () => {
      alert("Failure");

    },
  );
}

buttons.forEach(button =>  {
  button.addEventListener('click', () => {
    setClipboard(button.textContent)
  })
})

