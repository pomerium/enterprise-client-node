// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "routes.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { RouteService } from "./routes";
import type { MoveRoutesResponse } from "./routes";
import type { MoveRoutesRequest } from "./routes";
import type { SetRoutesResponse } from "./routes";
import type { SetRoutesRequest } from "./routes";
import type { SetRouteResponse } from "./routes";
import type { SetRouteRequest } from "./routes";
import type { LoadRoutesResponse } from "./routes";
import type { LoadRoutesRequest } from "./routes";
import type { ListRoutesResponse } from "./routes";
import type { ListRoutesRequest } from "./routes";
import type { GetRouteResponse } from "./routes";
import type { GetRouteRequest } from "./routes";
import type { DeleteRoutesResponse } from "./routes";
import type { DeleteRoutesRequest } from "./routes";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { DeleteRouteResponse } from "./routes";
import type { DeleteRouteRequest } from "./routes";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * RouteService manages proxy route definitions
 *
 * @generated from protobuf service pomerium.dashboard.RouteService
 */
export interface IRouteServiceClient {
    /**
     * DeleteRoute removes an existing route
     *
     * @generated from protobuf rpc: DeleteRoute(pomerium.dashboard.DeleteRouteRequest) returns (pomerium.dashboard.DeleteRouteResponse);
     */
    deleteRoute(input: DeleteRouteRequest, options?: RpcOptions): UnaryCall<DeleteRouteRequest, DeleteRouteResponse>;
    /**
     * DeleteRoutes removes existing routes.
     *
     * @generated from protobuf rpc: DeleteRoutes(pomerium.dashboard.DeleteRoutesRequest) returns (pomerium.dashboard.DeleteRoutesResponse);
     */
    deleteRoutes(input: DeleteRoutesRequest, options?: RpcOptions): UnaryCall<DeleteRoutesRequest, DeleteRoutesResponse>;
    /**
     * GetRoute retrieves an existing route
     *
     * @generated from protobuf rpc: GetRoute(pomerium.dashboard.GetRouteRequest) returns (pomerium.dashboard.GetRouteResponse);
     */
    getRoute(input: GetRouteRequest, options?: RpcOptions): UnaryCall<GetRouteRequest, GetRouteResponse>;
    /**
     * ListRoutes lists routes based on ListRoutesRequest
     *
     * @generated from protobuf rpc: ListRoutes(pomerium.dashboard.ListRoutesRequest) returns (pomerium.dashboard.ListRoutesResponse);
     */
    listRoutes(input: ListRoutesRequest, options?: RpcOptions): UnaryCall<ListRoutesRequest, ListRoutesResponse>;
    /**
     * LoadRoutes imports routes from an existing OSS configuration
     *
     * @generated from protobuf rpc: LoadRoutes(pomerium.dashboard.LoadRoutesRequest) returns (pomerium.dashboard.LoadRoutesResponse);
     */
    loadRoutes(input: LoadRoutesRequest, options?: RpcOptions): UnaryCall<LoadRoutesRequest, LoadRoutesResponse>;
    /**
     * SetRoute creates or, if id is defined, updates an existing route
     *
     * @generated from protobuf rpc: SetRoute(pomerium.dashboard.SetRouteRequest) returns (pomerium.dashboard.SetRouteResponse);
     */
    setRoute(input: SetRouteRequest, options?: RpcOptions): UnaryCall<SetRouteRequest, SetRouteResponse>;
    /**
     * SetRoutes creates or, if id is defined, updates existing routes
     *
     * @generated from protobuf rpc: SetRoutes(pomerium.dashboard.SetRoutesRequest) returns (pomerium.dashboard.SetRoutesResponse);
     */
    setRoutes(input: SetRoutesRequest, options?: RpcOptions): UnaryCall<SetRoutesRequest, SetRoutesResponse>;
    /**
     * MoveRoutes takes an array of routeIds and moves them to a new namespace
     *
     * @generated from protobuf rpc: MoveRoutes(pomerium.dashboard.MoveRoutesRequest) returns (pomerium.dashboard.MoveRoutesResponse);
     */
    moveRoutes(input: MoveRoutesRequest, options?: RpcOptions): UnaryCall<MoveRoutesRequest, MoveRoutesResponse>;
}
/**
 * RouteService manages proxy route definitions
 *
 * @generated from protobuf service pomerium.dashboard.RouteService
 */
