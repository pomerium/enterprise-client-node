// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "users.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import { PomeriumSessionService } from "./users";
import type { ListPomeriumSessionsResponse } from "./users";
import type { ListPomeriumSessionsRequest } from "./users";
import type { ImpersonateResponse } from "./users";
import type { ImpersonateRequest } from "./users";
import type { GetPomeriumSessionResponse } from "./users";
import type { GetPomeriumSessionRequest } from "./users";
import type { DeletePomeriumSessionResponse } from "./users";
import type { DeletePomeriumSessionRequest } from "./users";
import { PomeriumServiceAccountService } from "./users";
import type { SetPomeriumServiceAccountResponse } from "./users";
import type { SetPomeriumServiceAccountRequest } from "./users";
import type { ListPomeriumServiceAccountsResponse } from "./users";
import type { ListPomeriumServiceAccountsRequest } from "./users";
import type { GetPomeriumServiceAccountResponse } from "./users";
import type { GetPomeriumServiceAccountRequest } from "./users";
import type { DeletePomeriumServiceAccountResponse } from "./users";
import type { DeletePomeriumServiceAccountRequest } from "./users";
import type { AddPomeriumServiceAccountResponse } from "./users";
import type { AddPomeriumServiceAccountRequest } from "./users";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UserService } from "./users";
import type { QueryUsersResponse } from "./users";
import type { QueryUsersRequest } from "./users";
import type { QueryGroupsResponse } from "./users";
import type { QueryGroupsRequest } from "./users";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetUserInfoResponse } from "./users";
import type { GetUserInfoRequest } from "./users";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * UserService supports querying directory data from the databroker
 *
 * @generated from protobuf service pomerium.dashboard.UserService
 */
export interface IUserServiceClient {
    /**
     * GetUserInfo retrieves identity information and permission mappings for a
     * user
     *
     * @generated from protobuf rpc: GetUserInfo(pomerium.dashboard.GetUserInfoRequest) returns (pomerium.dashboard.GetUserInfoResponse);
     */
    getUserInfo(input: GetUserInfoRequest, options?: RpcOptions): UnaryCall<GetUserInfoRequest, GetUserInfoResponse>;
    /**
     * QueryGroups retrieves groups from the databroker based on
     * QueryGroupsRequest parameters
     *
     * @generated from protobuf rpc: QueryGroups(pomerium.dashboard.QueryGroupsRequest) returns (pomerium.dashboard.QueryGroupsResponse);
     */
    queryGroups(input: QueryGroupsRequest, options?: RpcOptions): UnaryCall<QueryGroupsRequest, QueryGroupsResponse>;
    /**
     * QueryUsers retrieves users from the databroker based on QueryUsersRequest
     * parameters
     *
     * @generated from protobuf rpc: QueryUsers(pomerium.dashboard.QueryUsersRequest) returns (pomerium.dashboard.QueryUsersResponse);
     */
    queryUsers(input: QueryUsersRequest, options?: RpcOptions): UnaryCall<QueryUsersRequest, QueryUsersResponse>;
}
/**
 * UserService supports querying directory data from the databroker
 *
 * @generated from protobuf service pomerium.dashboard.UserService
 */
