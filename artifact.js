const artifacts = {
  "implementation-map": {
    title: "Implementation Map And Release Notes",
    file: "00_implementation_map_and_release_notes.md",
    summary: "How the public artifact suite fits together and what version 1.0 contains."
  },
  "public-technical-note": {
    title: "Public Technical Note",
    file: "01_public_technical_note.md",
    summary: "Scope, audience, safety boundary, source basis, and artifact roadmap."
  },
  "decision-tree": {
    title: "Rapid MDRO Result-To-Action Decision Tree",
    file: "02_rapid_mdro_result_to_action_decision_tree.md",
    summary: "A laboratory communication workflow for rapid MDRO-related result signals."
  },
  "reflex-matrix": {
    title: "Reflex And Confirmatory Testing Matrix",
    file: "03_reflex_confirmatory_testing_matrix.md",
    summary: "Synthetic examples for result status, confirmation, communication, and follow-up."
  },
  "lis-comments": {
    title: "LIS Alert And Comment Template Bank",
    file: "04_lis_alert_comment_templates.md",
    summary: "Neutral comment examples for local laboratory review."
  },
  "tat-metrics": {
    title: "TAT And Escalation Metric Plan",
    file: "05_tat_escalation_metric_plan.md",
    summary: "Non-confidential process measures for laboratory communication workflows."
  },
  "training-checklist": {
    title: "Staff Training Checklist",
    file: "06_staff_training_checklist.md",
    summary: "Training topics and synthetic case exercises for laboratory staff review."
  },
  "status-taxonomy": {
    title: "Result-Status Taxonomy",
    file: "07_result_status_taxonomy.md",
    summary: "Common vocabulary for preliminary, final, corrected, pending, and discrepant results."
  },
  "synthetic-scenarios": {
    title: "Synthetic Validation Scenarios",
    file: "08_synthetic_validation_scenarios.md",
    summary: "Dry-run scenarios for realistic laboratory communication edge cases."
  },
  "reviewer-checklist": {
    title: "Reviewer Feedback Checklist",
    file: "09_reviewer_feedback_checklist.md",
    summary: "A focused way for technical reviewers to evaluate the public artifact suite."
  }
};

const params = new URLSearchParams(window.location.search);
const docId = params.get("doc") || "implementation-map";
const artifact = artifacts[docId] || artifacts["implementation-map"];

const titleEl = document.querySelector("#artifact-title");
const summaryEl = document.querySelector("#artifact-summary");
const contentEl = document.querySelector("#artifact-content");
const sourceLink = document.querySelector("#source-link");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
}

function parseTable(lines, startIndex) {
  const header = lines[startIndex]
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  let index = startIndex + 2;
  const rows = [];

  while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index])) {
    rows.push(
      lines[index]
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim()),
    );
    index += 1;
  }

  return {
    html: [
      "<div class=\"table-wrap\"><table>",
      "<thead><tr>",
      ...header.map((cell) => `<th>${renderInline(cell)}</th>`),
      "</tr></thead><tbody>",
      ...rows.map(
        (row) =>
          `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`,
      ),
      "</tbody></table></div>",
    ].join(""),
    nextIndex: index,
  };
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const output = [];
  let listType = null;
  let inCode = false;
  let codeLines = [];
  let paragraph = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    output.push(`</${listType}>`);
    listType = null;
  }

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trim();

    if (line.startsWith("```")) {
      flushParagraph();
      closeList();
      if (inCode) {
        output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
      }
      inCode = !inCode;
      continue;
    }

    if (inCode) {
      codeLines.push(raw);
      continue;
    }

    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    if (/^\s*\|.*\|\s*$/.test(raw) && /^\s*\|?\s*:?-{3,}:?\s*\|/.test(lines[index + 1] || "")) {
      flushParagraph();
      closeList();
      const table = parseTable(lines, index);
      output.push(table.html);
      index = table.nextIndex - 1;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = Math.min(heading[1].length + 1, 5);
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^-\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (listType !== "ul") {
        closeList();
        output.push("<ul>");
        listType = "ul";
      }
      output.push(`<li>${renderInline(bullet[1])}</li>`);
      continue;
    }

    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      if (listType !== "ol") {
        closeList();
        output.push("<ol>");
        listType = "ol";
      }
      output.push(`<li>${renderInline(numbered[1])}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return output.join("\n");
}

async function loadArtifact() {
  titleEl.textContent = artifact.title;
  summaryEl.textContent = artifact.summary;
  document.title = `${artifact.title} | Rapid MDRO Diagnostic Stewardship Workflow`;

  const sourceUrl = `assets/${artifact.file}`;
  sourceLink.href = sourceUrl;

  try {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const markdown = await response.text();
    contentEl.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    contentEl.innerHTML = `<p>Unable to load this artifact. Use the Markdown source link or the full reference PDF.</p>`;
  }
}

loadArtifact();
