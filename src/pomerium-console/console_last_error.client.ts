// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "console_last_error.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { LastErrorService } from "./console_last_error";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetLastErrorResponse } from "./console_last_error";
import type { GetLastErrorRequest } from "./console_last_error";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service pomerium.dashboard.LastErrorService
 */
export interface ILastErrorServiceClient {
    /**
     * @generated from protobuf rpc: GetLastError(pomerium.dashboard.GetLastErrorRequest) returns (pomerium.dashboard.GetLastErrorResponse);
     */
    getLastError(input: GetLastErrorRequest, options?: RpcOptions): UnaryCall<GetLastErrorRequest, GetLastErrorResponse>;
}
/**
 * @generated from protobuf service pomerium.dashboard.LastErrorService
 */
export class LastErrorServiceClient implements ILastErrorServiceClient, ServiceInfo {
    typeName = LastErrorService.typeName;
    methods = LastErrorService.methods;
    options = LastErrorService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetLastError(pomerium.dashboard.GetLastErrorRequest) returns (pomerium.dashboard.GetLastErrorResponse);
     */
    getLastError(input: GetLastErrorRequest, options?: RpcOptions): UnaryCall<GetLastErrorRequest, GetLastErrorResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetLastErrorRequest, GetLastErrorResponse>("unary", this._transport, method, opt, input);
    }
}