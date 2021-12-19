is_prime = (n) => {
    for (let i = 2; i <= n / 2; ++i) if (!(n % i)) return false;
    return true;
  };
  
  document.getElementById("button").onclick = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = [];
    for (let i = num1; i <= num2; ++i) if (is_prime(i)) result.push(i);
    alert(`Prime numbers are ${result}`);
  };