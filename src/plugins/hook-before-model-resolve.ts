import type { PluginHookBeforeModelResolveResult } from "./hook-before-agent-start.types.js";

const firstDefined = <T>(first: T | undefined, second: T | undefined): T | undefined =>
  first ?? second;

/** Keeps each field from the first hook that defines it; hooks run by priority. */
export function mergeBeforeModelResolveResults(
  acc: PluginHookBeforeModelResolveResult | undefined,
  next: PluginHookBeforeModelResolveResult,
): PluginHookBeforeModelResolveResult {
  return {
    modelOverride: firstDefined(acc?.modelOverride, next.modelOverride),
    providerOverride: firstDefined(acc?.providerOverride, next.providerOverride),
    thinkingOverride: firstDefined(acc?.thinkingOverride, next.thinkingOverride),
  };
}
