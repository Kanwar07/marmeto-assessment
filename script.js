async function getdata() {
  try {
    const response = await fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export { getdata };
