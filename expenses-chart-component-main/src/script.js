async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  setHeights(data);
}

function setHeights(data) {
  const max = findMax(data);
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    bar.style.height = ((data[index].amount / max) * 100).toString() + "%";
    if (data[index].amount / max == 1) {
      bar.style.backgroundColor = "var(--primary-cyan)";
    }
    bar.setAttribute("data-amount", `$${data[index].amount.toString()}`);
  });
}

function findMax(data) {
  const maxData = data.reduce(
    (previous, current) => {
      previous.amount =
        previous.amount > current.amount ? previous.amount : current.amount;
      return previous;
    },
    { amount: 0 }
  );
  return maxData.amount;
}

fetchData();
