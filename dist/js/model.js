export const adminAccount = {
  name: "Milica Mazalica",
  password: "tfzradmin",
  location: "Zrenjanin",
  image: "./images/admin.png",
};

export const getProducts = async function () {
  try {
    const getHTTP = await fetch(`http://localhost:8000/products`);
    const data = await getHTTP.json();

    return data;
  } catch {}
};
