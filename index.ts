declare const Result: unique symbol;
declare const QueryValues: unique symbol;

declare class OpaqueTypedDocument<
  R extends Record<string, unknown>,
  V extends Record<string, unknown> = Record<string, unknown>
> {
  private [Result]: R;
  private [QueryValues]: V;
}

export { type OpaqueTypedDocument };