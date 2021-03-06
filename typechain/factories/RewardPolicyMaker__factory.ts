/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RewardPolicyMaker } from "../RewardPolicyMaker";

export class RewardPolicyMaker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _epoch_length: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardPolicyMaker> {
    return super.deploy(
      _epoch_length,
      overrides || {}
    ) as Promise<RewardPolicyMaker>;
  }
  getDeployTransaction(
    _epoch_length: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_epoch_length, overrides || {});
  }
  attach(address: string): RewardPolicyMaker {
    return super.attach(address) as RewardPolicyMaker;
  }
  connect(signer: Signer): RewardPolicyMaker__factory {
    return super.connect(signer) as RewardPolicyMaker__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardPolicyMaker {
    return new Contract(address, _abi, signerOrProvider) as RewardPolicyMaker;
  }
}

const _abi = [
  {
    name: "SetAdmin",
    inputs: [
      {
        name: "admin",
        type: "address",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "_epoch_length",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    name: "epoch_at",
    inputs: [
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 7475,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "epoch_start_time",
    inputs: [
      {
        name: "_epoch",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 4918,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "rate_at",
    inputs: [
      {
        name: "_timestamp",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 14070,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "current_epoch",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 14997,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "future_epoch_time",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 36854,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "future_epoch_rate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 19559,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "set_admin",
    inputs: [
      {
        name: "_admin",
        type: "address",
      },
    ],
    outputs: [],
    gas: 39075,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "set_rewards_at",
    inputs: [
      {
        name: "_epoch",
        type: "uint256",
      },
      {
        name: "_reward",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 52416,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "set_rewards_starting_at",
    inputs: [
      {
        name: "_epoch",
        type: "uint256",
      },
      {
        name: "_rewards",
        type: "uint256[10]",
      },
    ],
    outputs: [],
    gas: 370972,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 2658,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "first_epoch_time",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2688,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "epoch_length",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2718,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "rewards",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2793,
  },
];

const _bytecode =
  "0x602061055a6101403933600055610140516002554261014051808061002357600080fd5b82049050905061014051808202821582848304141761004157600080fd5b80905090509050610140518082101561005957600080fd5b8082039050905060015561054256600436101561000d576103e4565b600035601c52600051341561002157600080fd5b639a1586ef811415610052576004356101405261014051600658016103ea565b6101a0526101a05160005260206000f35b6322026ada8114156100a157600154600435600254808202821582848304141761007b57600080fd5b8090509050905081818301101561009157600080fd5b8082019050905060005260206000f35b6339935cf081141561011d5760015460043510156100c457600060005260206000f35b60016004356101405261014051600658016103ea565b6101a0526101a0516c01431e0fae6d7217caa000000081106100fb57600080fd5b0260030154600254808061010e57600080fd5b82049050905060005260206000f35b639372b4e48114156101435760065801610448565b610140526101405160005260206000f35b63be5d1be9811415610182576006580161047a565b610140526101405160025481818301101561017257600080fd5b8082019050905060005260206000f35b63c67f46e08114156101f457600160065801610448565b610140526101405160018181830110156101b257600080fd5b808201905090506c01431e0fae6d7217caa000000081106101d257600080fd5b026003015460025480806101e557600080fd5b82049050905060005260206000f35b63e9333fab8114156102545760043560a01c1561021057600080fd5b600054331461021e57600080fd5b600435600055600435610140527f5a272403b402d892977df56625f4164ccaf70ca3863991c43ecfe76a6905b0a16020610140a1005b63d284abbb8114156102b457600054331461026e57600080fd5b60065801610448565b61014052610140516004351161028c57600080fd5b60243560016004356c01431e0fae6d7217caa000000081106102ad57600080fd5b0260030155005b6341eec7ab8114156103625760005433146102ce57600080fd5b60065801610448565b6101405261014051600435116102ec57600080fd5b6101406000600a818352015b602461014051600a811061030b57600080fd5b602002013560016004356101405181818301101561032857600080fd5b808201905090506c01431e0fae6d7217caa0000000811061034857600080fd5b02600301555b81516001018083528114156102f8575b5050005b63f851a44081141561037a5760005460005260206000f35b6310ca275a8114156103925760015460005260206000f35b634231bfe18114156103aa5760025460005260206000f35b63f301af428114156103e25760016004356c01431e0fae6d7217caa000000081106103d457600080fd5b026003015460005260206000f35b505b60006000fd5b610160526101405260015461014051101561040d57600060005260005161016051565b610140516001548082101561042157600080fd5b80820390509050600254808061043657600080fd5b82049050905060005260005161016051565b6101405261014051426101605261016051600658016103ea565b6101c052610140526101c05160005260005161014051565b610140526001546101405160065801610448565b61016052610140526101605160025480820282158284830414176104b157600080fd5b809050905090508181830110156104c757600080fd5b8082019050905060005260005161014051565b61006861054203610068600039610068610542036000f3";
