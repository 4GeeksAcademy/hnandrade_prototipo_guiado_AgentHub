(function () {
  const metricIcons = {
    ingresosTotales: '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M15 8.25h-4.25a2.25 2.25 0 0 0 0 4.5h2.5a2.25 2.25 0 0 1 0 4.5H9M12 6v2.25m0 9V19.5"/></svg>',
    perdidaDescuentos: '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 13.5 13.5 20.25a2.12 2.12 0 0 1-3 0l-6.75-6.75V4.75a1 1 0 0 1 1-1h8.75l6.75 6.75a2.12 2.12 0 0 1 0 3ZM8.25 8.25h.01"/></svg>',
    agentesActivos: '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="6.25" y="6.25" width="11.5" height="11.5" rx="1.5"/><path stroke-linecap="round" d="M9.5 9.5h5v5h-5v-5ZM9 2.75v3.5m6-3.5v3.5M9 17.75v3.5m6-3.5v3.5M2.75 9h3.5m-3.5 6h3.5m11.5-6h3.5m-3.5 6h3.5"/></svg>',
    agentesFallando: '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.3 3.6 2.65 17.1a2.1 2.1 0 0 0 1.83 3.15h15.04a2.1 2.1 0 0 0 1.83-3.15L13.7 3.6a1.95 1.95 0 0 0-3.4 0ZM12 8.25v4.5m0 3.5v.01"/></svg>'
  };

  const metricDefinitions = [
    { key: "ingresosTotales", label: "Ingresos totales generados" },
    { key: "perdidaDescuentos", label: "Pérdida total por descuentos y cupones" },
    { key: "agentesActivos", label: "Agentes activos en todos los clientes" },
    { key: "agentesFallando", label: "Agentes actualmente marcados como fallando" }
  ];

  function parseCurrency(value) {
    return Number(value.replace(/[^0-9.-]+/g, ""));
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(value);
  }

  function parseDate(value) {
    const [date, time = "00:00"] = value.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
  }

  function contractDurationInMonths(contract) {
    const start = parseDate(contract.inicio);
    const end = parseDate(contract.fin);
    return (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
  }

  function renderMetrics() {
    const container = document.getElementById("dashboard-metrics");

    container.innerHTML = metricDefinitions.map((metric) => `
      <article class="flex min-h-36 items-start justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="min-w-0 pr-4">
          <p class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">${metric.label}</p>
          <p class="mt-4 text-3xl font-bold text-gray-950 dark:text-white">${METRICAS_DASHBOARD[metric.key]}</p>
        </div>
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
          ${metricIcons[metric.key]}
        </span>
      </article>
    `).join("");
  }

  function renderAttentionWidget() {
    const failingAgents = AGENTES.filter((agent) => agent.estado === "Fallando");
    const rows = failingAgents.length
      ? failingAgents.map((agent) => {
          const latestError = ERRORES
            .filter((error) => error.agente === agent.nombre)
            .sort((first, second) => parseDate(second.timestamp) - parseDate(first.timestamp))[0];

          return `
            <li class="py-4 first:pt-0 last:pb-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="font-semibold text-gray-950 dark:text-white">${agent.nombre}</p>
                  <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">${agent.propietario}</p>
                </div>
                <span class="shrink-0 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 dark:bg-red-500/20 dark:text-red-300">Fallando</span>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">${latestError ? latestError.descripcion : "Sin errores registrados."}</p>
            </li>
          `;
        }).join("")
      : '<li class="py-2 text-sm text-gray-500 dark:text-gray-400">Sin agentes en estado crítico actualmente.</li>';

    return `
      <article class="flex min-h-80 flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-950 dark:text-white">Agentes que requieren atención</h2>
        <ul class="mt-5 divide-y divide-gray-200 dark:divide-gray-700">${rows}</ul>
        <a href="errores.html" class="mt-auto pt-6 text-sm font-semibold text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white">Ver log de errores completo →</a>
      </article>
    `;
  }

  function renderContractsWidget() {
    const totalBilled = CONTRATACIONES.reduce((total, contract) => total + parseCurrency(contract.importeTotal), 0);
    const averageDuration = Math.round(
      CONTRATACIONES.reduce((total, contract) => total + contractDurationInMonths(contract), 0) / CONTRATACIONES.length
    );
    const totalSkills = CONTRATACIONES.reduce((total, contract) => total + contract.skills.length, 0);
    const largestContracts = [...CONTRATACIONES]
      .sort((first, second) => parseCurrency(second.importeTotal) - parseCurrency(first.importeTotal))
      .slice(0, 2);

    return `
      <article class="flex min-h-80 flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-950 dark:text-white">Resumen de contrataciones</h2>
        <dl class="mt-5 grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200 py-4 dark:divide-gray-700 dark:border-gray-700">
          <div class="pr-3">
            <dt class="text-xs text-gray-500 dark:text-gray-400">Total facturado</dt>
            <dd class="mt-1 text-base font-bold text-gray-950 dark:text-white">${formatCurrency(totalBilled)}</dd>
          </div>
          <div class="px-3">
            <dt class="text-xs text-gray-500 dark:text-gray-400">Duración promedio</dt>
            <dd class="mt-1 text-base font-bold text-gray-950 dark:text-white">${averageDuration} meses</dd>
          </div>
          <div class="pl-3">
            <dt class="text-xs text-gray-500 dark:text-gray-400">Skills contratadas</dt>
            <dd class="mt-1 text-base font-bold text-gray-950 dark:text-white">${totalSkills}</dd>
          </div>
        </dl>
        <h3 class="mt-5 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Contratos de mayor importe</h3>
        <ul class="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
          ${largestContracts.map((contract) => `
            <li class="flex items-center justify-between gap-4 py-3">
              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-gray-950 dark:text-white">${contract.cliente}</p>
                <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">${contract.agente}</p>
              </div>
              <span class="shrink-0 text-sm font-semibold text-gray-900 dark:text-gray-100">${contract.importeTotal}</span>
            </li>
          `).join("")}
        </ul>
        <a href="contrataciones.html" class="mt-auto pt-5 text-sm font-semibold text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white">Ver todas las contrataciones →</a>
      </article>
    `;
  }

  function renderDashboard() {
    const widgetsContainer = document.getElementById("dashboard-widgets");
    if (!document.getElementById("dashboard-metrics") || !widgetsContainer) return;

    renderMetrics();
    widgetsContainer.innerHTML = renderAttentionWidget() + renderContractsWidget();
  }

  renderDashboard();
})();