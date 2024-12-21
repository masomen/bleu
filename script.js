<script>
  // Function to copy the contract address
  function copyContractAddress() {
    try {
      const address = document.getElementById("contract-address").innerText.split(": ")[1];
      if (!address) throw new Error("Contract address not found.");
      
      navigator.clipboard.writeText(address).then(() => {
        alert("Contract Address Copied!");
      }).catch((error) => {
        console.error("Failed to copy contract address:", error);
        alert("Failed to copy the contract address. Please try again.");
      });
    } catch (error) {
      console.error("Error copying contract address:", error);
      alert("Error copying contract address. Please verify the contract address element.");
    }
  }

  // Function to fetch BNB Price from Chainlink Oracle
  async function testBNBPriceOracle() {
    try {
      if (typeof ethers === "undefined") {
        throw new Error("Ethers.js is not loaded.");
      }

      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to use this feature.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      // Update this to the mainnet/testnet Oracle address you are using
      const oracleAddress = "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7"; // Example: BNB/USD on Binance Testnet
      const oracleAbi = [
        {
          inputs: [],
          name: "latestRoundData",
          outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];

      const oracleContract = new ethers.Contract(oracleAddress, oracleAbi, provider);

      const roundData = await oracleContract.latestRoundData();
      const bnbPriceUSD = parseFloat(ethers.formatUnits(roundData.answer, 8));

      console.log(`BNB/USD Price: $${bnbPriceUSD}`);
      alert(`BNB/USD Price: $${bnbPriceUSD}`);
    } catch (error) {
      console.error("Failed to fetch BNB price:", error);
      alert("Failed to fetch BNB price. Please try again later.");
    }
  }

</script>

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function () {
            const menu = document.querySelector(".collapsible");
            if (menu) {
                menu.classList.toggle("active");
            }
        });
    }
});
