// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/config/cluster/v3/circuit_breaker.proto" (package "envoy.config.cluster.v3", syntax proto3)
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
import { Percent } from "../../../type/v3/percent";
import { UInt32Value } from "../../../../google/protobuf/wrappers";
import { RoutingPriority } from "../../core/v3/base";
// [#protodoc-title: Circuit breakers]

/**
 * :ref:`Circuit breaking<arch_overview_circuit_break>` settings can be
 * specified individually for each defined priority.
 *
 * @generated from protobuf message envoy.config.cluster.v3.CircuitBreakers
 */
export interface CircuitBreakers {
    /**
     * If multiple :ref:`Thresholds<envoy_v3_api_msg_config.cluster.v3.CircuitBreakers.Thresholds>`
     * are defined with the same :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`,
     * the first one in the list is used. If no Thresholds is defined for a given
     * :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`, the default values
     * are used.
     *
     * @generated from protobuf field: repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds thresholds = 1;
     */
    thresholds: CircuitBreakers_Thresholds[];
    /**
     * Optional per-host limits which apply to each individual host in a cluster.
     *
     * .. note::
     *  currently only the :ref:`max_connections
     *  <envoy_v3_api_field_config.cluster.v3.CircuitBreakers.Thresholds.max_connections>` field is supported for per-host limits.
     *
     * If multiple per-host :ref:`Thresholds<envoy_v3_api_msg_config.cluster.v3.CircuitBreakers.Thresholds>`
     * are defined with the same :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`,
     * the first one in the list is used. If no per-host Thresholds are defined for a given
     * :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`,
     * the cluster will not have per-host limits.
     *
     * @generated from protobuf field: repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds per_host_thresholds = 2;
     */
    perHostThresholds: CircuitBreakers_Thresholds[];
}
/**
 * A Thresholds defines CircuitBreaker settings for a
 * :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`.
 * [#next-free-field: 9]
 *
 * @generated from protobuf message envoy.config.cluster.v3.CircuitBreakers.Thresholds
 */
export interface CircuitBreakers_Thresholds {
    /**
     * The :ref:`RoutingPriority<envoy_v3_api_enum_config.core.v3.RoutingPriority>`
     * the specified CircuitBreaker settings apply to.
     *
     * @generated from protobuf field: envoy.config.core.v3.RoutingPriority priority = 1;
     */
    priority: RoutingPriority;
    /**
     * The maximum number of connections that Envoy will make to the upstream
     * cluster. If not specified, the default is 1024.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_connections = 2;
     */
    maxConnections?: UInt32Value;
    /**
     * The maximum number of pending requests that Envoy will allow to the
     * upstream cluster. If not specified, the default is 1024.
     * This limit is applied as a connection limit for non-HTTP traffic.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_pending_requests = 3;
     */
    maxPendingRequests?: UInt32Value;
    /**
     * The maximum number of parallel requests that Envoy will make to the
     * upstream cluster. If not specified, the default is 1024.
     * This limit does not apply to non-HTTP traffic.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_requests = 4;
     */
    maxRequests?: UInt32Value;
    /**
     * The maximum number of parallel retries that Envoy will allow to the
     * upstream cluster. If not specified, the default is 3.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_retries = 5;
     */
    maxRetries?: UInt32Value;
    /**
     * Specifies a limit on concurrent retries in relation to the number of active requests. This
     * parameter is optional.
     *
     * .. note::
     *
     *    If this field is set, the retry budget will override any configured retry circuit
     *    breaker.
     *
     * @generated from protobuf field: envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget retry_budget = 8;
     */
    retryBudget?: CircuitBreakers_Thresholds_RetryBudget;
    /**
     * If track_remaining is true, then stats will be published that expose
     * the number of resources remaining until the circuit breakers open. If
     * not specified, the default is false.
     *
     * .. note::
     *
     *    If a retry budget is used in lieu of the max_retries circuit breaker,
     *    the remaining retry resources remaining will not be tracked.
     *
     * @generated from protobuf field: bool track_remaining = 6;
     */
    trackRemaining: boolean;
    /**
     * The maximum number of connection pools per cluster that Envoy will concurrently support at
     * once. If not specified, the default is unlimited. Set this for clusters which create a
     * large number of connection pools. See
     * :ref:`Circuit Breaking <arch_overview_circuit_break_cluster_maximum_connection_pools>` for
     * more details.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value max_connection_pools = 7;
     */
    maxConnectionPools?: UInt32Value;
}
/**
 * @generated from protobuf message envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget
 */
