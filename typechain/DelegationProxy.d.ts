/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DelegationProxyInterface extends ethers.utils.Interface {
  functions: {
    "adjusted_balance_of(address)": FunctionFragment;
    "kill_delegation()": FunctionFragment;
    "set_delegation(address)": FunctionFragment;
    "commit_set_admins(address,address)": FunctionFragment;
    "apply_set_admins()": FunctionFragment;
    "voting_escrow()": FunctionFragment;
    "delegation()": FunctionFragment;
    "emergency_admin()": FunctionFragment;
    "ownership_admin()": FunctionFragment;
    "future_emergency_admin()": FunctionFragment;
    "future_ownership_admin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "adjusted_balance_of",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "kill_delegation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set_delegation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_set_admins",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "apply_set_admins",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergency_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownership_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_emergency_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_ownership_admin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "adjusted_balance_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kill_delegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set_delegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_set_admins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apply_set_admins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergency_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownership_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_emergency_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_ownership_admin",
    data: BytesLike
  ): Result;

  events: {
    "CommitAdmins(address,address)": EventFragment;
    "ApplyAdmins(address,address)": EventFragment;
    "DelegationSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CommitAdmins"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApplyAdmins"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegationSet"): EventFragment;
}

export class DelegationProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DelegationProxyInterface;

  functions: {
    adjusted_balance_of(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "adjusted_balance_of(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    kill_delegation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "kill_delegation()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set_delegation(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "set_delegation(address)"(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commit_set_admins(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "commit_set_admins(address,address)"(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    apply_set_admins(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "apply_set_admins()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<[string]>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<[string]>;

    delegation(overrides?: CallOverrides): Promise<[string]>;

    "delegation()"(overrides?: CallOverrides): Promise<[string]>;

    emergency_admin(overrides?: CallOverrides): Promise<[string]>;

    "emergency_admin()"(overrides?: CallOverrides): Promise<[string]>;

    ownership_admin(overrides?: CallOverrides): Promise<[string]>;

    "ownership_admin()"(overrides?: CallOverrides): Promise<[string]>;

    future_emergency_admin(overrides?: CallOverrides): Promise<[string]>;

    "future_emergency_admin()"(overrides?: CallOverrides): Promise<[string]>;

    future_ownership_admin(overrides?: CallOverrides): Promise<[string]>;

    "future_ownership_admin()"(overrides?: CallOverrides): Promise<[string]>;
  };

  adjusted_balance_of(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "adjusted_balance_of(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  kill_delegation(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "kill_delegation()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set_delegation(
    _delegation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "set_delegation(address)"(
    _delegation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commit_set_admins(
    _o_admin: string,
    _e_admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "commit_set_admins(address,address)"(
    _o_admin: string,
    _e_admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  apply_set_admins(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "apply_set_admins()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voting_escrow(overrides?: CallOverrides): Promise<string>;

  "voting_escrow()"(overrides?: CallOverrides): Promise<string>;

  delegation(overrides?: CallOverrides): Promise<string>;

  "delegation()"(overrides?: CallOverrides): Promise<string>;

  emergency_admin(overrides?: CallOverrides): Promise<string>;

  "emergency_admin()"(overrides?: CallOverrides): Promise<string>;

  ownership_admin(overrides?: CallOverrides): Promise<string>;

  "ownership_admin()"(overrides?: CallOverrides): Promise<string>;

  future_emergency_admin(overrides?: CallOverrides): Promise<string>;

  "future_emergency_admin()"(overrides?: CallOverrides): Promise<string>;

  future_ownership_admin(overrides?: CallOverrides): Promise<string>;

  "future_ownership_admin()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    adjusted_balance_of(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "adjusted_balance_of(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill_delegation(overrides?: CallOverrides): Promise<void>;

    "kill_delegation()"(overrides?: CallOverrides): Promise<void>;

    set_delegation(
      _delegation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "set_delegation(address)"(
      _delegation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    commit_set_admins(
      _o_admin: string,
      _e_admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "commit_set_admins(address,address)"(
      _o_admin: string,
      _e_admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    apply_set_admins(overrides?: CallOverrides): Promise<void>;

    "apply_set_admins()"(overrides?: CallOverrides): Promise<void>;

    voting_escrow(overrides?: CallOverrides): Promise<string>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<string>;

    delegation(overrides?: CallOverrides): Promise<string>;

    "delegation()"(overrides?: CallOverrides): Promise<string>;

    emergency_admin(overrides?: CallOverrides): Promise<string>;

    "emergency_admin()"(overrides?: CallOverrides): Promise<string>;

    ownership_admin(overrides?: CallOverrides): Promise<string>;

    "ownership_admin()"(overrides?: CallOverrides): Promise<string>;

    future_emergency_admin(overrides?: CallOverrides): Promise<string>;

    "future_emergency_admin()"(overrides?: CallOverrides): Promise<string>;

    future_ownership_admin(overrides?: CallOverrides): Promise<string>;

    "future_ownership_admin()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    CommitAdmins(
      ownership_admin: null,
      emergency_admin: null
    ): TypedEventFilter<
      [string, string],
      { ownership_admin: string; emergency_admin: string }
    >;

    ApplyAdmins(
      ownership_admin: null,
      emergency_admin: null
    ): TypedEventFilter<
      [string, string],
      { ownership_admin: string; emergency_admin: string }
    >;

    DelegationSet(
      delegation: null
    ): TypedEventFilter<[string], { delegation: string }>;
  };

  estimateGas: {
    adjusted_balance_of(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "adjusted_balance_of(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill_delegation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "kill_delegation()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set_delegation(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "set_delegation(address)"(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commit_set_admins(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "commit_set_admins(address,address)"(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    apply_set_admins(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "apply_set_admins()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegation(overrides?: CallOverrides): Promise<BigNumber>;

    "delegation()"(overrides?: CallOverrides): Promise<BigNumber>;

    emergency_admin(overrides?: CallOverrides): Promise<BigNumber>;

    "emergency_admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownership_admin(overrides?: CallOverrides): Promise<BigNumber>;

    "ownership_admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    future_emergency_admin(overrides?: CallOverrides): Promise<BigNumber>;

    "future_emergency_admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    future_ownership_admin(overrides?: CallOverrides): Promise<BigNumber>;

    "future_ownership_admin()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    adjusted_balance_of(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "adjusted_balance_of(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill_delegation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "kill_delegation()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set_delegation(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "set_delegation(address)"(
      _delegation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commit_set_admins(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "commit_set_admins(address,address)"(
      _o_admin: string,
      _e_admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    apply_set_admins(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "apply_set_admins()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delegation()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergency_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emergency_admin()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownership_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ownership_admin()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    future_emergency_admin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "future_emergency_admin()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    future_ownership_admin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "future_ownership_admin()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}