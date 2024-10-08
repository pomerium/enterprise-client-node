// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "xds/core/v3/context_params.proto" (package "xds.core.v3", syntax proto3)
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
/**
 * Additional parameters that can be used to select resource variants. These include any
 * global context parameters, per-resource type client feature capabilities and per-resource
 * type functional attributes. All per-resource type attributes will be `xds.resource.`
 * prefixed and some of these are documented below:
 *
 * `xds.resource.listening_address`: The value is "IP:port" (e.g. "10.1.1.3:8080") which is
 *   the listening address of a Listener. Used in a Listener resource query.
 *
 * @generated from protobuf message xds.core.v3.ContextParams
 */
export interface ContextParams {
    /**
     * @generated from protobuf field: map<string, string> params = 1;
     */
    params: {
        [key: string]: string;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class ContextParams$Type extends MessageType<ContextParams> {
    constructor() {
        super("xds.core.v3.ContextParams", [
            { no: 1, name: "params", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value?: PartialMessage<ContextParams>): ContextParams {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.params = {};
        if (value !== undefined)
            reflectionMergePartial<ContextParams>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContextParams): ContextParams {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> params */ 1:
                    this.binaryReadMap1(message.params, reader, options);
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
    private binaryReadMap1(map: ContextParams["params"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ContextParams["params"] | undefined, val: ContextParams["params"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field xds.core.v3.ContextParams.params");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: ContextParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<string, string> params = 1; */
        for (let k of globalThis.Object.keys(message.params))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.params[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message xds.core.v3.ContextParams
 */
export const ContextParams = new ContextParams$Type();
