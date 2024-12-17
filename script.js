<script>
  // Function to copy the contract address
  function copyContractAddress() {
    const address = document.getElementById("contract-address").innerText.split(": ")[1];
    navigator.clipboard.writeText(address).then(() => {
      alert("Contract Address Copied!");
    });
  }
</script>
