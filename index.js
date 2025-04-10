<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Calculadora Científica</title>
</head>
<body>
  <script>
    // Criação dinâmica de estilos
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        background: #0f172a;
        color: white;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .calc {
        background: #1e293b;
        padding: 20px;
        border-radius: 16px;
        display: grid;
        grid-template-columns: repeat(4, 80px);
        grid-gap: 10px;
        box-shadow: 0 0 20px #000;
      }

      .display {
        grid-column: span 4;
        height: 60px;
        background: #0f172a;
        color: #38bdf8;
        font-size: 2rem;
        text-align: right;
        padding: 10px;
        border-radius: 8px;
        box-sizing: border-box;
        overflow-x: auto;
      }

      button {
        font-size: 1.2rem;
        padding: 20px;
        border: none;
        border-radius: 8px;
        background: #334155;
        color: white;
        cursor: pointer;
        transition: 0.2s;
      }

      button:hover {
        background: #38bdf8;
        color: black;
      }

      button.operator {
        background: #f97316;
      }

      button.equal {
        background: #22c55e;
      }
    `;
    document.head.appendChild(style);

    // Criação do layout
    const container = document.createElement('div');
    container.className = 'calc';
    document.body.appendChild(container);

    const display = document.createElement('div');
    display.className = 'display';
    display.textContent = '0';
    container.appendChild(display);

    const buttons = [
      'C', '(', ')', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '√', '=',
    ];

    buttons.forEach(txt => {
      const btn = document.createElement('button');
      btn.textContent = txt;

      if (['/', '*', '-', '+'].includes(txt)) btn.classList.add('operator');
      if (txt === '=') btn.classList.add('equal');

      btn.onclick = () => handleClick(txt);
      container.appendChild(btn);
    });

    let input = '';

    function handleClick(value) {
      if (value === 'C') {
        input = '';
        display.textContent = '0';
      } else if (value === '=') {
        try {
          const result = eval(input.replace(/√/g, 'Math.sqrt'));
          display.textContent = result;
          input = result.toString();
        } catch (e) {
          display.textContent = 'Erro';
          input = '';
        }
      } else {
        input += value;
        display.textContent = input;
      }
    }
  </script>
</body>
</html>
