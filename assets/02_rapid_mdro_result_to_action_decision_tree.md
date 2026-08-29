# Rapid MDRO Result-To-Action Decision Tree

Title: Laboratory Communication Workflow for Rapid MDRO-Related Results

Author: Marious Akugri

Version: 1.0 public reference release

Date: 2026-08-25

## Summary

This decision tree provides a laboratory-scoped workflow for handling rapid MDRO-related result signals. It is designed to help laboratory personnel organize result verification, communication routing, reflex or confirmatory review, LIS comment use, documentation, and final-result follow-up.

This is not a clinical treatment decision tree. It does not prescribe therapy, direct patient management, or replace local institutional protocols.

## Intended Use

Use this workflow as a public reference example for:

- rapid molecular panel results;
- organism identification findings;
- resistance-marker detection;
- antimicrobial susceptibility testing status;
- suspected or confirmed C. auris findings;
- corrected or final result follow-up; and
- communication/documentation consistency.

Any local implementation would require review by the laboratory director, medical director, infection prevention, antimicrobial stewardship, quality/compliance, and LIS/informatics stakeholders as applicable.

## Evidence-Safe Boundary

This artifact uses generic workflow categories and synthetic examples only. It does not include patient data, accession numbers, local facility data, employer SOP language, or confidential LIS screenshots.

This artifact supports workflow review only. It does not show clinical assay validation, live LIS configuration, employer adoption, or public-health reporting implementation.

## Core Workflow

```text
Rapid MDRO-related trigger
        |
        v
1. Identify trigger category
        |
        v
2. Verify laboratory result status
        |
        v
3. Determine communication pathway under local policy
        |
        v
4. Add or select neutral LIS comment if applicable
        |
        v
5. Review reflex or confirmatory testing needs
        |
        v
6. Document notification, routing, and follow-up
        |
        v
7. Reconcile final or corrected result
```

The workflow is cyclic. If a preliminary result later becomes final, if AST results become available, or if a corrected report changes earlier understanding, the laboratory can re-enter the workflow at Step 2 and determine whether follow-up communication is needed under local policy.

## Step 1: Identify Trigger Category

| Trigger Category | Synthetic Example | Laboratory Question |
|---|---|---|
| Rapid molecular detection | Blood culture molecular panel detects organism and resistance marker. | Is this a preliminary rapid result with culture/AST pending? |
| Organism-identification concern | Yeast identification suggests possible C. auris or related organism requiring confirmation. | Does the organism require additional identification or referral under local policy? |
| Resistance phenotype | AST suggests resistant phenotype relevant to MDRO communication. | Is the AST preliminary, final, or corrected? |
| Colonization screening | Screening result suggests C. auris colonization. | Is infection prevention notification or transfer-status communication required by local policy? |
| Discrepant result | Rapid result and culture/AST do not fully align. | Does the discrepancy require corrected reporting, comment update, or technical review? |
| Corrected/final result | Final AST or corrected organism ID changes the earlier interpretation. | Is follow-up communication needed? |

## Step 2: Verify Laboratory Result Status

Before communication, confirm the result status.

| Status Check | Purpose |
|---|---|
| Preliminary, final, or corrected status | Prevents a rapid result from being communicated as more definitive than it is. |
| QC/review completion | Confirms the result has passed required laboratory review steps. |
| Specimen/result context | Confirms the result belongs to the correct specimen type and testing pathway. |
| Culture/AST pending status | Supports clear comment language and follow-up planning. |
| Local critical/urgent communication category | Determines whether the result meets institutional notification requirements. |

If any required internal review is incomplete, the laboratory should follow local policy before releasing, commenting, or escalating.

## Step 3: Determine Communication Pathway

This workflow does not define mandatory recipients. It helps laboratories identify possible communication pathways that may exist under local policy.

| Communication Pathway | When It May Be Relevant | Boundary |
|---|---|---|
| Clinical team/provider notification | Result meets local urgent, critical, or rapid-result communication criteria. | Laboratory communicates result status; clinical team manages patient care. |
| Infection prevention notification | Finding may affect isolation, transfer communication, or facility containment workflow. | Laboratory routes awareness under local protocol; infection prevention determines local action. |
| Antimicrobial stewardship/pharmacy awareness | Rapid organism/resistance information may be reviewed by a stewardship team under local process. | Laboratory does not recommend therapy. |
| Laboratory supervisor/technical review | Result is discrepant, corrected, unusual, or requires confirmatory pathway review. | Technical review follows laboratory policy. |
| Public-health reporting route | Result falls under jurisdictional or institutional reporting requirements. | Reporting follows local/state/federal rules and institutional policy. |

