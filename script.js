let historyBox = document.getElementById("history");
let accountInput = document.getElementById("accountBalance");
let cashInput = document.getElementById("cashBalance");
let amountInput = document.getElementById("amount");

function updateBalances() {
  historyBox.value += `\n> Balances updated: Account = ${accountInput.value}, Cash = ${cashInput.value}`;
}

function deposit() {
  let amount = parseFloat(amountInput.value);
  let cash = parseFloat(cashInput.value);
  let account = parseFloat(accountInput.value);

  if (cash >= amount) {
    account += amount;
    cash -= amount;

    accountInput.value = account;
    cashInput.value = cash;

    historyBox.value += `\n> Deposited ${amount}`;
  } else {
    historyBox.value += `\n> Deposit failed: Not enough cash`;
  }
}

function withdraw() {
  let amount = parseFloat(amountInput.value);
  let cash = parseFloat(cashInput.value);
  let account = parseFloat(accountInput.value);

  if (account >= amount) {
    account -= amount;
    cash += amount;

    accountInput.value = account;
    cashInput.value = cash;

    historyBox.value += `\n> Withdrew ${amount}`;
  } else {
    historyBox.value += `\n> Withdrawal failed: Not enough account balance`;
  }
}
