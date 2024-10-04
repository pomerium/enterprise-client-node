// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "namespaces.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import { NamespacePermissionService } from "./namespaces";
import type { SetNamespacePermissionResponse } from "./namespaces";
import type { SetNamespacePermissionRequest } from "./namespaces";
import type { ListNamespacePermissionUsersResponse } from "./namespaces";
import type { ListNamespacePermissionUsersRequest } from "./namespaces";
import type { ListNamespacePermissionGroupsResponse } from "./namespaces";
import type { ListNamespacePermissionGroupsRequest } from "./namespaces";
import type { ListNamespacePermissionsResponse } from "./namespaces";
import type { ListNamespacePermissionsRequest } from "./namespaces";
import type { GetNamespacePermissionResponse } from "./namespaces";
import type { GetNamespacePermissionRequest } from "./namespaces";
import type { DeleteNamespacePermissionResponse } from "./namespaces";
import type { DeleteNamespacePermissionRequest } from "./namespaces";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { NamespaceService } from "./namespaces";
import type { SetNamespaceResponse } from "./namespaces";
import type { SetNamespaceRequest } from "./namespaces";
import type { ListNamespaceResourcesResponse } from "./namespaces";
import type { ListNamespaceResourcesRequest } from "./namespaces";
import type { ListNamespacesResponse } from "./namespaces";
import type { ListNamespacesRequest } from "./namespaces";
import type { GetNamespaceResponse } from "./namespaces";
import type { GetNamespaceRequest } from "./namespaces";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { DeleteNamespaceResponse } from "./namespaces";
import type { DeleteNamespaceRequest } from "./namespaces";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * NamespaceService manages namespaces
 *
 * @generated from protobuf service pomerium.dashboard.NamespaceService
 */
export interface INamespaceServiceClient {
    /**
     * DeleteNamespace deletes a namespace
     *
     * @generated from protobuf rpc: DeleteNamespace(pomerium.dashboard.DeleteNamespaceRequest) returns (pomerium.dashboard.DeleteNamespaceResponse);
     */
    deleteNamespace(input: DeleteNamespaceRequest, options?: RpcOptions): UnaryCall<DeleteNamespaceRequest, DeleteNamespaceResponse>;
    /**
     * GetNamespace retrieves a namespace
     *
     * @generated from protobuf rpc: GetNamespace(pomerium.dashboard.GetNamespaceRequest) returns (pomerium.dashboard.GetNamespaceResponse);
     */
    getNamespace(input: GetNamespaceRequest, options?: RpcOptions): UnaryCall<GetNamespaceRequest, GetNamespaceResponse>;
    /**
     * ListNamespaces lists all namespaces
     *
     * @generated from protobuf rpc: ListNamespaces(pomerium.dashboard.ListNamespacesRequest) returns (pomerium.dashboard.ListNamespacesResponse);
     */
    listNamespaces(input: ListNamespacesRequest, options?: RpcOptions): UnaryCall<ListNamespacesRequest, ListNamespacesResponse>;
    /**
     * ListNamespaceResources lists all the resources for a namespace.
     *
     * @generated from protobuf rpc: ListNamespaceResources(pomerium.dashboard.ListNamespaceResourcesRequest) returns (pomerium.dashboard.ListNamespaceResourcesResponse);
     */
    listNamespaceResources(input: ListNamespaceResourcesRequest, options?: RpcOptions): UnaryCall<ListNamespaceResourcesRequest, ListNamespaceResourcesResponse>;
    /**
     * SetNamespace creates a namespace or, if the id is specified, updates an
     * existing namespace
     *
     * @generated from protobuf rpc: SetNamespace(pomerium.dashboard.SetNamespaceRequest) returns (pomerium.dashboard.SetNamespaceResponse);
     */
    setNamespace(input: SetNamespaceRequest, options?: RpcOptions): UnaryCall<SetNamespaceRequest, SetNamespaceResponse>;
}
/**
 * NamespaceService manages namespaces
 *
 * @generated from protobuf service pomerium.dashboard.NamespaceService
 */
