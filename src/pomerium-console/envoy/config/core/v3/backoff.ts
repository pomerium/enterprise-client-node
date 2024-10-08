// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/config/core/v3/backoff.proto" (package "envoy.config.core.v3", syntax proto3)
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
import { Duration } from "../../../../google/protobuf/duration";
// [#protodoc-title: Backoff strategy]

/**
 * Configuration defining a jittered exponential back off strategy.
 *
 * @generated from protobuf message envoy.config.core.v3.BackoffStrategy
 */
export interface BackoffStrategy {
    /**
     * The base interval to be used for the next back off computation. It should
     * be greater than zero and less than or equal to :ref:`max_interval
     * <envoy_v3_api_field_config.core.v3.BackoffStrategy.max_interval>`.
     *
     * @generated from protobuf field: google.protobuf.Duration base_interval = 1;
     */
    baseInterval?: Duration;
    /**
     * Specifies the maximum interval between retries. This parameter is optional,
     * but must be greater than or equal to the :ref:`base_interval
     * <envoy_v3_api_field_config.core.v3.BackoffStrategy.base_interval>` if set. The default
     * is 10 times the :ref:`base_interval
     * <envoy_v3_api_field_config.core.v3.BackoffStrategy.base_interval>`.
     *
     * @generated from protobuf field: google.protobuf.Duration max_interval = 2;
     */
    maxInterval?: Duration;
}
// @generated message type with reflection information, may provide speed optimized methods
class BackoffStrategy$Type extends MessageType<BackoffStrategy> {
    constructor() {
        super("envoy.config.core.v3.BackoffStrategy", [
            { no: 1, name: "base_interval", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { required: true, gte: { nanos: 1000000 } } } } },
            { no: 2, name: "max_interval", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gt: {} } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.core.BackoffStrategy" } });
    }
    create(value?: PartialMessage<BackoffStrategy>): BackoffStrategy {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<BackoffStrategy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BackoffStrategy): BackoffStrategy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Duration base_interval */ 1:
                    message.baseInterval = Duration.internalBinaryRead(reader, reader.uint32(), options, message.baseInterval);
                    break;
                case /* google.protobuf.Duration max_interval */ 2:
                    message.maxInterval = Duration.internalBinaryRead(reader, reader.uint32(), options, message.maxInterval);
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
    internalBinaryWrite(message: BackoffStrategy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Duration base_interval = 1; */
        if (message.baseInterval)
            Duration.internalBinaryWrite(message.baseInterval, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration max_interval = 2; */
        if (message.maxInterval)
            Duration.internalBinaryWrite(message.maxInterval, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.core.v3.BackoffStrategy
 */
export const BackoffStrategy = new BackoffStrategy$Type();
