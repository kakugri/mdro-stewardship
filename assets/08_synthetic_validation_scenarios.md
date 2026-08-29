# Synthetic Validation Scenarios

Title: Dry-Run Scenarios For Rapid MDRO Diagnostic Stewardship Workflow Review

Author: Marious Akugri

Version: 1.0 public reference release

Date: 2026-08-25

## Purpose

These synthetic scenarios let reviewers test whether the artifact suite handles realistic laboratory communication edge cases. They are designed for dry-run review only.

The scenarios do not use patient data, employer data, accession numbers, facility identifiers, screenshots, or local SOP language. They do not demonstrate clinical validation or institutional adoption.

In this document, "validation scenario" means a synthetic reviewer exercise. It does not mean validation of a diagnostic assay or validation of a live institutional workflow.

## Dry-Run Method

For each scenario, a reviewer may ask:

1. Which result-status category applies?
2. Which decision-tree path is triggered?
3. Which reflex or confirmatory review question applies?
4. Which LIS comment style would be safe and neutral?
5. What notification or follow-up documentation would be expected under local policy?
6. Does the scenario remain within laboratory communication scope?

## Scenario Table

| Scenario | Synthetic Trigger | Expected Workflow Emphasis | Example Safe Output |
|---|---|---|---|
| S1: Rapid molecular organism and resistance marker | A blood culture rapid molecular panel detects Organism X and Resistance Marker Y. Culture and AST are pending. | Preliminary rapid result, resistance-marker status, final culture/AST follow-up. | Comment notes rapid detection, marker detection, and pending culture/AST; notification follows local policy. |
| S2: Final AST updates earlier rapid result | Final AST later confirms a resistant phenotype after a preliminary rapid result was communicated. | Final-result reconciliation and follow-up documentation. | Workflow prompts review of whether earlier comments or notifications require update. |
| S3: Suspected C. auris, confirmation pending | Yeast identification suggests possible C. auris but confirmatory testing or reference review is pending. | Confirmation-aware wording and infection-prevention awareness route if local policy requires it. | Comment avoids confirmed-status language and states that confirmation is pending. |
| S4: Confirmed C. auris | Approved local or reference method confirms C. auris. | Confirmed-status communication, local public-health/infection-prevention routing, and transfer-status awareness. | Workflow routes communication under local approved procedures without creating treatment or isolation orders. |
| S5: Corrected organism identification | A final organism identification is corrected after an earlier preliminary communication. | Corrected-result handling, revised communication, and audit trail. | Documentation records corrected result status and follow-up route under local policy. |
| S6: Negative rapid target with culture pending | Rapid testing does not detect target organisms, but culture remains pending. | Avoiding premature closure. | Comment or workflow notes that rapid result is not the final culture result where local policy requires. |
| S7: Discrepant rapid and culture result | Rapid result detects a marker, but later culture/AST context does not clearly align. | Technical review before definitive wording. | Workflow prompts supervisory or technical review and avoids unsupported certainty. |
| S8: Transfer communication reminder | A patient-associated C. auris status may need communication during transfer under local policy. | Status-aware communication without directing transfer decisions. | Comment reminds staff to follow institutional transfer-communication procedures for confirmed or relevant status. |

## Pass Criteria For Reviewer Assessment

A scenario passes dry-run review if the suite:

- identifies the correct result-status category;
- avoids overstating preliminary or confirmation-pending results;
- routes communication to local policy rather than inventing a universal recipient list;
- preserves laboratory scope and avoids treatment direction;
- prompts final, corrected, AST, or confirmation follow-up where needed;
- produces neutral LIS comment language; and
- leaves local implementation decisions to laboratory leadership and institutional governance.

## Failure Modes To Watch

Reviewers should flag any wording that:

- implies clinical treatment selection;
- treats a preliminary rapid result as final;
- labels suspected C. auris as confirmed before confirmation;
- creates mandatory public-health reporting language outside local requirements;
- claims institutional adoption or clinical validation;
- uses patient-specific or employer-confidential details; or
- lacks a final-result or corrected-result reconciliation step.

## Reviewer Notes

The goal of these scenarios is practical coherence. A reviewer does not need to agree with every sample comment to find the suite useful; the key question is whether the package provides a safe, adaptable framework for laboratory review and local revision.
