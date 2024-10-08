// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "console_last_error.proto" (package "pomerium.dashboard", syntax proto3)
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
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message pomerium.dashboard.LastError
 */
export interface LastError {
    /**
     * @generated from protobuf field: pomerium.dashboard.LastError.Service service = 1;
     */
    service: LastError_Service;
    /**
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 3;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: string message = 4;
     */
    message: string;
    /**
     * @generated from protobuf field: map<string, string> metadata = 5;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: optional string content_type = 6;
     */
    contentType?: string;
    /**
     * @generated from protobuf field: bytes data = 7;
     */
    data: Uint8Array;
}
/**
 * @generated from protobuf enum pomerium.dashboard.LastError.Service
 */
export enum LastError_Service {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: EXTERNAL_DATA_SOURCE = 1;
     */
    EXTERNAL_DATA_SOURCE = 1
}
/**
 * @generated from protobuf message pomerium.dashboard.GetLastErrorRequest
 */
export interface GetLastErrorRequest {
    /**
     * @generated from protobuf field: pomerium.dashboard.LastError.Service service = 1;
     */
    service: LastError_Service;
    /**
     * @generated from protobuf field: string id = 2;
     */
    id: string;
}
/**
 * @generated from protobuf message pomerium.dashboard.GetLastErrorResponse
 */
export interface GetLastErrorResponse {
    /**
     * @generated from protobuf field: pomerium.dashboard.LastError last_error = 1;
     */
    lastError?: LastError;
}
// @generated message type with reflection information, may provide speed optimized methods
class LastError$Type extends MessageType<LastError> {
    constructor() {
        super("pomerium.dashboard.LastError", [
            { no: 1, name: "service", kind: "enum", T: () => ["pomerium.dashboard.LastError.Service", LastError_Service] },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "time", kind: "message", T: () => Timestamp },
            { no: 4, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 6, name: "content_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<LastError>): LastError {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.service = 0;
        message.id = "";
        message.message = "";
        message.metadata = {};
        message.data = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<LastError>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LastError): LastError {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* pomerium.dashboard.LastError.Service service */ 1:
                    message.service = reader.int32();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* google.protobuf.Timestamp time */ 3:
                    message.time = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.time);
                    break;
                case /* string message */ 4:
                    message.message = reader.string();
                    break;
                case /* map<string, string> metadata */ 5:
                    this.binaryReadMap5(message.metadata, reader, options);
                    break;
                case /* optional string content_type */ 6:
                    message.contentType = reader.string();
                    break;
                case /* bytes data */ 7:
                    message.data = reader.bytes();
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
    private binaryReadMap5(map: LastError["metadata"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof LastError["metadata"] | undefined, val: LastError["metadata"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field pomerium.dashboard.LastError.metadata");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: LastError, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* pomerium.dashboard.LastError.Service service = 1; */
        if (message.service !== 0)
            writer.tag(1, WireType.Varint).int32(message.service);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* google.protobuf.Timestamp time = 3; */
        if (message.time)
            Timestamp.internalBinaryWrite(message.time, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string message = 4; */
        if (message.message !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.message);
        /* map<string, string> metadata = 5; */
        for (let k of globalThis.Object.keys(message.metadata))
            writer.tag(5, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.metadata[k]).join();
        /* optional string content_type = 6; */
        if (message.contentType !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.contentType);
        /* bytes data = 7; */
        if (message.data.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pomerium.dashboard.LastError
 */
export const LastError = new LastError$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetLastErrorRequest$Type extends MessageType<GetLastErrorRequest> {
    constructor() {
        super("pomerium.dashboard.GetLastErrorRequest", [
            { no: 1, name: "service", kind: "enum", T: () => ["pomerium.dashboard.LastError.Service", LastError_Service] },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetLastErrorRequest>): GetLastErrorRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.service = 0;
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<GetLastErrorRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastErrorRequest): GetLastErrorRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* pomerium.dashboard.LastError.Service service */ 1:
                    message.service = reader.int32();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
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
    internalBinaryWrite(message: GetLastErrorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* pomerium.dashboard.LastError.Service service = 1; */
        if (message.service !== 0)
            writer.tag(1, WireType.Varint).int32(message.service);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pomerium.dashboard.GetLastErrorRequest
 */
export const GetLastErrorRequest = new GetLastErrorRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetLastErrorResponse$Type extends MessageType<GetLastErrorResponse> {
    constructor() {
        super("pomerium.dashboard.GetLastErrorResponse", [
            { no: 1, name: "last_error", kind: "message", T: () => LastError }
        ]);
    }
    create(value?: PartialMessage<GetLastErrorResponse>): GetLastErrorResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetLastErrorResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLastErrorResponse): GetLastErrorResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* pomerium.dashboard.LastError last_error */ 1:
                    message.lastError = LastError.internalBinaryRead(reader, reader.uint32(), options, message.lastError);
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
    internalBinaryWrite(message: GetLastErrorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* pomerium.dashboard.LastError last_error = 1; */
        if (message.lastError)
            LastError.internalBinaryWrite(message.lastError, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pomerium.dashboard.GetLastErrorResponse
 */
export const GetLastErrorResponse = new GetLastErrorResponse$Type();
/**
 * @generated ServiceType for protobuf service pomerium.dashboard.LastErrorService
 */
export const LastErrorService = new ServiceType("pomerium.dashboard.LastErrorService", [
    { name: "GetLastError", options: {}, I: GetLastErrorRequest, O: GetLastErrorResponse }
]);