export interface CircuitBreakers_Thresholds_RetryBudget {
    /**
     * Specifies the limit on concurrent retries as a percentage of the sum of active requests and
     * active pending requests. For example, if there are 100 active requests and the
     * budget_percent is set to 25, there may be 25 active retries.
     *
     * This parameter is optional. Defaults to 20%.
     *
     * @generated from protobuf field: envoy.type.v3.Percent budget_percent = 1;
     */
    budgetPercent?: Percent;
    /**
     * Specifies the minimum retry concurrency allowed for the retry budget. The limit on the
     * number of active retries may never go below this number.
     *
     * This parameter is optional. Defaults to 3.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value min_retry_concurrency = 2;
     */
    minRetryConcurrency?: UInt32Value;
}
// @generated message type with reflection information, may provide speed optimized methods
class CircuitBreakers$Type extends MessageType<CircuitBreakers> {
    constructor() {
        super("envoy.config.cluster.v3.CircuitBreakers", [
            { no: 1, name: "thresholds", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CircuitBreakers_Thresholds },
            { no: 2, name: "per_host_thresholds", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CircuitBreakers_Thresholds }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.cluster.CircuitBreakers" } });
    }
    create(value?: PartialMessage<CircuitBreakers>): CircuitBreakers {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.thresholds = [];
        message.perHostThresholds = [];
        if (value !== undefined)
            reflectionMergePartial<CircuitBreakers>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CircuitBreakers): CircuitBreakers {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds thresholds */ 1:
                    message.thresholds.push(CircuitBreakers_Thresholds.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds per_host_thresholds */ 2:
                    message.perHostThresholds.push(CircuitBreakers_Thresholds.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: CircuitBreakers, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds thresholds = 1; */
        for (let i = 0; i < message.thresholds.length; i++)
            CircuitBreakers_Thresholds.internalBinaryWrite(message.thresholds[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.cluster.v3.CircuitBreakers.Thresholds per_host_thresholds = 2; */
        for (let i = 0; i < message.perHostThresholds.length; i++)
            CircuitBreakers_Thresholds.internalBinaryWrite(message.perHostThresholds[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.cluster.v3.CircuitBreakers
 */
export const CircuitBreakers = new CircuitBreakers$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CircuitBreakers_Thresholds$Type extends MessageType<CircuitBreakers_Thresholds> {
    constructor() {
        super("envoy.config.cluster.v3.CircuitBreakers.Thresholds", [
            { no: 1, name: "priority", kind: "enum", T: () => ["envoy.config.core.v3.RoutingPriority", RoutingPriority], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 2, name: "max_connections", kind: "message", T: () => UInt32Value },
            { no: 3, name: "max_pending_requests", kind: "message", T: () => UInt32Value },
            { no: 4, name: "max_requests", kind: "message", T: () => UInt32Value },
            { no: 5, name: "max_retries", kind: "message", T: () => UInt32Value },
            { no: 8, name: "retry_budget", kind: "message", T: () => CircuitBreakers_Thresholds_RetryBudget },
            { no: 6, name: "track_remaining", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "max_connection_pools", kind: "message", T: () => UInt32Value }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.cluster.CircuitBreakers.Thresholds" } });
    }
    create(value?: PartialMessage<CircuitBreakers_Thresholds>): CircuitBreakers_Thresholds {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.priority = 0;
        message.trackRemaining = false;
        if (value !== undefined)
            reflectionMergePartial<CircuitBreakers_Thresholds>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CircuitBreakers_Thresholds): CircuitBreakers_Thresholds {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.RoutingPriority priority */ 1:
                    message.priority = reader.int32();
                    break;
                case /* google.protobuf.UInt32Value max_connections */ 2:
                    message.maxConnections = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxConnections);
                    break;
                case /* google.protobuf.UInt32Value max_pending_requests */ 3:
                    message.maxPendingRequests = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxPendingRequests);
                    break;
                case /* google.protobuf.UInt32Value max_requests */ 4:
                    message.maxRequests = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxRequests);
                    break;
                case /* google.protobuf.UInt32Value max_retries */ 5:
                    message.maxRetries = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxRetries);
                    break;
                case /* envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget retry_budget */ 8:
                    message.retryBudget = CircuitBreakers_Thresholds_RetryBudget.internalBinaryRead(reader, reader.uint32(), options, message.retryBudget);
                    break;
                case /* bool track_remaining */ 6:
                    message.trackRemaining = reader.bool();
                    break;
                case /* google.protobuf.UInt32Value max_connection_pools */ 7:
                    message.maxConnectionPools = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxConnectionPools);
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
    internalBinaryWrite(message: CircuitBreakers_Thresholds, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.RoutingPriority priority = 1; */
        if (message.priority !== 0)
            writer.tag(1, WireType.Varint).int32(message.priority);
        /* google.protobuf.UInt32Value max_connections = 2; */
        if (message.maxConnections)
            UInt32Value.internalBinaryWrite(message.maxConnections, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_pending_requests = 3; */
        if (message.maxPendingRequests)
            UInt32Value.internalBinaryWrite(message.maxPendingRequests, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_requests = 4; */
        if (message.maxRequests)
            UInt32Value.internalBinaryWrite(message.maxRequests, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value max_retries = 5; */
        if (message.maxRetries)
            UInt32Value.internalBinaryWrite(message.maxRetries, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget retry_budget = 8; */
        if (message.retryBudget)
            CircuitBreakers_Thresholds_RetryBudget.internalBinaryWrite(message.retryBudget, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* bool track_remaining = 6; */
        if (message.trackRemaining !== false)
            writer.tag(6, WireType.Varint).bool(message.trackRemaining);
        /* google.protobuf.UInt32Value max_connection_pools = 7; */
        if (message.maxConnectionPools)
            UInt32Value.internalBinaryWrite(message.maxConnectionPools, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.cluster.v3.CircuitBreakers.Thresholds
 */
export const CircuitBreakers_Thresholds = new CircuitBreakers_Thresholds$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CircuitBreakers_Thresholds_RetryBudget$Type extends MessageType<CircuitBreakers_Thresholds_RetryBudget> {
    constructor() {
        super("envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget", [
            { no: 1, name: "budget_percent", kind: "message", T: () => Percent },
            { no: 2, name: "min_retry_concurrency", kind: "message", T: () => UInt32Value }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.api.v2.cluster.CircuitBreakers.Thresholds.RetryBudget" } });
    }
    create(value?: PartialMessage<CircuitBreakers_Thresholds_RetryBudget>): CircuitBreakers_Thresholds_RetryBudget {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CircuitBreakers_Thresholds_RetryBudget>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CircuitBreakers_Thresholds_RetryBudget): CircuitBreakers_Thresholds_RetryBudget {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.v3.Percent budget_percent */ 1:
                    message.budgetPercent = Percent.internalBinaryRead(reader, reader.uint32(), options, message.budgetPercent);
                    break;
                case /* google.protobuf.UInt32Value min_retry_concurrency */ 2:
                    message.minRetryConcurrency = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.minRetryConcurrency);
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
    internalBinaryWrite(message: CircuitBreakers_Thresholds_RetryBudget, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.v3.Percent budget_percent = 1; */
        if (message.budgetPercent)
            Percent.internalBinaryWrite(message.budgetPercent, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value min_retry_concurrency = 2; */
        if (message.minRetryConcurrency)
            UInt32Value.internalBinaryWrite(message.minRetryConcurrency, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.cluster.v3.CircuitBreakers.Thresholds.RetryBudget
 */
export const CircuitBreakers_Thresholds_RetryBudget = new CircuitBreakers_Thresholds_RetryBudget$Type();