export class NamespaceServiceClient implements INamespaceServiceClient, ServiceInfo {
    typeName = NamespaceService.typeName;
    methods = NamespaceService.methods;
    options = NamespaceService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeleteNamespace deletes a namespace
     *
     * @generated from protobuf rpc: DeleteNamespace(pomerium.dashboard.DeleteNamespaceRequest) returns (pomerium.dashboard.DeleteNamespaceResponse);
     */
    deleteNamespace(input: DeleteNamespaceRequest, options?: RpcOptions): UnaryCall<DeleteNamespaceRequest, DeleteNamespaceResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteNamespaceRequest, DeleteNamespaceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetNamespace retrieves a namespace
     *
     * @generated from protobuf rpc: GetNamespace(pomerium.dashboard.GetNamespaceRequest) returns (pomerium.dashboard.GetNamespaceResponse);
     */
    getNamespace(input: GetNamespaceRequest, options?: RpcOptions): UnaryCall<GetNamespaceRequest, GetNamespaceResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetNamespaceRequest, GetNamespaceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListNamespaces lists all namespaces
     *
     * @generated from protobuf rpc: ListNamespaces(pomerium.dashboard.ListNamespacesRequest) returns (pomerium.dashboard.ListNamespacesResponse);
     */
    listNamespaces(input: ListNamespacesRequest, options?: RpcOptions): UnaryCall<ListNamespacesRequest, ListNamespacesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListNamespacesRequest, ListNamespacesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListNamespaceResources lists all the resources for a namespace.
     *
     * @generated from protobuf rpc: ListNamespaceResources(pomerium.dashboard.ListNamespaceResourcesRequest) returns (pomerium.dashboard.ListNamespaceResourcesResponse);
     */
    listNamespaceResources(input: ListNamespaceResourcesRequest, options?: RpcOptions): UnaryCall<ListNamespaceResourcesRequest, ListNamespaceResourcesResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListNamespaceResourcesRequest, ListNamespaceResourcesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SetNamespace creates a namespace or, if the id is specified, updates an
     * existing namespace
     *
     * @generated from protobuf rpc: SetNamespace(pomerium.dashboard.SetNamespaceRequest) returns (pomerium.dashboard.SetNamespaceResponse);
     */
    setNamespace(input: SetNamespaceRequest, options?: RpcOptions): UnaryCall<SetNamespaceRequest, SetNamespaceResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetNamespaceRequest, SetNamespaceResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * NamespacePermissionService manages permissions set on namespaces
 *
 * @generated from protobuf service pomerium.dashboard.NamespacePermissionService
 */
export interface INamespacePermissionServiceClient {
    /**
     * DeleteNamespacePermission removes an existing permission definition
     *
     * @generated from protobuf rpc: DeleteNamespacePermission(pomerium.dashboard.DeleteNamespacePermissionRequest) returns (pomerium.dashboard.DeleteNamespacePermissionResponse);
     */
    deleteNamespacePermission(input: DeleteNamespacePermissionRequest, options?: RpcOptions): UnaryCall<DeleteNamespacePermissionRequest, DeleteNamespacePermissionResponse>;
    /**
     * GetNamespacePermission retrieves an existing permission definition
     *
     * @generated from protobuf rpc: GetNamespacePermission(pomerium.dashboard.GetNamespacePermissionRequest) returns (pomerium.dashboard.GetNamespacePermissionResponse);
     */
    getNamespacePermission(input: GetNamespacePermissionRequest, options?: RpcOptions): UnaryCall<GetNamespacePermissionRequest, GetNamespacePermissionResponse>;
    /**
     * ListNamespacePermissions retrieves existing permissions for all namespaces
     *
     * @generated from protobuf rpc: ListNamespacePermissions(pomerium.dashboard.ListNamespacePermissionsRequest) returns (pomerium.dashboard.ListNamespacePermissionsResponse);
     */
    listNamespacePermissions(input: ListNamespacePermissionsRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionsRequest, ListNamespacePermissionsResponse>;
    /**
     * ListNamespacePermissionGroups retrieves existing group based permissions on
     * a namespace
     *
     * @generated from protobuf rpc: ListNamespacePermissionGroups(pomerium.dashboard.ListNamespacePermissionGroupsRequest) returns (pomerium.dashboard.ListNamespacePermissionGroupsResponse);
     */
    listNamespacePermissionGroups(input: ListNamespacePermissionGroupsRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionGroupsRequest, ListNamespacePermissionGroupsResponse>;
    /**
     * ListNamespacePermissionUsers retrieves existing user based permissions on a
     * namespace
     *
     * @generated from protobuf rpc: ListNamespacePermissionUsers(pomerium.dashboard.ListNamespacePermissionUsersRequest) returns (pomerium.dashboard.ListNamespacePermissionUsersResponse);
     */
    listNamespacePermissionUsers(input: ListNamespacePermissionUsersRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionUsersRequest, ListNamespacePermissionUsersResponse>;
    /**
     * SetNamespacePermission set a new permission definition on a namespace
     *
     * @generated from protobuf rpc: SetNamespacePermission(pomerium.dashboard.SetNamespacePermissionRequest) returns (pomerium.dashboard.SetNamespacePermissionResponse);
     */
    setNamespacePermission(input: SetNamespacePermissionRequest, options?: RpcOptions): UnaryCall<SetNamespacePermissionRequest, SetNamespacePermissionResponse>;
}
/**
 * NamespacePermissionService manages permissions set on namespaces
 *
 * @generated from protobuf service pomerium.dashboard.NamespacePermissionService
 */
export class NamespacePermissionServiceClient implements INamespacePermissionServiceClient, ServiceInfo {
    typeName = NamespacePermissionService.typeName;
    methods = NamespacePermissionService.methods;
    options = NamespacePermissionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeleteNamespacePermission removes an existing permission definition
     *
     * @generated from protobuf rpc: DeleteNamespacePermission(pomerium.dashboard.DeleteNamespacePermissionRequest) returns (pomerium.dashboard.DeleteNamespacePermissionResponse);
     */
    deleteNamespacePermission(input: DeleteNamespacePermissionRequest, options?: RpcOptions): UnaryCall<DeleteNamespacePermissionRequest, DeleteNamespacePermissionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteNamespacePermissionRequest, DeleteNamespacePermissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetNamespacePermission retrieves an existing permission definition
     *
     * @generated from protobuf rpc: GetNamespacePermission(pomerium.dashboard.GetNamespacePermissionRequest) returns (pomerium.dashboard.GetNamespacePermissionResponse);
     */
    getNamespacePermission(input: GetNamespacePermissionRequest, options?: RpcOptions): UnaryCall<GetNamespacePermissionRequest, GetNamespacePermissionResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetNamespacePermissionRequest, GetNamespacePermissionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListNamespacePermissions retrieves existing permissions for all namespaces
     *
     * @generated from protobuf rpc: ListNamespacePermissions(pomerium.dashboard.ListNamespacePermissionsRequest) returns (pomerium.dashboard.ListNamespacePermissionsResponse);
     */
    listNamespacePermissions(input: ListNamespacePermissionsRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionsRequest, ListNamespacePermissionsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListNamespacePermissionsRequest, ListNamespacePermissionsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListNamespacePermissionGroups retrieves existing group based permissions on
     * a namespace
     *
     * @generated from protobuf rpc: ListNamespacePermissionGroups(pomerium.dashboard.ListNamespacePermissionGroupsRequest) returns (pomerium.dashboard.ListNamespacePermissionGroupsResponse);
     */
    listNamespacePermissionGroups(input: ListNamespacePermissionGroupsRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionGroupsRequest, ListNamespacePermissionGroupsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListNamespacePermissionGroupsRequest, ListNamespacePermissionGroupsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListNamespacePermissionUsers retrieves existing user based permissions on a
     * namespace
     *
     * @generated from protobuf rpc: ListNamespacePermissionUsers(pomerium.dashboard.ListNamespacePermissionUsersRequest) returns (pomerium.dashboard.ListNamespacePermissionUsersResponse);
     */
    listNamespacePermissionUsers(input: ListNamespacePermissionUsersRequest, options?: RpcOptions): UnaryCall<ListNamespacePermissionUsersRequest, ListNamespacePermissionUsersResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListNamespacePermissionUsersRequest, ListNamespacePermissionUsersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * SetNamespacePermission set a new permission definition on a namespace
     *
     * @generated from protobuf rpc: SetNamespacePermission(pomerium.dashboard.SetNamespacePermissionRequest) returns (pomerium.dashboard.SetNamespacePermissionResponse);
     */
    setNamespacePermission(input: SetNamespacePermissionRequest, options?: RpcOptions): UnaryCall<SetNamespacePermissionRequest, SetNamespacePermissionResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetNamespacePermissionRequest, SetNamespacePermissionResponse>("unary", this._transport, method, opt, input);
    }
}
