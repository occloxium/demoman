// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file demoman/v1/picasso.proto (package demoman.v1, syntax proto3)
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message demoman.v1.PaletteRequest
 */
export class PaletteRequest extends Message {
    /**
     * @generated from field: int32 color_count = 1;
     */
    colorCount = 0;
    /**
     * @generated from field: bytes image = 2;
     */
    image = new Uint8Array(0);
    /**
     * @generated from field: int32 quality = 3;
     */
    quality = 0;
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "demoman.v1.PaletteRequest";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "color_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
        { no: 2, name: "image", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
        { no: 3, name: "quality", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    ]);
    static fromBinary(bytes, options) {
        return new PaletteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaletteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaletteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PaletteRequest, a, b);
    }
}
/**
 * @generated from message demoman.v1.PaletteResponse
 */
export class PaletteResponse extends Message {
    /**
     * @generated from field: string bg_color = 1;
     */
    bgColor = "";
    /**
     * @generated from field: string text_color = 2;
     */
    textColor = "";
    /**
     * @generated from field: string accent_color = 3;
     */
    accentColor = "";
    /**
     * @generated from field: repeated string palette = 4;
     */
    palette = [];
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "demoman.v1.PaletteResponse";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "bg_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "accent_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "palette", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    ]);
    static fromBinary(bytes, options) {
        return new PaletteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PaletteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PaletteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PaletteResponse, a, b);
    }
}
/**
 * @generated from message demoman.v1.ColorRequest
 */
export class ColorRequest extends Message {
    /**
     * @generated from field: bytes image = 1;
     */
    image = new Uint8Array(0);
    /**
     * @generated from field: int32 quality = 2;
     */
    quality = 0;
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "demoman.v1.ColorRequest";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "image", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
        { no: 2, name: "quality", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    ]);
    static fromBinary(bytes, options) {
        return new ColorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ColorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ColorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ColorRequest, a, b);
    }
}
/**
 * @generated from message demoman.v1.ColorResponse
 */
export class ColorResponse extends Message {
    /**
     * @generated from field: string background_color = 1;
     */
    backgroundColor = "";
    /**
     * @generated from field: string text_color = 2;
     */
    textColor = "";
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static runtime = proto3;
    static typeName = "demoman.v1.ColorResponse";
    static fields = proto3.util.newFieldList(() => [
        { no: 1, name: "background_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 2, name: "text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]);
    static fromBinary(bytes, options) {
        return new ColorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ColorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ColorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ColorResponse, a, b);
    }
}
