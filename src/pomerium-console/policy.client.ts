// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "policy.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PolicyService } from "./policy";
import type { SetPolicyResponse } from "./policy";
import type { SetPolicyRequest } from "./policy";
import type { ListPoliciesResponse } from "./policy";
import type { ListPoliciesRequest } from "./policy";
import type { GetPolicyResponse } from "./policy";
import type { GetPolicyRequest } from "./policy";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { DeletePolicyResponse } from "./policy";
import type { DeletePolicyRequest } from "./policy";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * PolicyService manages policy creation and definition
 *
 * @generated from protobuf service pomerium.dashboard.PolicyService
 */
export interface IPolicyServiceClient {
    /**
     * DeletePolicy deletes an existing policy
     *
     * @generated from protobuf rpc: DeletePolicy(pomerium.dashboard.DeletePolicyRequest) returns (pomerium.dashboard.DeletePolicyResponse);
     */
    deletePolicy(input: DeletePolicyRequest, options?: RpcOptions): UnaryCall<DeletePolicyRequest, DeletePolicyResponse>;
    /**
     * GetPolicy retrieves an existing policy
     *
     * @generated from protobuf rpc: GetPolicy(pomerium.dashboard.GetPolicyRequest) returns (pomerium.dashboard.GetPolicyResponse);
     */
    getPolicy(input: GetPolicyRequest, options?: RpcOptions): UnaryCall<GetPolicyRequest, GetPolicyResponse>;
    /**
     * ListPolicies lists existing policies based on the ListPoliciesRequest
     * parameters
     *
     * @generated from protobuf rpc: ListPolicies(pomerium.dashboard.ListPoliciesRequest) returns (pomerium.dashboard.ListPoliciesResponse);
     */
    listPolicies(input: ListPoliciesRequest, options?: RpcOptions): UnaryCall<ListPoliciesRequest, ListPoliciesResponse>;
    /**
     * SetPolicy creates a new policy or, if the id is specified, updates an
     * existing policy
     *
     * @generated from protobuf rpc: SetPolicy(pomerium.dashboard.SetPolicyRequest) returns (pomerium.dashboard.SetPolicyResponse);
     */
    setPolicy(input: SetPolicyRequest, options?: RpcOptions): UnaryCall<SetPolicyRequest, SetPolicyResponse>;
}
/**
 * PolicyService manages policy creation and definition
 *
 * @generated from protobuf service pomerium.dashboard.PolicyService
 */
export class PolicyServiceClient implements IPolicyServiceClient, ServiceInfo {
    typeName = PolicyService.typeName;
    methods = PolicyService.methods;
    options = PolicyService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeletePolicy deletes an existing policy
     *
     * @generated from protobuf rpc: DeletePolicy(pomerium.dashboard.DeletePolicyRequest) returns (pomerium.dashboard.DeletePolicyResponse);
     */
    deletePolicy(input: DeletePolicyRequest, options?: RpcOptions): UnaryCall<DeletePolicyRequest, DeletePolicyResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeletePolicyRequest, DeletePolicyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetPolicy retrieves an existing policy
     *
     * @generated from protobuf rpc: GetPolicy(pomerium.dashboard.GetPolicyRequest) returns (pomerium.dashboard.GetPolicyResponse);
     */
    getPolicy(input: GetPolicyRequest, options?: RpcOptions): UnaryCall<GetPolicyRequest, GetPolicyResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPolicyRequest, GetPolicyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListPolicies lists existing policies based on the ListPoliciesRequest
     * parameters
     *
     * @generated from protobuf rpc: ListPolicies(pomerium.dashboard.ListPoliciesRequest) returns (pomerium.dashboard.ListPoliciesResponse);
     */
    listPolicies(input: ListPoliciesRequest, options?: RpcOptions): UnaryCall<ListPoliciesRequest, ListPoliciesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListPoliciesRequest, ListPoliciesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SetPolicy creates a new policy or, if the id is specified, updates an
     * existing policy
     *
     * @generated from protobuf rpc: SetPolicy(pomerium.dashboard.SetPolicyRequest) returns (pomerium.dashboard.SetPolicyResponse);
     */
    setPolicy(input: SetPolicyRequest, options?: RpcOptions): UnaryCall<SetPolicyRequest, SetPolicyResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetPolicyRequest, SetPolicyResponse>("unary", this._transport, method, opt, input);
    }
}