export class RouteServiceClient implements IRouteServiceClient, ServiceInfo {
    typeName = RouteService.typeName;
    methods = RouteService.methods;
    options = RouteService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeleteRoute removes an existing route
     *
     * @generated from protobuf rpc: DeleteRoute(pomerium.dashboard.DeleteRouteRequest) returns (pomerium.dashboard.DeleteRouteResponse);
     */
    deleteRoute(input: DeleteRouteRequest, options?: RpcOptions): UnaryCall<DeleteRouteRequest, DeleteRouteResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRouteRequest, DeleteRouteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteRoutes removes existing routes.
     *
     * @generated from protobuf rpc: DeleteRoutes(pomerium.dashboard.DeleteRoutesRequest) returns (pomerium.dashboard.DeleteRoutesResponse);
     */
    deleteRoutes(input: DeleteRoutesRequest, options?: RpcOptions): UnaryCall<DeleteRoutesRequest, DeleteRoutesResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRoutesRequest, DeleteRoutesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetRoute retrieves an existing route
     *
     * @generated from protobuf rpc: GetRoute(pomerium.dashboard.GetRouteRequest) returns (pomerium.dashboard.GetRouteResponse);
     */
    getRoute(input: GetRouteRequest, options?: RpcOptions): UnaryCall<GetRouteRequest, GetRouteResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRouteRequest, GetRouteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListRoutes lists routes based on ListRoutesRequest
     *
     * @generated from protobuf rpc: ListRoutes(pomerium.dashboard.ListRoutesRequest) returns (pomerium.dashboard.ListRoutesResponse);
     */
    listRoutes(input: ListRoutesRequest, options?: RpcOptions): UnaryCall<ListRoutesRequest, ListRoutesResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListRoutesRequest, ListRoutesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * LoadRoutes imports routes from an existing OSS configuration
     *
     * @generated from protobuf rpc: LoadRoutes(pomerium.dashboard.LoadRoutesRequest) returns (pomerium.dashboard.LoadRoutesResponse);
     */
    loadRoutes(input: LoadRoutesRequest, options?: RpcOptions): UnaryCall<LoadRoutesRequest, LoadRoutesResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoadRoutesRequest, LoadRoutesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SetRoute creates or, if id is defined, updates an existing route
     *
     * @generated from protobuf rpc: SetRoute(pomerium.dashboard.SetRouteRequest) returns (pomerium.dashboard.SetRouteResponse);
     */
    setRoute(input: SetRouteRequest, options?: RpcOptions): UnaryCall<SetRouteRequest, SetRouteResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetRouteRequest, SetRouteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SetRoutes creates or, if id is defined, updates existing routes
     *
     * @generated from protobuf rpc: SetRoutes(pomerium.dashboard.SetRoutesRequest) returns (pomerium.dashboard.SetRoutesResponse);
     */
    setRoutes(input: SetRoutesRequest, options?: RpcOptions): UnaryCall<SetRoutesRequest, SetRoutesResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetRoutesRequest, SetRoutesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * MoveRoutes takes an array of routeIds and moves them to a new namespace
     *
     * @generated from protobuf rpc: MoveRoutes(pomerium.dashboard.MoveRoutesRequest) returns (pomerium.dashboard.MoveRoutesResponse);
     */
    moveRoutes(input: MoveRoutesRequest, options?: RpcOptions): UnaryCall<MoveRoutesRequest, MoveRoutesResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<MoveRoutesRequest, MoveRoutesResponse>("unary", this._transport, method, opt, input);
    }
}