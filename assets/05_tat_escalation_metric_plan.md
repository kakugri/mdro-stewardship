# TAT And Escalation Metric Plan

Title: Measurement Plan For Rapid MDRO Laboratory Communication Workflows

Author: Marious Akugri

Version: 1.0 public reference release

Date: 2026-08-25

## Summary

This metric plan defines non-confidential ways to evaluate a rapid MDRO diagnostic communication workflow. It focuses on laboratory process measures: turnaround time, result verification, notification documentation, final-result follow-up, corrected-result follow-up, and staff training completion.

The plan uses synthetic examples only. It does not report real employer performance, patient outcomes, institutional quality data, or protected health information.

For reviewer circulation, these metrics are proposed process measures. They are not presented as live baseline data, quality-improvement results, or proof that any institution has adopted the workflow.

## Purpose

The purpose of this metric plan is to help laboratories evaluate whether rapid MDRO-related results are handled consistently after detection.

The plan asks:

- Was the rapid result verified?
- Was the result status clear?
- Was the appropriate communication route used under local policy?
- Was the notification documented?
- Was culture/AST/final-result follow-up completed?
- Was corrected-result follow-up completed when needed?
- Were staff trained on the workflow?

## Measurement Boundary

This metric plan measures laboratory workflow consistency. It does not measure:

- medication choice;
- clinical treatment decisions;
- provider response;
- patient outcomes;
- infection rates;
- mortality;
- hospital length of stay; or
- public-health reporting completeness.

Those areas may be studied by qualified institutional teams under appropriate approvals, but they are outside this public reference artifact.

## Metric Categories

| Metric Category | Question Answered | Example Use |
|---|---|---|
| Result-to-verification time | How long from result availability to laboratory verification? | Identifies delays in internal review. |
| Verification-to-notification time | How long from verified result to documented communication? | Measures communication workflow reliability. |
| Final-result follow-up completion | Were pending culture/AST/final results reconciled? | Prevents rapid preliminary results from becoming orphaned. |
| Corrected-result follow-up | Were corrected reports routed or documented? | Supports quality and patient-safety communication. |
| LIS comment consistency | Was the correct approved comment category used? | Supports standardized result interpretation language. |
| Training completion | Did relevant staff review the workflow? | Supports local adaptation readiness. |
| Reviewer feedback incorporation | Were technical review comments tracked and addressed? | Supports continuous improvement before wider dissemination. |

## Core Metrics

### Metric 1: Result-To-Verification Time

Definition:

```text
Time from rapid MDRO-related result availability to laboratory verification/documented review.
```

Example fields:

- synthetic event ID;
- result availability timestamp;
- verification timestamp;
- result status at verification;
- verifier role/category.

Use:

- identify whether rapid signals are reviewed promptly;
- compare workflow before and after staff training in a synthetic or approved test environment.

### Metric 2: Verification-To-Notification Time

Definition:

```text
Time from laboratory verification to documented notification or routing under local policy.
```

Example fields:

- synthetic event ID;
- verification timestamp;
- communication route;
- notification timestamp;
- recipient role/category or routing queue;
- documentation completed: yes/no.

Use:

- evaluate whether approved communication routes are followed consistently.

### Metric 3: Final-Result Follow-Up Completion

Definition:

```text
Percentage of rapid preliminary MDRO-related events with documented review of culture, AST, final identification, or final report status.
```

Example formula:

```text
Final-result follow-up completion =
events with documented final-result review / rapid preliminary events requiring follow-up
```

Use:

- ensure preliminary rapid results are reconciled after final results are available.

### Metric 4: Corrected-Result Follow-Up Completion

Definition:

```text
Percentage of corrected MDRO-related reports with documented communication review under local policy.
```

Example formula:

```text
Corrected-result follow-up completion =
corrected events with documented follow-up / corrected events requiring follow-up
```

Use:

- support quality review where corrected results change prior communication status.

### Metric 5: LIS Comment Consistency

Definition:

```text
Percentage of applicable rapid MDRO-related events using the locally approved comment category for the result status.
```

Example formula:

```text
LIS comment consistency =
events with correct comment category / events where a comment was applicable
```

Use:

- evaluate whether preliminary, pending, final, corrected, and confirmation-dependent comments are used correctly.

### Metric 6: Staff Training Completion

Definition:

```text
Percentage of relevant staff who complete workflow review and synthetic case exercises.
```

Example formula:

```text
Training completion =
staff with completed checklist / staff assigned to workflow review
```

Use:

- document dissemination and readiness before any local adaptation.

### Metric 7: Reviewer Feedback Incorporation

Definition:

```text
Percentage of technical review comments triaged and addressed in the artifact suite.
```

Example formula:

```text
Feedback incorporation =
review comments closed / total review comments received
```

Use:

- show that the public artifact suite improves through outside technical review.

## Synthetic Tracking Table

Use synthetic IDs and generic timestamps for training or demonstration.

| Event ID | Trigger Type | Result Status | Verification Complete | Communication Route | Notification Documented | Final Follow-Up Needed | Final Follow-Up Complete | Comment Category |
|---|---|---|---|---|---|---|---|---|
| SIM-001 | Rapid molecular + resistance marker | Preliminary | Yes | Clinical team route | Yes | Yes | Pending | Resistance marker, AST pending |
| SIM-002 | Suspected C. auris | Pending confirmation | Yes | Infection prevention route | Yes | Yes | Pending | C. auris pending confirmation |
| SIM-003 | AST resistant phenotype | Final | Yes | Local notification route | Yes | No | N/A | Final AST available |
| SIM-004 | Rapid negative, culture pending | Preliminary | Yes | Routine result follow-up | N/A | Yes | Pending | Negative rapid, culture pending |
| SIM-005 | Corrected organism ID | Corrected | Yes | Corrected-result route | Yes | Yes | Yes | Corrected result follow-up |

This table is illustrative only. It is not derived from any patient or employer data.

## Example Dashboard Fields

A laboratory adapting this workflow could track:

- total rapid MDRO-related trigger events reviewed;
- percentage with verified result status;
- median verification-to-notification time;
- percentage with documented notification where required;
- percentage with final-result follow-up complete;
- percentage with corrected-result follow-up complete;
- percentage with appropriate comment category;
- training completion rate; and
- open reviewer feedback items.

## Review Cadence

Suggested review cadence for a local adaptation:

| Stage | Review Activity |
|---|---|
| Pre-use | Review workflow against local policy using synthetic examples. |
| Training | Staff complete checklist and synthetic case exercises. |
| Limited local review | Quality/lab leadership reviews documentation behavior in an approved setting. |
| Ongoing review | Review metrics monthly or according to local quality calendar. |
| Revision | Update comments, triggers, or training materials based on approved feedback. |

## Safety And Compliance Notes

- Do not export patient data to build a public example.
- Do not use live data outside approved systems.
- Do not create unofficial spreadsheets containing patient identifiers.
- Do not report institutional metrics publicly without authorization.
- Do not claim this metric plan improves patient outcomes unless an approved study supports that claim.
- Use local policy for critical results, corrected results, infection prevention routing, stewardship routing, and public-health reporting.

## Related Suite Artifacts

- `01_public_technical_note.md`
- `02_rapid_mdro_result_to_action_decision_tree.md`
- `03_reflex_confirmatory_testing_matrix.md`
- `04_lis_alert_comment_templates.md`
- `06_staff_training_checklist.md`
