#!/usr/bin/env bash

set -euo pipefail

required_files=(
  "index.html"
  "artifact.html"
  "styles.css"
  "app.js"
  "artifact.js"
  "assets/Marious_Akugri_Rapid_MDRO_Diagnostic_Stewardship_Public_Artifact_Suite_v1_0_public_reference_release.pdf"
  "assets/00_implementation_map_and_release_notes.md"
  "assets/01_public_technical_note.md"
  "assets/02_rapid_mdro_result_to_action_decision_tree.md"
  "assets/03_reflex_confirmatory_testing_matrix.md"
  "assets/04_lis_alert_comment_templates.md"
  "assets/05_tat_escalation_metric_plan.md"
  "assets/06_staff_training_checklist.md"
  "assets/07_result_status_taxonomy.md"
  "assets/08_synthetic_validation_scenarios.md"
  "assets/09_reviewer_feedback_checklist.md"
  "assets/99_reviewer_packet.md"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required file: $file" >&2
    exit 1
  fi
done

grep -q "Rapid MDRO Diagnostic Stewardship" index.html
grep -q "Public reference release, version 1.0" index.html
grep -q "No patient data, employer SOPs, or institutional adoption claims" index.html
grep -q "Marious_Akugri_Rapid_MDRO_Diagnostic_Stewardship_Public_Artifact_Suite_v1_0_public_reference_release.pdf" index.html
grep -q "artifact.html?doc=public-technical-note" index.html
grep -q "Markdown source" artifact.html
grep -q "00_implementation_map_and_release_notes.md" artifact.js

echo "Static-link and boundary preflight passed."
