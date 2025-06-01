import {
  createThirdwebClient,
  getContract,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";

// ✅ Create the client
const client = createThirdwebClient({
  clientId: "adfaa284ed4974678d47fe009dd19273",
});

// ✅ Connect to the contract
const contract = getContract({
  client,
  chain: defineChain(1),
  address: "0xaFa170eF5B2E7ef77cd5d2719Fb3075E028F63e7",
});

export default contract;