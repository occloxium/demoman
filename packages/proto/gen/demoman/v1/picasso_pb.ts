// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file demoman/v1/picasso.proto (package demoman.v1, syntax proto3)

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message demoman.v1.PaletteRequest
 */
export class PaletteRequest extends Message<PaletteRequest> {
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

  constructor(data?: PartialMessage<PaletteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "demoman.v1.PaletteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "color_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "image", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "quality", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaletteRequest {
    return new PaletteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaletteRequest {
    return new PaletteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaletteRequest {
    return new PaletteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaletteRequest | PlainMessage<PaletteRequest> | undefined, b: PaletteRequest | PlainMessage<PaletteRequest> | undefined): boolean {
    return proto3.util.equals(PaletteRequest, a, b);
  }
}

/**
 * @generated from message demoman.v1.PaletteResponse
 */
export class PaletteResponse extends Message<PaletteResponse> {
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
  palette: string[] = [];

  constructor(data?: PartialMessage<PaletteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "demoman.v1.PaletteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bg_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "accent_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "palette", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaletteResponse {
    return new PaletteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaletteResponse {
    return new PaletteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaletteResponse {
    return new PaletteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaletteResponse | PlainMessage<PaletteResponse> | undefined, b: PaletteResponse | PlainMessage<PaletteResponse> | undefined): boolean {
    return proto3.util.equals(PaletteResponse, a, b);
  }
}

/**
 * @generated from message demoman.v1.ColorRequest
 */
export class ColorRequest extends Message<ColorRequest> {
  /**
   * @generated from field: bytes image = 1;
   */
  image = new Uint8Array(0);

  /**
   * @generated from field: int32 quality = 2;
   */
  quality = 0;

  constructor(data?: PartialMessage<ColorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "demoman.v1.ColorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "quality", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ColorRequest {
    return new ColorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ColorRequest {
    return new ColorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ColorRequest {
    return new ColorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ColorRequest | PlainMessage<ColorRequest> | undefined, b: ColorRequest | PlainMessage<ColorRequest> | undefined): boolean {
    return proto3.util.equals(ColorRequest, a, b);
  }
}

/**
 * @generated from message demoman.v1.ColorResponse
 */
export class ColorResponse extends Message<ColorResponse> {
  /**
   * @generated from field: string background_color = 1;
   */
  backgroundColor = "";

  /**
   * @generated from field: string text_color = 2;
   */
  textColor = "";

  constructor(data?: PartialMessage<ColorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "demoman.v1.ColorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "background_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ColorResponse {
    return new ColorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ColorResponse {
    return new ColorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ColorResponse {
    return new ColorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ColorResponse | PlainMessage<ColorResponse> | undefined, b: ColorResponse | PlainMessage<ColorResponse> | undefined): boolean {
    return proto3.util.equals(ColorResponse, a, b);
  }
}

