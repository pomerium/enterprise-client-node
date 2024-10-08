// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "report.proto" (package "pomerium.dashboard", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Policy } from "./policy";
import { Route } from "./routes";
/**
 * PolicyReportRequest may either specify a list of routes,
 * or request to report all routes of the namespace
 *
 * @generated from protobuf message pomerium.dashboard.PolicyReportRequest
 */
export interface PolicyReportRequest {
    /**
     * @generated from protobuf field: repeated string route_ids = 1;
     */
    routeIds: string[];
    /**
     * @generated from protobuf field: string namespace_id = 2;
     */
    namespaceId: string;
}
/**
 * @generated from protobuf message pomerium.dashboard.PolicyReportResponse
 */
export interface PolicyReportResponse {
    /**
     * @generated from protobuf field: repeated pomerium.dashboard.Route routes = 1;
     */
    routes: Route[];
    /**
     * @generated from protobuf field: repeated pomerium.dashboard.Policy policies = 2;
     */
    policies: Policy[];
}
// @generated message type with reflection information, may provide speed optimized methods
class PolicyReportRequest$Type extends MessageType<PolicyReportRequest> {
    constructor() {
        super("pomerium.dashboard.PolicyReportRequest", [
            { no: 1, name: "route_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "namespace_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PolicyReportRequest>): PolicyReportRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.routeIds = [];
        message.namespaceId = "";
        if (value !== undefined)
            reflectionMergePartial<PolicyReportRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PolicyReportRequest): PolicyReportRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string route_ids */ 1:
                    message.routeIds.push(reader.string());
                    break;
                case /* string namespace_id */ 2:
                    message.namespaceId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PolicyReportRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string route_ids = 1; */
        for (let i = 0; i < message.routeIds.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.routeIds[i]);
        /* string namespace_id = 2; */
        if (message.namespaceId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.namespaceId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pomerium.dashboard.PolicyReportRequest
 */
export const PolicyReportRequest = new PolicyReportRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PolicyReportResponse$Type extends MessageType<PolicyReportResponse> {
    constructor() {
        super("pomerium.dashboard.PolicyReportResponse", [
            { no: 1, name: "routes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Route },
            { no: 2, name: "policies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Policy }
        ]);
    }
    create(value?: PartialMessage<PolicyReportResponse>): PolicyReportResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.routes = [];
        message.policies = [];
        if (value !== undefined)
            reflectionMergePartial<PolicyReportResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PolicyReportResponse): PolicyReportResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated pomerium.dashboard.Route routes */ 1:
                    message.routes.push(Route.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated pomerium.dashboard.Policy policies */ 2:
                    message.policies.push(Policy.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PolicyReportResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated pomerium.dashboard.Route routes = 1; */
        for (let i = 0; i < message.routes.length; i++)
            Route.internalBinaryWrite(message.routes[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated pomerium.dashboard.Policy policies = 2; */
        for (let i = 0; i < message.policies.length; i++)
            Policy.internalBinaryWrite(message.policies[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pomerium.dashboard.PolicyReportResponse
 */
export const PolicyReportResponse = new PolicyReportResponse$Type();
/**
 * @generated ServiceType for protobuf service pomerium.dashboard.Report
 */
export const Report = new ServiceType("pomerium.dashboard.Report", [
    { name: "PolicyReport", options: {}, I: PolicyReportRequest, O: PolicyReportResponse }
]);
