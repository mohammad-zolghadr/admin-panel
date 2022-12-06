function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uploadImage(file) {
  await timeout(1500); // Uploading Time :)
  return "https://google.com/";
}

export { uploadImage };
