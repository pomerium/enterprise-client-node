// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "envoy/type/v3/percent.proto" (package "envoy.type.v3", syntax proto3)
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
// [#protodoc-title: Percent]

/**
 * Identifies a percentage, in the range [0.0, 100.0].
 *
 * @generated from protobuf message envoy.type.v3.Percent
 */
export interface Percent {
    /**
     * @generated from protobuf field: double value = 1;
     */
    value: number;
}
/**
 * A fractional percentage is used in cases in which for performance reasons performing floating
 * point to integer conversions during randomness calculations is undesirable. The message includes
 * both a numerator and denominator that together determine the final fractional value.
 *
 * * **Example**: 1/100 = 1%.
 * * **Example**: 3/10000 = 0.03%.
 *
 * @generated from protobuf message envoy.type.v3.FractionalPercent
 */
export interface FractionalPercent {
    /**
     * Specifies the numerator. Defaults to 0.
     *
     * @generated from protobuf field: uint32 numerator = 1;
     */
    numerator: number;
    /**
     * Specifies the denominator. If the denominator specified is less than the numerator, the final
     * fractional percentage is capped at 1 (100%).
     *
     * @generated from protobuf field: envoy.type.v3.FractionalPercent.DenominatorType denominator = 2;
     */
    denominator: FractionalPercent_DenominatorType;
}
/**
 * Fraction percentages support several fixed denominator values.
 *
 * @generated from protobuf enum envoy.type.v3.FractionalPercent.DenominatorType
 */
export enum FractionalPercent_DenominatorType {
    /**
     * 100.
     *
     * **Example**: 1/100 = 1%.
     *
     * @generated from protobuf enum value: HUNDRED = 0;
     */
    HUNDRED = 0,
    /**
     * 10,000.
     *
     * **Example**: 1/10000 = 0.01%.
     *
     * @generated from protobuf enum value: TEN_THOUSAND = 1;
     */
    TEN_THOUSAND = 1,
    /**
     * 1,000,000.
     *
     * **Example**: 1/1000000 = 0.0001%.
     *
     * @generated from protobuf enum value: MILLION = 2;
     */
    MILLION = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Percent$Type extends MessageType<Percent> {
    constructor() {
        super("envoy.type.v3.Percent", [
            { no: 1, name: "value", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/, options: { "validate.rules": { double: { lte: 100, gte: 0 } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.Percent" } });
    }
    create(value?: PartialMessage<Percent>): Percent {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.value = 0;
        if (value !== undefined)
            reflectionMergePartial<Percent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Percent): Percent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double value */ 1:
                    message.value = reader.double();
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
    internalBinaryWrite(message: Percent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double value = 1; */
        if (message.value !== 0)
            writer.tag(1, WireType.Bit64).double(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.v3.Percent
 */
export const Percent = new Percent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FractionalPercent$Type extends MessageType<FractionalPercent> {
    constructor() {
        super("envoy.type.v3.FractionalPercent", [
            { no: 1, name: "numerator", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "denominator", kind: "enum", T: () => ["envoy.type.v3.FractionalPercent.DenominatorType", FractionalPercent_DenominatorType], options: { "validate.rules": { enum: { definedOnly: true } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.FractionalPercent" } });
    }
    create(value?: PartialMessage<FractionalPercent>): FractionalPercent {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.numerator = 0;
        message.denominator = 0;
        if (value !== undefined)
            reflectionMergePartial<FractionalPercent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FractionalPercent): FractionalPercent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 numerator */ 1:
                    message.numerator = reader.uint32();
                    break;
                case /* envoy.type.v3.FractionalPercent.DenominatorType denominator */ 2:
                    message.denominator = reader.int32();
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
    internalBinaryWrite(message: FractionalPercent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 numerator = 1; */
        if (message.numerator !== 0)
            writer.tag(1, WireType.Varint).uint32(message.numerator);
        /* envoy.type.v3.FractionalPercent.DenominatorType denominator = 2; */
        if (message.denominator !== 0)
            writer.tag(2, WireType.Varint).int32(message.denominator);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.v3.FractionalPercent
 */
export const FractionalPercent = new FractionalPercent$Type();