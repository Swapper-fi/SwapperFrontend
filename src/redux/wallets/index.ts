import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssetSelection } from "../../types";

const initialState = {
  assetSelection: {
    ETH: false,
    BSC: false,
    ALL: false,
  },
  web3: undefined,
} as {
  assetSelection: AssetSelection;
  web3: any;
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setSelectedAsset: {
      reducer(state, action: PayloadAction<AssetSelection, string>) {
        state.assetSelection = action.payload;
      },
      prepare(payload: AssetSelection) {
        return { payload };
      },
    },
    addWeb3Provider: (state, action) => {
      const { web3 } = action.payload;
      return {
        ...state,
        web3,
      };
    },
  },
});

export { initialState as initialWalletState };
export const { setSelectedAsset, addWeb3Provider } = walletSlice.actions;
export default walletSlice.reducer;