## Step 4: Select Neutral LIS Comment If Applicable

LIS comments should be neutral, status-aware, and non-prescriptive.

Recommended style:

```text
Rapid molecular testing detected [organism/resistance marker]. Culture and/or susceptibility testing may be pending. Correlate with final laboratory results and institutional notification protocols.
```

Avoid language that:

- selects therapy;
- tells a provider to start or stop a drug;
- suggests a patient-specific management decision;
- overstates preliminary results as final; or
- claims a local protocol exists where none has been approved.

## Step 5: Review Reflex Or Confirmatory Testing Needs

Rapid MDRO-related signals often require status-aware follow-up.

| Result Situation | Possible Laboratory Follow-Up |
|---|---|
| Rapid molecular result positive, culture pending | Track final culture and AST status. |
| Resistance marker detected, phenotype pending | Track AST availability and final reporting. |
| Organism identification suggests C. auris | Review local confirmatory identification pathway and reporting route. |
| C. auris colonization screen positive | Confirm local communication and infection-prevention routing. |
| Preliminary result later corrected | Determine whether revised communication and LIS comment update are needed. |
| Rapid result negative, culture still pending | Avoid closing the communication loop until final reporting rules are satisfied. |

This step does not mandate testing. It prompts review under local validation, laboratory director approval, and institutional procedures.

## Step 6: Document Notification, Routing, And Follow-Up

For any result that triggers a communication pathway, documentation should be complete enough for quality review.

Suggested documentation elements:

- result trigger category;
- result status at time of communication;
- communication route used;
- date/time of documented notification, if applicable;
- recipient role or approved routing queue, if applicable;
- LIS comment used, if applicable;
- pending culture/AST/final-result follow-up flag;
- corrected result follow-up, if applicable; and
- staff initials or authenticated laboratory documentation per local policy.

Do not create duplicate documentation outside approved systems if local policy does not allow it.

## Step 7: Reconcile Final Or Corrected Result

The workflow is not complete when a rapid preliminary result is communicated. It should include a final-result check.

Final-result reconciliation should ask:

- Did culture confirm the rapid result?
- Did AST become available after the rapid result?
- Did the organism identification change?
- Did a corrected report issue?
- Does the LIS comment need updating under local policy?
- Does infection prevention, stewardship, the clinical team, or laboratory leadership require follow-up under local policy?
- Was follow-up documented?

## Synthetic Walkthrough

```text
Trigger:
Rapid molecular panel detects Organism X and Resistance Marker Y from a positive blood culture bottle.

Step 1:
Trigger category = rapid molecular detection with resistance-marker detection.

Step 2:
Result status = preliminary rapid result. Culture and AST pending.

Step 3:
Local policy determines whether clinical team, infection prevention, or stewardship notification applies.

Step 4:
Neutral LIS comment notes rapid detection and pending culture/AST status.

Step 5:
Culture and AST follow-up flag is created.

Step 6:
Notification route and comment use are documented according to local policy.

Step 7:
When final culture/AST posts, the laboratory reviews whether follow-up communication or comment update is required.
```

Out of scope: this walkthrough does not select a medication, determine isolation orders, or replace local policy.

## Quality Review Questions

A laboratory adapting this workflow may ask:

- Are trigger categories clearly defined?
- Does the workflow distinguish preliminary, final, and corrected results?
- Is the communication route approved locally?
- Are LIS comments neutral and non-prescriptive?
- Is reflex or confirmatory testing language consistent with local validation and regulatory requirements?
- Does the workflow include final-result follow-up?
- Can communication documentation be audited?

## Safety Notes

- Use only locally approved result-reporting and notification pathways.
- Do not use this artifact as a standalone SOP.
- Do not enter sample comments into a live LIS without institutional review and approval.
- Do not use patient information to test or demonstrate this workflow outside approved systems.
- Do not represent this artifact as adopted by any institution unless documented.

## Related Suite Artifacts

- `01_public_technical_note.md`
- `03_reflex_confirmatory_testing_matrix.md`
- `04_lis_alert_comment_templates.md`
- `05_tat_escalation_metric_plan.md`
- `06_staff_training_checklist.md`
