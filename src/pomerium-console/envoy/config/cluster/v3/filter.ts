// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/config/cluster/v3/filter.proto" (package "envoy.config.cluster.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ExtensionConfigSource } from "../../core/v3/config_source";
import { Any } from "../../../../google/protobuf/any";
// [#protodoc-title: Upstream filters]
// Upstream filters apply to the connections to the upstream cluster hosts.

/**
 * @generated from protobuf message envoy.config.cluster.v3.Filter
 */
export interface Filter {
    /**
     * The name of the filter configuration.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Filter specific configuration which depends on the filter being
     * instantiated. See the supported filters for further documentation.
     * Note that Envoy's :ref:`downstream network
     * filters <config_network_filters>` are not valid upstream filters.
     * Only one of typed_config or config_discovery can be used.
     *
     * @generated from protobuf field: google.protobuf.Any typed_config = 2;
     */
    typedConfig?: Any;
    /**
     * Configuration source specifier for an extension configuration discovery
     * service. In case of a failure and without the default configuration, the
     * listener closes the connections.
     * Only one of typed_config or config_discovery can be used.
     *
     * @generated from protobuf field: envoy.config.core.v3.ExtensionConfigSource config_discovery = 3;
     */
    configDiscovery?: ExtensionConfigSource;
}
// @generated message type with reflection information, may provide speed optimized methods
class Filter$Type extends MessageType<Filter> {
    constructor() {
        super("envoy.config.cluster.v3.Filter", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "typed_config", kind: "message", T: () => Any },
            { no: 3, name: "config_discovery", kind: "message", T: () => ExtensionConfigSource }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.cluster.Filter" } });
    }
    create(value?: PartialMessage<Filter>): Filter {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial<Filter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Filter): Filter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* google.protobuf.Any typed_config */ 2:
                    message.typedConfig = Any.internalBinaryRead(reader, reader.uint32(), options, message.typedConfig);
                    break;
                case /* envoy.config.core.v3.ExtensionConfigSource config_discovery */ 3:
                    message.configDiscovery = ExtensionConfigSource.internalBinaryRead(reader, reader.uint32(), options, message.configDiscovery);
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
    internalBinaryWrite(message: Filter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* google.protobuf.Any typed_config = 2; */
        if (message.typedConfig)
            Any.internalBinaryWrite(message.typedConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.ExtensionConfigSource config_discovery = 3; */
        if (message.configDiscovery)
            ExtensionConfigSource.internalBinaryWrite(message.configDiscovery, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.cluster.v3.Filter
 */
export const Filter = new Filter$Type();
