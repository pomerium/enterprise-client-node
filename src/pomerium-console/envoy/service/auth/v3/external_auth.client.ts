// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/service/auth/v3/external_auth.proto" (package "envoy.service.auth.v3", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Authorization } from "./external_auth";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CheckResponse } from "./external_auth";
import type { CheckRequest } from "./external_auth";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// [#protodoc-title: Authorization service]

// The authorization service request messages used by external authorization :ref:`network filter
// <config_network_filters_ext_authz>` and :ref:`HTTP filter <config_http_filters_ext_authz>`.

/**
 * A generic interface for performing authorization check on incoming
 * requests to a networked service.
 *
 * @generated from protobuf service envoy.service.auth.v3.Authorization
 */
export interface IAuthorizationClient {
    /**
     * Performs authorization check based on the attributes associated with the
     * incoming request, and returns status `OK` or not `OK`.
     *
     * @generated from protobuf rpc: Check(envoy.service.auth.v3.CheckRequest) returns (envoy.service.auth.v3.CheckResponse);
     */
    check(input: CheckRequest, options?: RpcOptions): UnaryCall<CheckRequest, CheckResponse>;
}
// [#protodoc-title: Authorization service]

// The authorization service request messages used by external authorization :ref:`network filter
// <config_network_filters_ext_authz>` and :ref:`HTTP filter <config_http_filters_ext_authz>`.

/**
 * A generic interface for performing authorization check on incoming
 * requests to a networked service.
 *
 * @generated from protobuf service envoy.service.auth.v3.Authorization
 */
export class AuthorizationClient implements IAuthorizationClient, ServiceInfo {
    typeName = Authorization.typeName;
    methods = Authorization.methods;
    options = Authorization.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Performs authorization check based on the attributes associated with the
     * incoming request, and returns status `OK` or not `OK`.
     *
     * @generated from protobuf rpc: Check(envoy.service.auth.v3.CheckRequest) returns (envoy.service.auth.v3.CheckResponse);
     */
    check(input: CheckRequest, options?: RpcOptions): UnaryCall<CheckRequest, CheckResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CheckRequest, CheckResponse>("unary", this._transport, method, opt, input);
    }
}
