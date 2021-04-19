import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssetSelection, WalletInfo } from "../../types";

const initialState = {
  assetSelection: {
    ETH: false,
    BSC: false,
    ALL: false,
  },
  web3: undefined,
  selectedWallets: [],
} as {
  assetSelection: AssetSelection;
  web3: any;
  selectedWallets: WalletInfo[];
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
    addNewWallet: {
      reducer(state, action: PayloadAction<WalletInfo, string>) {
        state.selectedWallets.push(action.payload);
      },
      prepare(payload: WalletInfo) {
        return { payload };
      },
    },
    deleteWallet: {
      reducer(state, action: PayloadAction<WalletInfo, string>) {
        state.selectedWallets = state.selectedWallets.filter(
          (wallets) => wallets.address !== action.payload.address
        );
      },
      prepare(payload: WalletInfo) {
        return { payload };
      },
    },
    toggleWalletSelection: {
      reducer(state, action: PayloadAction<WalletInfo, string>) {
        state.selectedWallets.forEach((wallet) => {
          if (wallet.address === action.payload.address) {
            wallet.selected = !wallet.selected;
          }
        });
      },
      prepare(payload: WalletInfo) {
        return { payload };
      },
    },
  },
});

export { initialState as initialWalletState };
export const {
  addNewWallet,
  deleteWallet,
  toggleWalletSelection,
  setSelectedAsset,
  addWeb3Provider,
} = walletSlice.actions;
export default walletSlice.reducer;
