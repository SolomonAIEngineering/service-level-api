/**
 * Represents the types of recurring flows.
 *
 * @remarks
 * This class encapsulates the different states of recurring flows such as unspecified, inflow, outflow, and unrecognized. This is useful to categorize and identify the nature of a recurring financial flow.
 *
 * @example Using `ReCurringFlow`:
 *
 * ```ts
 * const currentFlow = ReCurringFlow.RE_CURRING_FLOW_INFLOW;
 * if (currentFlow === ReCurringFlow.RE_CURRING_FLOW_INFLOW) {
 *   console.log('The recurring flow is an inflow.');
 * }
 * ```
 *
 */
enum ReCurringFlow {
  RE_CURRING_FLOW_UNSPECIFIED = 0,
  RE_CURRING_FLOW_INFLOW = 1,
  RE_CURRING_FLOW_OUTFLOW = 2,
  UNRECOGNIZED = -1,
}

export { ReCurringFlow };
