// Function to copy the contract address
function copyContractAddress() {
  const address = document.getElementById("contract-address-text").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alert("Contract Address Copied!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
    alert("Failed to copy. Please try again!");
  });
}