export class UserServiceClient implements IUserServiceClient, ServiceInfo {
    typeName = UserService.typeName;
    methods = UserService.methods;
    options = UserService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * GetUserInfo retrieves identity information and permission mappings for a
     * user
     *
     * @generated from protobuf rpc: GetUserInfo(pomerium.dashboard.GetUserInfoRequest) returns (pomerium.dashboard.GetUserInfoResponse);
     */
    getUserInfo(input: GetUserInfoRequest, options?: RpcOptions): UnaryCall<GetUserInfoRequest, GetUserInfoResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetUserInfoRequest, GetUserInfoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * QueryGroups retrieves groups from the databroker based on
     * QueryGroupsRequest parameters
     *
     * @generated from protobuf rpc: QueryGroups(pomerium.dashboard.QueryGroupsRequest) returns (pomerium.dashboard.QueryGroupsResponse);
     */
    queryGroups(input: QueryGroupsRequest, options?: RpcOptions): UnaryCall<QueryGroupsRequest, QueryGroupsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryGroupsRequest, QueryGroupsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * QueryUsers retrieves users from the databroker based on QueryUsersRequest
     * parameters
     *
     * @generated from protobuf rpc: QueryUsers(pomerium.dashboard.QueryUsersRequest) returns (pomerium.dashboard.QueryUsersResponse);
     */
    queryUsers(input: QueryUsersRequest, options?: RpcOptions): UnaryCall<QueryUsersRequest, QueryUsersResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryUsersRequest, QueryUsersResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * PomeriumServiceAccountService manages service accounts for use with the
 * pomerium console API
 *
 * @generated from protobuf service pomerium.dashboard.PomeriumServiceAccountService
 */
export interface IPomeriumServiceAccountServiceClient {
    /**
     * AddPomeriumServiceAccount creates a new service account
     *
     * @generated from protobuf rpc: AddPomeriumServiceAccount(pomerium.dashboard.AddPomeriumServiceAccountRequest) returns (pomerium.dashboard.AddPomeriumServiceAccountResponse);
     */
    addPomeriumServiceAccount(input: AddPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<AddPomeriumServiceAccountRequest, AddPomeriumServiceAccountResponse>;
    /**
     * DeletePomeriumServiceAccount removes an existing service account
     *
     * @generated from protobuf rpc: DeletePomeriumServiceAccount(pomerium.dashboard.DeletePomeriumServiceAccountRequest) returns (pomerium.dashboard.DeletePomeriumServiceAccountResponse);
     */
    deletePomeriumServiceAccount(input: DeletePomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<DeletePomeriumServiceAccountRequest, DeletePomeriumServiceAccountResponse>;
    /**
     * GetPomeriumServiceAccount retrieves an existing service account
     *
     * @generated from protobuf rpc: GetPomeriumServiceAccount(pomerium.dashboard.GetPomeriumServiceAccountRequest) returns (pomerium.dashboard.GetPomeriumServiceAccountResponse);
     */
    getPomeriumServiceAccount(input: GetPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<GetPomeriumServiceAccountRequest, GetPomeriumServiceAccountResponse>;
    /**
     * ListPomeriumServiceAccounts lists service accounts based on the parameters
     * in ListPomeriumServiceAccountsRequest
     *
     * @generated from protobuf rpc: ListPomeriumServiceAccounts(pomerium.dashboard.ListPomeriumServiceAccountsRequest) returns (pomerium.dashboard.ListPomeriumServiceAccountsResponse);
     */
    listPomeriumServiceAccounts(input: ListPomeriumServiceAccountsRequest, options?: RpcOptions): UnaryCall<ListPomeriumServiceAccountsRequest, ListPomeriumServiceAccountsResponse>;
    /**
     * @generated from protobuf rpc: SetPomeriumServiceAccount(pomerium.dashboard.SetPomeriumServiceAccountRequest) returns (pomerium.dashboard.SetPomeriumServiceAccountResponse);
     */
    setPomeriumServiceAccount(input: SetPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<SetPomeriumServiceAccountRequest, SetPomeriumServiceAccountResponse>;
}
/**
 * PomeriumServiceAccountService manages service accounts for use with the
 * pomerium console API
 *
 * @generated from protobuf service pomerium.dashboard.PomeriumServiceAccountService
 */
export class PomeriumServiceAccountServiceClient implements IPomeriumServiceAccountServiceClient, ServiceInfo {
    typeName = PomeriumServiceAccountService.typeName;
    methods = PomeriumServiceAccountService.methods;
    options = PomeriumServiceAccountService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * AddPomeriumServiceAccount creates a new service account
     *
     * @generated from protobuf rpc: AddPomeriumServiceAccount(pomerium.dashboard.AddPomeriumServiceAccountRequest) returns (pomerium.dashboard.AddPomeriumServiceAccountResponse);
     */
    addPomeriumServiceAccount(input: AddPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<AddPomeriumServiceAccountRequest, AddPomeriumServiceAccountResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddPomeriumServiceAccountRequest, AddPomeriumServiceAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DeletePomeriumServiceAccount removes an existing service account
     *
     * @generated from protobuf rpc: DeletePomeriumServiceAccount(pomerium.dashboard.DeletePomeriumServiceAccountRequest) returns (pomerium.dashboard.DeletePomeriumServiceAccountResponse);
     */
    deletePomeriumServiceAccount(input: DeletePomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<DeletePomeriumServiceAccountRequest, DeletePomeriumServiceAccountResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeletePomeriumServiceAccountRequest, DeletePomeriumServiceAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetPomeriumServiceAccount retrieves an existing service account
     *
     * @generated from protobuf rpc: GetPomeriumServiceAccount(pomerium.dashboard.GetPomeriumServiceAccountRequest) returns (pomerium.dashboard.GetPomeriumServiceAccountResponse);
     */
    getPomeriumServiceAccount(input: GetPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<GetPomeriumServiceAccountRequest, GetPomeriumServiceAccountResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPomeriumServiceAccountRequest, GetPomeriumServiceAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListPomeriumServiceAccounts lists service accounts based on the parameters
     * in ListPomeriumServiceAccountsRequest
     *
     * @generated from protobuf rpc: ListPomeriumServiceAccounts(pomerium.dashboard.ListPomeriumServiceAccountsRequest) returns (pomerium.dashboard.ListPomeriumServiceAccountsResponse);
     */
    listPomeriumServiceAccounts(input: ListPomeriumServiceAccountsRequest, options?: RpcOptions): UnaryCall<ListPomeriumServiceAccountsRequest, ListPomeriumServiceAccountsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListPomeriumServiceAccountsRequest, ListPomeriumServiceAccountsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetPomeriumServiceAccount(pomerium.dashboard.SetPomeriumServiceAccountRequest) returns (pomerium.dashboard.SetPomeriumServiceAccountResponse);
     */
    setPomeriumServiceAccount(input: SetPomeriumServiceAccountRequest, options?: RpcOptions): UnaryCall<SetPomeriumServiceAccountRequest, SetPomeriumServiceAccountResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<SetPomeriumServiceAccountRequest, SetPomeriumServiceAccountResponse>("unary", this._transport, method, opt, input);
    }
}
/**
 * PomeriumSessionService manages user sessions inside the databroker
 *
 * @generated from protobuf service pomerium.dashboard.PomeriumSessionService
 */
export interface IPomeriumSessionServiceClient {
    /**
     * DeletePomeriumSession clears an existing user session
     *
     * @generated from protobuf rpc: DeletePomeriumSession(pomerium.dashboard.DeletePomeriumSessionRequest) returns (pomerium.dashboard.DeletePomeriumSessionResponse);
     */
    deletePomeriumSession(input: DeletePomeriumSessionRequest, options?: RpcOptions): UnaryCall<DeletePomeriumSessionRequest, DeletePomeriumSessionResponse>;
    /**
     * GetPomeriumSession retrieves information about an existing user session
     *
     * @generated from protobuf rpc: GetPomeriumSession(pomerium.dashboard.GetPomeriumSessionRequest) returns (pomerium.dashboard.GetPomeriumSessionResponse);
     */
    getPomeriumSession(input: GetPomeriumSessionRequest, options?: RpcOptions): UnaryCall<GetPomeriumSessionRequest, GetPomeriumSessionResponse>;
    /**
     * Impersonate updates an existing session to impersonate another identity
     *
     * @generated from protobuf rpc: Impersonate(pomerium.dashboard.ImpersonateRequest) returns (pomerium.dashboard.ImpersonateResponse);
     */
    impersonate(input: ImpersonateRequest, options?: RpcOptions): UnaryCall<ImpersonateRequest, ImpersonateResponse>;
    /**
     * ListPomeriumSessions lists existing sessions based on the parameters of
     * ListPomeriumSessionsRequest
     *
     * @generated from protobuf rpc: ListPomeriumSessions(pomerium.dashboard.ListPomeriumSessionsRequest) returns (pomerium.dashboard.ListPomeriumSessionsResponse);
     */
    listPomeriumSessions(input: ListPomeriumSessionsRequest, options?: RpcOptions): UnaryCall<ListPomeriumSessionsRequest, ListPomeriumSessionsResponse>;
}
/**
 * PomeriumSessionService manages user sessions inside the databroker
 *
 * @generated from protobuf service pomerium.dashboard.PomeriumSessionService
 */
export class PomeriumSessionServiceClient implements IPomeriumSessionServiceClient, ServiceInfo {
    typeName = PomeriumSessionService.typeName;
    methods = PomeriumSessionService.methods;
    options = PomeriumSessionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * DeletePomeriumSession clears an existing user session
     *
     * @generated from protobuf rpc: DeletePomeriumSession(pomerium.dashboard.DeletePomeriumSessionRequest) returns (pomerium.dashboard.DeletePomeriumSessionResponse);
     */
    deletePomeriumSession(input: DeletePomeriumSessionRequest, options?: RpcOptions): UnaryCall<DeletePomeriumSessionRequest, DeletePomeriumSessionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeletePomeriumSessionRequest, DeletePomeriumSessionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetPomeriumSession retrieves information about an existing user session
     *
     * @generated from protobuf rpc: GetPomeriumSession(pomerium.dashboard.GetPomeriumSessionRequest) returns (pomerium.dashboard.GetPomeriumSessionResponse);
     */
    getPomeriumSession(input: GetPomeriumSessionRequest, options?: RpcOptions): UnaryCall<GetPomeriumSessionRequest, GetPomeriumSessionResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPomeriumSessionRequest, GetPomeriumSessionResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Impersonate updates an existing session to impersonate another identity
     *
     * @generated from protobuf rpc: Impersonate(pomerium.dashboard.ImpersonateRequest) returns (pomerium.dashboard.ImpersonateResponse);
     */
    impersonate(input: ImpersonateRequest, options?: RpcOptions): UnaryCall<ImpersonateRequest, ImpersonateResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<ImpersonateRequest, ImpersonateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ListPomeriumSessions lists existing sessions based on the parameters of
     * ListPomeriumSessionsRequest
     *
     * @generated from protobuf rpc: ListPomeriumSessions(pomerium.dashboard.ListPomeriumSessionsRequest) returns (pomerium.dashboard.ListPomeriumSessionsResponse);
     */
    listPomeriumSessions(input: ListPomeriumSessionsRequest, options?: RpcOptions): UnaryCall<ListPomeriumSessionsRequest, ListPomeriumSessionsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListPomeriumSessionsRequest, ListPomeriumSessionsResponse>("unary", this._transport, method, opt, input);
    }
}
