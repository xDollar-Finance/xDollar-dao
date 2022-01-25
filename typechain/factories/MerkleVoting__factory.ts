/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MerkleVoting } from "../MerkleVoting";

export class MerkleVoting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _merkleRoot: BytesLike,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleVoting> {
    return super.deploy(
      _merkleRoot,
      _startTime,
      _endTime,
      overrides || {}
    ) as Promise<MerkleVoting>;
  }
  getDeployTransaction(
    _merkleRoot: BytesLike,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _merkleRoot,
      _startTime,
      _endTime,
      overrides || {}
    );
  }
  attach(address: string): MerkleVoting {
    return super.attach(address) as MerkleVoting;
  }
  connect(signer: Signer): MerkleVoting__factory {
    return super.connect(signer) as MerkleVoting__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleVoting {
    return new Contract(address, _abi, signerOrProvider) as MerkleVoting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "against",
        type: "bool",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "againstVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "forVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "voteAgainst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_weight",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "voteFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000d5f38038062000d5f833981810160405281019062000037919062000084565b8260808181525050816001819055508060028190555050505062000122565b6000815190506200006781620000ee565b92915050565b6000815190506200007e8162000108565b92915050565b6000806000606084860312156200009a57600080fd5b6000620000aa8682870162000056565b9350506020620000bd868287016200006d565b9250506040620000d0868287016200006d565b9150509250925092565b6000819050919050565b6000819050919050565b620000f981620000da565b81146200010557600080fd5b50565b6200011381620000e4565b81146200011f57600080fd5b50565b608051610c1a62000145600039600081816101ad01526104270152610c1a6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b67438951161005b578063b674389514610117578063bd108fd414610133578063d6b225be14610151578063dd283fd91461016f57610088565b806309eef43e1461008d5780632eb4a7ab146100bd5780633197cbb6146100db57806378e97925146100f9575b600080fd5b6100a760048036038101906100a291906106e7565b61018b565b6040516100b49190610946565b60405180910390f35b6100c56101ab565b6040516100d29190610961565b60405180910390f35b6100e36101cf565b6040516100f091906109fc565b60405180910390f35b6101016101d5565b60405161010e91906109fc565b60405180910390f35b610131600480360381019061012c9190610710565b6101db565b005b61013b610277565b60405161014891906109fc565b60405180910390f35b61015961027d565b60405161016691906109fc565b60405180910390f35b61018960048036038101906101849190610710565b610283565b005b60006020528060005260406000206000915054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60025481565b60015481565b600154421161021f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610216906109dc565b60405180910390fd5b6002544210610263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025a906109bc565b60405180910390fd5b61027184846000858561031f565b50505050565b60035481565b60045481565b60015442116102c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102be906109dc565b60405180910390fd5b600254421061030b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610302906109bc565b60405180910390fd5b61031984846001858561031f565b50505050565b600015156000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146103b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a89061097c565b60405180910390fd5b600085856040516020016103c69291906108ee565b604051602081830303815290604052805190602001209050600061044c848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050507f000000000000000000000000000000000000000000000000000000000000000084610583565b90506001151581151514610495576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048c9061099c565b60405180910390fd5b60016000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555084156105105785600360008282546105049190610a51565b9250508190555061052a565b85600460008282546105229190610a51565b925050819055505b8673ffffffffffffffffffffffffffffffffffffffff167f749addf8eadeff63c43be59c27331be5c6d4fc9e82bbfbcf162321c9b35a95b48787604051610572929190610a17565b60405180910390a250505050505050565b600082610590858461059a565b1490509392505050565b60008082905060005b84518110156106685760008582815181106105e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905080831161062857828160405160200161060b92919061091a565b604051602081830303815290604052805190602001209250610654565b808360405160200161063b92919061091a565b6040516020818303038152906040528051906020012092505b50808061066090610af9565b9150506105a3565b508091505092915050565b60008135905061068281610bb6565b92915050565b60008083601f84011261069a57600080fd5b8235905067ffffffffffffffff8111156106b357600080fd5b6020830191508360208202830111156106cb57600080fd5b9250929050565b6000813590506106e181610bcd565b92915050565b6000602082840312156106f957600080fd5b600061070784828501610673565b91505092915050565b6000806000806060858703121561072657600080fd5b600061073487828801610673565b9450506020610745878288016106d2565b935050604085013567ffffffffffffffff81111561076257600080fd5b61076e87828801610688565b925092505092959194509250565b61078d61078882610aa7565b610b42565b82525050565b61079c81610ab9565b82525050565b6107ab81610ac5565b82525050565b6107c26107bd82610ac5565b610b54565b82525050565b60006107d5600d83610a40565b91507f416c726561647920566f746564000000000000000000000000000000000000006000830152602082019050919050565b6000610815601683610a40565b91507f4e6f742056616c6964204d65726b6c652070726f6f66000000000000000000006000830152602082019050919050565b6000610855600d83610a40565b91507f566f74696e6720636c6f736564000000000000000000000000000000000000006000830152602082019050919050565b6000610895601683610a40565b91507f566f74696e67206e6f74207374617274656420796574000000000000000000006000830152602082019050919050565b6108d181610aef565b82525050565b6108e86108e382610aef565b610b70565b82525050565b60006108fa828561077c565b60148201915061090a82846108d7565b6020820191508190509392505050565b600061092682856107b1565b60208201915061093682846107b1565b6020820191508190509392505050565b600060208201905061095b6000830184610793565b92915050565b600060208201905061097660008301846107a2565b92915050565b60006020820190508181036000830152610995816107c8565b9050919050565b600060208201905081810360008301526109b581610808565b9050919050565b600060208201905081810360008301526109d581610848565b9050919050565b600060208201905081810360008301526109f581610888565b9050919050565b6000602082019050610a1160008301846108c8565b92915050565b6000604082019050610a2c60008301856108c8565b610a396020830184610793565b9392505050565b600082825260208201905092915050565b6000610a5c82610aef565b9150610a6783610aef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a9c57610a9b610b7a565b5b828201905092915050565b6000610ab282610acf565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b0482610aef565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b3757610b36610b7a565b5b600182019050919050565b6000610b4d82610b5e565b9050919050565b6000819050919050565b6000610b6982610ba9565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160601b9050919050565b610bbf81610aa7565b8114610bca57600080fd5b50565b610bd681610aef565b8114610be157600080fd5b5056fea26469706673582212201f706fbd08fb9f4bed1b0aa7611cfd97b5f9864cfd1023b0002223ae5a449e8264736f6c63430008000033";