// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "key_chain.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { KeyChainService } from "./key_chain";
import type { UpdateKeyPairResponse } from "./key_chain";
import type { UpdateKeyPairRequest } from "./key_chain";
import type { CreateKeyPairResponse } from "./key_chain";
import type { CreateKeyPairRequest } from "./key_chain";
import type { ListKeyPairsResponse } from "./key_chain";
import type { ListKeyPairsRequest } from "./key_chain";
import type { GetKeyPairResponse } from "./key_chain";
import type { GetKeyPairRequest } from "./key_chain";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { DeleteKeyPairResponse } from "./key_chain";
import type { DeleteKeyPairRequest } from "./key_chain";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * KeyChainService manages and store TLS Certificates, Keys and CAs, known as
 * Key Pairs
 *
 * @generated from protobuf service pomerium.dashboard.KeyChainService
 */
export interface IKeyChainServiceClient {
    /**
     * DeleteKeyPair remove an x509 key pair based on a DeleteKeyPairRequest
     *
     * @generated from protobuf rpc: DeleteKeyPair(pomerium.dashboard.DeleteKeyPairRequest) returns (pomerium.dashboard.DeleteKeyPairResponse);
     */
    deleteKeyPair(input: DeleteKeyPairRequest, options?: RpcOptions): UnaryCall<DeleteKeyPairRequest, DeleteKeyPairResponse>;
    /**
     * GetKeyPair retrieves an existing key pair
     *
     * @generated from protobuf rpc: GetKeyPair(pomerium.dashboard.GetKeyPairRequest) returns (pomerium.dashboard.GetKeyPairResponse);
     */
    getKeyPair(input: GetKeyPairRequest, options?: RpcOptions): UnaryCall<GetKeyPairRequest, GetKeyPairResponse>;
    /**
     * ListKeyPairs lists existing key pairs based on parameters in
     * ListKeyPairsRequest
     *
     * @generated from protobuf rpc: ListKeyPairs(pomerium.dashboard.ListKeyPairsRequest) returns (pomerium.dashboard.ListKeyPairsResponse);
     */
    listKeyPairs(input: ListKeyPairsRequest, options?: RpcOptions): UnaryCall<ListKeyPairsRequest, ListKeyPairsResponse>;
    /**
     * CreateKeyPair creates a new key pair
     *
     * @generated from protobuf rpc: CreateKeyPair(pomerium.dashboard.CreateKeyPairRequest) returns (pomerium.dashboard.CreateKeyPairResponse);
     */
    createKeyPair(input: CreateKeyPairRequest, options?: RpcOptions): UnaryCall<CreateKeyPairRequest, CreateKeyPairResponse>;
    /**
     * CreateKeyPair creates a new key pair
     *
     * @generated from protobuf rpc: UpdateKeyPair(pomerium.dashboard.UpdateKeyPairRequest) returns (pomerium.dashboard.UpdateKeyPairResponse);
     */
    updateKeyPair(input: UpdateKeyPairRequest, options?: RpcOptions): UnaryCall<UpdateKeyPairRequest, UpdateKeyPairResponse>;
}
/**
 * KeyChainService manages and store TLS Certificates, Keys and CAs, known as
 * Key Pairs
 *
 * @generated from protobuf service pomerium.dashboard.KeyChainService
 */
export class KeyChainServiceClient implements IKeyChainServiceClient, ServiceInfo {
    typeName = KeyChainService.typeName;
    methods = KeyChainService.methods;
    options = KeyChainService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeleteKeyPair remove an x509 key pair based on a DeleteKeyPairRequest
     *
     * @generated from protobuf rpc: DeleteKeyPair(pomerium.dashboard.DeleteKeyPairRequest) returns (pomerium.dashboard.DeleteKeyPairResponse);
     */
    deleteKeyPair(input: DeleteKeyPairRequest, options?: RpcOptions): UnaryCall<DeleteKeyPairRequest, DeleteKeyPairResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteKeyPairRequest, DeleteKeyPairResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetKeyPair retrieves an existing key pair
     *
     * @generated from protobuf rpc: GetKeyPair(pomerium.dashboard.GetKeyPairRequest) returns (pomerium.dashboard.GetKeyPairResponse);
     */
    getKeyPair(input: GetKeyPairRequest, options?: RpcOptions): UnaryCall<GetKeyPairRequest, GetKeyPairResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetKeyPairRequest, GetKeyPairResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListKeyPairs lists existing key pairs based on parameters in
     * ListKeyPairsRequest
     *
     * @generated from protobuf rpc: ListKeyPairs(pomerium.dashboard.ListKeyPairsRequest) returns (pomerium.dashboard.ListKeyPairsResponse);
     */
    listKeyPairs(input: ListKeyPairsRequest, options?: RpcOptions): UnaryCall<ListKeyPairsRequest, ListKeyPairsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListKeyPairsRequest, ListKeyPairsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CreateKeyPair creates a new key pair
     *
     * @generated from protobuf rpc: CreateKeyPair(pomerium.dashboard.CreateKeyPairRequest) returns (pomerium.dashboard.CreateKeyPairResponse);
     */
    createKeyPair(input: CreateKeyPairRequest, options?: RpcOptions): UnaryCall<CreateKeyPairRequest, CreateKeyPairResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateKeyPairRequest, CreateKeyPairResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CreateKeyPair creates a new key pair
     *
     * @generated from protobuf rpc: UpdateKeyPair(pomerium.dashboard.UpdateKeyPairRequest) returns (pomerium.dashboard.UpdateKeyPairResponse);
     */
    updateKeyPair(input: UpdateKeyPairRequest, options?: RpcOptions): UnaryCall<UpdateKeyPairRequest, UpdateKeyPairResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateKeyPairRequest, UpdateKeyPairResponse>("unary", this._transport, method, opt, input);
    }
}