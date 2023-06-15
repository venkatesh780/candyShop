const addItemBtn = document.getElementById("add-item-btn");
const candyList = document.getElementById("candy-list");

const candiesApiEndPoint =
  "https://crudcrud.com/api/28c954176e484fd390108ccb3decee95/candies";

async function getCandies() {
  try {
    const response = await axios.get(candiesApiEndPoint);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
}

async function renderItemsIntoPage() {
  try {
    candyList.innerHTML = "";
    const candies = await getCandies();

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
  } catch (e) {
    console.log(e.message);
  }
}

async function addCandy(candy) {
  try {
    const response = await axios.post(candiesApiEndPoint, candy);

    renderItemsIntoPage();
  } catch (e) {
    console.log(e.message);
  }
}

async function handleCandyForm(e) {
  e.preventDefault();

  try {
    const candyName = document.getElementById("candyname").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    const candyArr = await getCandies();
    const id = String(candyArr.length + 1);

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
  } catch (e) {
    console.log(e.message);
  }
}

async function updateCandy(candyId, candy, n) {
  try {
    const { id, candyName, description, price, quantity } = candy;
    const latestQuantity = String(parseInt(candy.quantity) - n);
    const newCandy = {
      id: id,
      candyName: candyName,
      description: description,
      price: price,
      quantity: latestQuantity,
    };
    let reponse = await axios.put(candiesApiEndPoint + "/" + candyId, newCandy);
  } catch (e) {
    console.log(e.message);
  }
}

async function handleBuy(e) {
  try {
    if (e.target.innerText === "Buy 1") {
      let currId = e.target.parentElement.parentElement.firstChild.innerText;
      const candies = await getCandies();
      let candyId;
      let currCandy;
      candies.forEach((candy) => {
        if (candy.id === currId) {
          candyId = candy._id;
          currCandy = candy;
          // candy.quantity = String(parseInt(candy.quantity) - 1);
        }
      });
      await updateCandy(candyId, currCandy, 1);
      renderItemsIntoPage();
    } else if (e.target.innerText === "Buy 2") {
      let currId = e.target.parentElement.parentElement.firstChild.innerText;
      const candies = await getCandies();
      let candyId;
      let currCandy;
      candies.forEach((candy) => {
        if (candy.id === currId) {
          candyId = candy._id;
          currCandy = candy;
          // candy.quantity = String(parseInt(candy.quantity) - 1);
        }
      });
      await updateCandy(candyId, currCandy, 2);
      renderItemsIntoPage();
    } else if (e.target.innerText === "Buy 3") {
      let currId = e.target.parentElement.parentElement.firstChild.innerText;
      const candies = await getCandies();
      let candyId;
      let currCandy;
      candies.forEach((candy) => {
        if (candy.id === currId) {
          candyId = candy._id;
          currCandy = candy;
          // candy.quantity = String(parseInt(candy.quantity) - 1);
        }
      });
      await updateCandy(candyId, currCandy, 3);
      renderItemsIntoPage();
    }
  } catch (e) {
    console.log(e.message);
  }
}

candyList.addEventListener("click", handleBuy);
addItemBtn.addEventListener("click", handleCandyForm);
renderItemsIntoPage();
