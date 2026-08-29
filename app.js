const templates = {
  rapid_marker: {
    title: "Rapid organism or resistance-marker signal",
    summary: "Preliminary rapid result with possible culture, organism identification, and AST follow-up.",
    comment: ({ organism, marker }) =>
      `Rapid molecular testing detected ${organism} and ${marker}. Culture and/or susceptibility testing may be pending. Correlate with final laboratory results and institutional notification protocols.`,
    docs: [
      "Record rapid-result status and whether culture, organism identification, or AST remains pending.",
      "Document notification route according to local policy.",
      "Track final AST or corrected-result follow-up when available."
    ]
  },
  ast_pending: {
    title: "Organism identified, AST pending",
    summary: "Organism identification is available but phenotypic susceptibility testing is not final.",
    comment: ({ organism }) =>
      `${organism} identified. Antimicrobial susceptibility testing is pending. Correlate with final AST report when available.`,
    docs: [
      "Verify organism identification status.",
      "Record AST pending status.",
      "Add final AST reconciliation task under local workflow."
    ]
  },
  c_auris_pending: {
    title: "Suspected Candida auris, confirmation pending",
    summary: "Confirmation-aware route for suspected C. auris findings.",
    comment: () =>
      "Preliminary laboratory finding raises concern for Candida auris. Confirmatory identification and institutional notification steps may be pending according to local protocol.",
    docs: [
      "Avoid confirmed-status language until local confirmation criteria are met.",
      "Route awareness according to local laboratory and infection prevention procedures.",
      "Document confirmation status and follow-up owner."
    ]
  },
  c_auris_confirmed: {
    title: "Confirmed Candida auris laboratory result",
    summary: "Confirmed-status communication route under local policy.",
    comment: () =>
      "Candida auris identified by [method]. Follow institutional infection prevention, communication, and reporting protocols as applicable.",
    docs: [
      "Document confirmation method if locally approved for reporting language.",
      "Route according to institutional infection prevention and reporting procedures.",
      "Check whether transfer-status communication reminders apply under local policy."
    ]
  },
  corrected: {
    title: "Corrected or amended laboratory result",
    summary: "Corrected-result route for changes to prior organism, marker, AST, or status communication.",
    comment: ({ organism }) =>
      `Corrected laboratory result issued for ${organism}. Prior preliminary or final communication may require review according to local corrected-result notification policy.`,
    docs: [
      "Record prior status and corrected status.",
      "Document corrected-result notification according to local policy.",
      "Review whether downstream comments or follow-up tasks need revision."
    ]
  },
  discrepant: {
    title: "Discrepant rapid and culture/AST finding",
    summary: "Technical-review route for rapid and follow-up findings that do not clearly align.",
    comment: () =>
      "Rapid result and follow-up culture and/or susceptibility findings require technical review. Interpret according to final corrected laboratory report and local documentation protocol.",
    docs: [
      "Flag discrepancy for technical or supervisory review.",
      "Avoid unsupported certainty until review is complete.",
      "Document final interpretation or corrected-result path under local policy."
    ]
  },
  negative_pending: {
    title: "Negative rapid target, culture pending",
    summary: "Avoids premature closure when rapid targets are negative but culture remains pending.",
    comment: () =>
      "Rapid target not detected. Culture and/or additional laboratory evaluation may remain pending. Interpret with final laboratory report and local notification protocol.",
    docs: [
      "Record rapid negative status separately from final culture status.",
      "Track pending culture or additional evaluation if applicable.",
      "Avoid closing follow-up tasks before final result review."
    ]
  }
};

