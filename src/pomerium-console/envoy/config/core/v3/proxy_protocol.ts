// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/config/core/v3/proxy_protocol.proto" (package "envoy.config.core.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: Proxy protocol]

/**
 * @generated from protobuf message envoy.config.core.v3.ProxyProtocolPassThroughTLVs
 */
export interface ProxyProtocolPassThroughTLVs {
    /**
     * The strategy to pass through TLVs. Default is INCLUDE_ALL.
     * If INCLUDE_ALL is set, all TLVs will be passed through no matter the tlv_type field.
     *
     * @generated from protobuf field: envoy.config.core.v3.ProxyProtocolPassThroughTLVs.PassTLVsMatchType match_type = 1;
     */
    matchType: ProxyProtocolPassThroughTLVs_PassTLVsMatchType;
    /**
     * The TLV types that are applied based on match_type.
     * TLV type is defined as uint8_t in proxy protocol. See `the spec
     * <https://www.haproxy.org/download/2.1/doc/proxy-protocol.txt>`_ for details.
     *
     * @generated from protobuf field: repeated uint32 tlv_type = 2;
     */
    tlvType: number[];
}
/**
 * @generated from protobuf enum envoy.config.core.v3.ProxyProtocolPassThroughTLVs.PassTLVsMatchType
 */
export enum ProxyProtocolPassThroughTLVs_PassTLVsMatchType {
    /**
     * Pass all TLVs.
     *
     * @generated from protobuf enum value: INCLUDE_ALL = 0;
     */
    INCLUDE_ALL = 0,
    /**
     * Pass specific TLVs defined in tlv_type.
     *
     * @generated from protobuf enum value: INCLUDE = 1;
     */
    INCLUDE = 1
}
/**
 * @generated from protobuf message envoy.config.core.v3.ProxyProtocolConfig
 */
export interface ProxyProtocolConfig {
    /**
     * The PROXY protocol version to use. See https://www.haproxy.org/download/2.1/doc/proxy-protocol.txt for details
     *
     * @generated from protobuf field: envoy.config.core.v3.ProxyProtocolConfig.Version version = 1;
     */
    version: ProxyProtocolConfig_Version;
    /**
     * This config controls which TLVs can be passed to upstream if it is Proxy Protocol
     * V2 header. If there is no setting for this field, no TLVs will be passed through.
     *
     * @generated from protobuf field: envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs = 2;
     */
    passThroughTlvs?: ProxyProtocolPassThroughTLVs;
}
/**
 * @generated from protobuf enum envoy.config.core.v3.ProxyProtocolConfig.Version
 */
export enum ProxyProtocolConfig_Version {
    /**
     * PROXY protocol version 1. Human readable format.
     *
     * @generated from protobuf enum value: V1 = 0;
     */
    V1 = 0,
    /**
     * PROXY protocol version 2. Binary format.
     *
     * @generated from protobuf enum value: V2 = 1;
     */
    V2 = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocolPassThroughTLVs$Type extends MessageType<ProxyProtocolPassThroughTLVs> {
    constructor() {
        super("envoy.config.core.v3.ProxyProtocolPassThroughTLVs", [
            { no: 1, name: "match_type", kind: "enum", T: () => ["envoy.config.core.v3.ProxyProtocolPassThroughTLVs.PassTLVsMatchType", ProxyProtocolPassThroughTLVs_PassTLVsMatchType] },
            { no: 2, name: "tlv_type", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/, options: { "validate.rules": { repeated: { items: { uint32: { lt: 256 } } } } } }
        ]);
    }
    create(value?: PartialMessage<ProxyProtocolPassThroughTLVs>): ProxyProtocolPassThroughTLVs {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.matchType = 0;
        message.tlvType = [];
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocolPassThroughTLVs>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocolPassThroughTLVs): ProxyProtocolPassThroughTLVs {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs.PassTLVsMatchType match_type */ 1:
                    message.matchType = reader.int32();
                    break;
                case /* repeated uint32 tlv_type */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tlvType.push(reader.uint32());
                    else
                        message.tlvType.push(reader.uint32());
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
    internalBinaryWrite(message: ProxyProtocolPassThroughTLVs, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs.PassTLVsMatchType match_type = 1; */
        if (message.matchType !== 0)
            writer.tag(1, WireType.Varint).int32(message.matchType);
        /* repeated uint32 tlv_type = 2; */
        if (message.tlvType.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tlvType.length; i++)
                writer.uint32(message.tlvType[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.core.v3.ProxyProtocolPassThroughTLVs
 */
export const ProxyProtocolPassThroughTLVs = new ProxyProtocolPassThroughTLVs$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProtocolConfig$Type extends MessageType<ProxyProtocolConfig> {
    constructor() {
        super("envoy.config.core.v3.ProxyProtocolConfig", [
            { no: 1, name: "version", kind: "enum", T: () => ["envoy.config.core.v3.ProxyProtocolConfig.Version", ProxyProtocolConfig_Version] },
            { no: 2, name: "pass_through_tlvs", kind: "message", T: () => ProxyProtocolPassThroughTLVs }
        ]);
    }
    create(value?: PartialMessage<ProxyProtocolConfig>): ProxyProtocolConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.version = 0;
        if (value !== undefined)
            reflectionMergePartial<ProxyProtocolConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxyProtocolConfig): ProxyProtocolConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.ProxyProtocolConfig.Version version */ 1:
                    message.version = reader.int32();
                    break;
                case /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs */ 2:
                    message.passThroughTlvs = ProxyProtocolPassThroughTLVs.internalBinaryRead(reader, reader.uint32(), options, message.passThroughTlvs);
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
    internalBinaryWrite(message: ProxyProtocolConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.ProxyProtocolConfig.Version version = 1; */
        if (message.version !== 0)
            writer.tag(1, WireType.Varint).int32(message.version);
        /* envoy.config.core.v3.ProxyProtocolPassThroughTLVs pass_through_tlvs = 2; */
        if (message.passThroughTlvs)
            ProxyProtocolPassThroughTLVs.internalBinaryWrite(message.passThroughTlvs, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.core.v3.ProxyProtocolConfig
 */
export const ProxyProtocolConfig = new ProxyProtocolConfig$Type();
