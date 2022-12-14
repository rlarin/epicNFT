(async () => {
    const hre = require("hardhat");
    const main = async () => {
      const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
      const nftContract = await nftContractFactory.deploy();
      await nftContract.deployed();
      console.log("Contract deployed to:", nftContract.address);

      // Call the function.
      let txn = await nftContract.makeAnEpicNFT()
      // Wait for it to be mined.
      await txn.wait()

      // getTotalNFTsMintedSoFar.
      const totalNft = await nftContract.getTotalNFTsMintedSoFar()
      console.log("totalNft:", totalNft)
    }

    const runMain = async () => {
        try {
            await main();
            process.exit(0);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }

    await runMain();
})();

// https://green-powerful-bridge.ethereum-goerli.discover.quiknode.pro/22dc57c94daa3393b590312c51fb52426598a22c/