const cases = {
  rapid_marker: {
    trigger: "rapid_marker",
    status: "ast_pending",
    organism: "Organism X",
    marker: "Resistance Marker Y",
    routes: ["infection prevention", "antimicrobial stewardship", "laboratory supervisor review"]
  },
  ast_pending: {
    trigger: "ast_pending",
    status: "ast_pending",
    organism: "Organism X",
    marker: "susceptibility pending",
    routes: ["antimicrobial stewardship", "laboratory supervisor review"]
  },
  c_auris_pending: {
    trigger: "c_auris_pending",
    status: "pending_confirmation",
    organism: "Candida auris",
    marker: "confirmation pending",
    routes: ["infection prevention", "laboratory supervisor review"]
  },
  c_auris_confirmed: {
    trigger: "c_auris_confirmed",
    status: "final",
    organism: "Candida auris",
    marker: "confirmed status",
    routes: ["infection prevention", "transfer communication", "laboratory supervisor review"]
  },
  corrected: {
    trigger: "corrected",
    status: "corrected",
    organism: "corrected organism identification",
    marker: "result category updated",
    routes: ["laboratory supervisor review"]
  },
  negative_pending: {
    trigger: "negative_pending",
    status: "preliminary",
    organism: "rapid target not detected",
    marker: "culture pending",
    routes: ["laboratory supervisor review"]
  },
  discrepant: {
    trigger: "discrepant",
    status: "pending_confirmation",
    organism: "Organism X",
    marker: "Resistance Marker Y",
    routes: ["laboratory supervisor review", "antimicrobial stewardship"]
  }
};

const form = document.querySelector("#workflow-form");
const triggerInput = document.querySelector("#trigger");
const statusInput = document.querySelector("#status");
const organismInput = document.querySelector("#organism");
const markerInput = document.querySelector("#marker");
const titleOutput = document.querySelector("#output-title");
const summaryOutput = document.querySelector("#output-summary");
const commentOutput = document.querySelector("#output-comment");
const routeOutput = document.querySelector("#output-route");
const docsOutput = document.querySelector("#output-docs");

function selectedRoutes() {
  return Array.from(form.querySelectorAll("input[name='route']:checked")).map((input) => input.value);
}

function setRoutes(routes) {
  form.querySelectorAll("input[name='route']").forEach((input) => {
    input.checked = routes.includes(input.value);
  });
}

function renderList(target, items) {
  target.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function generatePacket() {
  const key = triggerInput.value;
  const template = templates[key];
  const context = {
    organism: organismInput.value.trim() || "[organism]",
    marker: markerInput.value.trim() || "[resistance marker]",
    status: statusInput.value
  };
  const routes = selectedRoutes();
  const routeItems = [
    `Result status: ${statusInput.options[statusInput.selectedIndex].text}.`,
    "Review result status before final or corrected communication.",
    routes.length
      ? `Local-policy routes to consider: ${routes.join(", ")}.`
      : "No local-policy route selected for this dry run.",
    "Keep treatment, isolation, transfer, and public-health reporting decisions under approved institutional policy."
  ];

  titleOutput.textContent = template.title;
  summaryOutput.textContent = template.summary;
  commentOutput.textContent = template.comment(context);
  renderList(routeOutput, routeItems);
  renderList(docsOutput, template.docs);
}

document.querySelector("#generate-output").addEventListener("click", generatePacket);

document.querySelector("#reset-builder").addEventListener("click", () => {
  triggerInput.value = "rapid_marker";
  statusInput.value = "preliminary";
  organismInput.value = "[organism]";
  markerInput.value = "[resistance marker]";
  setRoutes(["infection prevention", "laboratory supervisor review"]);
  generatePacket();
});

document.querySelectorAll("[data-load-case]").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = cases[button.dataset.loadCase];
    triggerInput.value = preset.trigger;
    statusInput.value = preset.status;
    organismInput.value = preset.organism;
    markerInput.value = preset.marker;
    setRoutes(preset.routes);
    generatePacket();
    document.querySelector("#builder").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-copy-text]").forEach((button) => {
  button.addEventListener("click", async () => {
    await copyToClipboard(button.dataset.copyText);
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1400);
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(`#${button.dataset.copyTarget}`);
    await copyToClipboard(target.innerText.trim());
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy packet";
    }, 1400);
  });
});

generatePacket();
