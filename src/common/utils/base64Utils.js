import { Buffer } from "buffer";

export const decodeBase64 = (arrayBuffer) =>
  new Buffer.from(arrayBuffer, "base64");

export const encodedString = (str) => Buffer.from(str).toString("base64");
