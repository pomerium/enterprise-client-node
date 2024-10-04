import { GrpcOptions, GrpcTransport } from "@protobuf-ts/grpc-transport";
import { ActivityLogServiceClient } from "./pomerium-console/activity_log.client";
import {
  CallCredentials,
  ChannelCredentials,
  Metadata,
  VerifyOptions,
} from "@grpc/grpc-js";
import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { DeviceServiceClient } from "./pomerium-console/devices.client";
import { KeyChainServiceClient } from "./pomerium-console/key_chain.client";
import {
  NamespacePermissionServiceClient,
  NamespaceServiceClient,
} from "./pomerium-console/namespaces.client";
import { PolicyServiceClient } from "./pomerium-console/policy.client";
import {
  PomeriumServiceAccountServiceClient,
  PomeriumSessionServiceClient,
  UserServiceClient,
} from "./pomerium-console/users.client";
import { RouteServiceClient } from "./pomerium-console/routes.client";
import { SettingsServiceClient } from "./pomerium-console/settings.client";

export type ClientOptions = {
  rootCerts?: Buffer;
  privateKey?: Buffer;
  certChain?: Buffer;
  verifyOptions?: VerifyOptions;
  grpcOptions?: Omit<GrpcOptions, "host" | "channelCredentials">;
};

export class Client {
  private _transport: RpcTransport;

  public activityLog: ActivityLogServiceClient;
  public device: DeviceServiceClient;
  public keyChain: KeyChainServiceClient;
  public namespacePermission: NamespacePermissionServiceClient;
  public namespace: NamespaceServiceClient;
  public policy: PolicyServiceClient;
  public pomeriumServiceAccount: PomeriumServiceAccountServiceClient;
  public pomeriumSession: PomeriumSessionServiceClient;
  public route: RouteServiceClient;
  public settings: SettingsServiceClient;
  public user: UserServiceClient;

  constructor(target: string, authToken: string, options?: ClientOptions) {
    const channelCredentials = ChannelCredentials.createSsl(
      options?.rootCerts || null,
      options?.privateKey || null,
      options?.certChain || null,
      options?.verifyOptions
    ).compose(
      CallCredentials.createFromMetadataGenerator((_, cb) => {
        const metadata = new Metadata();
        metadata.set("authorization", `Pomerium ${authToken}`);
        cb(null, metadata);
      })
    );

    this._transport = new GrpcTransport({
      ...(options?.grpcOptions || {}),
      host: target,
      channelCredentials: channelCredentials,
    });

    this.activityLog = new ActivityLogServiceClient(this._transport);
    this.device = new DeviceServiceClient(this._transport);
    this.keyChain = new KeyChainServiceClient(this._transport);
    this.namespacePermission = new NamespacePermissionServiceClient(
      this._transport
    );
    this.namespace = new NamespaceServiceClient(this._transport);
    this.policy = new PolicyServiceClient(this._transport);
    this.pomeriumServiceAccount = new PomeriumServiceAccountServiceClient(
      this._transport
    );
    this.pomeriumSession = new PomeriumSessionServiceClient(this._transport);
    this.route = new RouteServiceClient(this._transport);
    this.settings = new SettingsServiceClient(this._transport);
    this.user = new UserServiceClient(this._transport);
  }
}
