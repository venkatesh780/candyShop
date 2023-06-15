const addItemBtn = document.getElementById("add-item-btn");
const candyList = document.getElementById("candy-list");

const candies = [
  {
    id: "1",
    candyName: "chaco",
    description: "chacolate",
    price: "2",
    quantity: "1000",
  },
  {
    id: "2",
    candyName: "vennel",
    description: "venni",
    price: "1",
    quantity: "200",
  },
];

function renderItemsIntoPage() {
  candyList.innerHTML = "";
  candies.forEach((candy) => {
    const { id, candyName, description, price, quantity } = candy;

    const candyItem = document.createElement("li");

    const candyId = document.createElement("p");
    candyId.innerText = id;

    const candyNameP = document.createElement("p");
    candyNameP.innerText = candyName;

    const candyDescription = document.createElement("p");
    candyDescription.innerText = description;

    const candyPrice = document.createElement("p");
    candyPrice.innerText = price;

    const candyQuantity = document.createElement("p");
    candyQuantity.innerText = quantity;

    candyItem.appendChild(candyId);
    candyItem.appendChild(candyNameP);
    candyItem.appendChild(candyDescription);
    candyItem.appendChild(candyPrice);
    candyItem.appendChild(candyQuantity);

    const btnDiv = document.createElement("div");
    btnDiv.id = "button-container";

    const button1 = document.createElement("button");
    button1.classList.add("buy-btn");
    button1.innerText = "Buy 1";

    const button2 = document.createElement("button");
    button2.classList.add("buy-btn");
    button2.innerText = "Buy 2";

    const button3 = document.createElement("button");
    button3.classList.add("buy-btn");
    button3.innerText = "Buy 3";

    btnDiv.appendChild(button1);
    btnDiv.appendChild(button2);
    btnDiv.appendChild(button3);

    candyItem.appendChild(btnDiv);

    candyList.appendChild(candyItem);
  });
}

function addCandy(candy) {
  candies.push(candy);
  renderItemsIntoPage();
}

function handleCandyForm(e) {
  e.preventDefault();

  const candyName = document.getElementById("candyname").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  const id = candies.length + 1;

  const candy = {
    id,
    candyName,
    description,
    price,
    quantity,
  };
  document.getElementById("candyname").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  addCandy(candy);
}

addItemBtn.addEventListener("click", handleCandyForm);
renderItemsIntoPage();
