const USUARIOS = [
  { nombre: "Laura Gómez", empresa: "Banco Meridiano", email: "laura.gomez@bancomeridiano.com", plan: "Enterprise", estado: "Activo" },
  { nombre: "Carlos Méndez", empresa: "Fintech Nébula", email: "carlos.mendez@fintechnebula.io", plan: "Pro", estado: "Activo" },
  { nombre: "Ana Torres", empresa: "Grupo Asegurador Andes", email: "ana.torres@aseguradoraandes.com", plan: "Starter", estado: "Pendiente" },
  { nombre: "Diego Ramírez", empresa: "Capital BlueRock", email: "diego.ramirez@capitalbluerock.com", plan: "Enterprise", estado: "Suspendido" },
  { nombre: "Sofía Herrera", empresa: "Contadores & Asociados", email: "sofia.herrera@contadoresasociados.com", plan: "Pro", estado: "Activo" },
  { nombre: "Martín Ibáñez", empresa: "Banco Meridiano", email: "martin.ibanez@bancomeridiano.com", plan: "Starter", estado: "Activo" }
];

const AGENTES = [
  {
    nombre: "Ledger",
    propietario: "Banco Meridiano",
    estado: "Activo",
    promptSistema: "Actúa como agente financiero de Banco Meridiano especializado en conciliación de facturas.\nValida discrepancias entre facturas, órdenes y pagos antes de generar reportes financieros claros para operaciones.",
    skills: ["Conciliación de facturas", "Generación de reportes financieros"]
  },
  {
    nombre: "Sentinel",
    propietario: "Fintech Nébula",
    estado: "Fallando",
    promptSistema: "Actúa como agente de riesgo transaccional para Fintech Nébula.\nDetecta patrones de fraude, prioriza alertas críticas y verifica señales de cumplimiento normativo antes de recomendar acciones.",
    skills: ["Detección de fraude", "Monitoreo de cumplimiento normativo"]
  },
  {
    nombre: "RiskGuard",
    propietario: "Grupo Asegurador Andes",
    estado: "Activo",
    promptSistema: "Actúa como agente de evaluación de riesgo para Grupo Asegurador Andes.\nAnaliza riesgo crediticio, cruza hallazgos con cumplimiento normativo y resume impactos financieros en reportes accionables.",
    skills: ["Análisis de riesgo crediticio", "Generación de reportes financieros", "Monitoreo de cumplimiento normativo"]
  },
  {
    nombre: "Vault",
    propietario: "Capital BlueRock",
    estado: "Inactivo",
    promptSistema: "Actúa como agente de control regulatorio para Capital BlueRock.\nMonitorea obligaciones de cumplimiento, identifica brechas operativas y prepara reportes financieros de soporte cuando se soliciten.",
    skills: ["Monitoreo de cumplimiento normativo", "Generación de reportes financieros"]
  },
  {
    nombre: "Auditor",
    propietario: "Contadores & Asociados",
    estado: "Activo",
    promptSistema: "Actúa como agente contable para Contadores & Asociados.\nConcilia facturas, valida ciclos de nómina y documenta incidencias con criterios auditables antes de cerrar cada proceso.",
    skills: ["Conciliación de facturas", "Procesamiento de nómina"]
  }
];

const SKILLS = [
  {
    nombre: "Conciliación de facturas",
    descripcion: "Detecta y concilia automáticamente discrepancias entre facturas, órdenes de compra y pagos registrados.",
    agentesHabilitados: 2
  },
  {
    nombre: "Generación de reportes financieros",
    descripcion: "Genera reportes periódicos de estados financieros, flujo de caja y KPIs contables.",
    agentesHabilitados: 3
  },
  {
    nombre: "Detección de fraude",
    descripcion: "Analiza patrones de transacciones para identificar actividad potencialmente fraudulenta.",
    agentesHabilitados: 1
  },
  {
    nombre: "Monitoreo de cumplimiento normativo",
    descripcion: "Verifica que las operaciones cumplan con regulaciones financieras vigentes (AML, KYC, etc.).",
    agentesHabilitados: 3
  },
  {
    nombre: "Análisis de riesgo crediticio",
    descripcion: "Evalúa el perfil de riesgo de clientes y contrapartes a partir de datos históricos.",
    agentesHabilitados: 1
  },
  {
    nombre: "Procesamiento de nómina",
    descripcion: "Automatiza el cálculo, validación y programación de pagos de nómina.",
    agentesHabilitados: 1
  }
];

const CONTRATACIONES = [
  {
    cliente: "Banco Meridiano",
    agente: "Ledger",
    skills: [
      { nombre: "Conciliación de facturas", precio: "$900.00" },
      { nombre: "Generación de reportes financieros", precio: "$1,100.00" }
    ],
    inicio: "01/03/2026",
    fin: "01/03/2027",
    importeTotal: "$2,000.00"
  },
  {
    cliente: "Fintech Nébula",
    agente: "Sentinel",
    skills: [
      { nombre: "Detección de fraude", precio: "$1,600.00" },
      { nombre: "Monitoreo de cumplimiento normativo", precio: "$1,300.00" }
    ],
    inicio: "15/01/2026",
    fin: "15/01/2027",
    importeTotal: "$2,900.00"
  },
  {
    cliente: "Grupo Asegurador Andes",
    agente: "RiskGuard",
    skills: [
      { nombre: "Análisis de riesgo crediticio", precio: "$1,500.00" },
      { nombre: "Monitoreo de cumplimiento normativo", precio: "$1,300.00" }
    ],
    inicio: "10/11/2025",
    fin: "10/11/2026",
    importeTotal: "$2,800.00"
  },
  {
    cliente: "Capital BlueRock",
    agente: "Vault",
    skills: [
      { nombre: "Monitoreo de cumplimiento normativo", precio: "$1,300.00" }
    ],
    inicio: "05/06/2025",
    fin: "05/06/2026",
    importeTotal: "$1,300.00"
  },
  {
    cliente: "Contadores & Asociados",
    agente: "Auditor",
    skills: [
      { nombre: "Conciliación de facturas", precio: "$900.00" },
      { nombre: "Procesamiento de nómina", precio: "$850.00" }
    ],
    inicio: "20/02/2026",
    fin: "20/02/2027",
    importeTotal: "$1,750.00"
  }
];

const ERRORES = [
  {
    timestamp: "14/09/2026 09:12",
    agente: "Sentinel",
    tipo: "Error crítico",
    descripcion: "Fallo de autenticación con la API bancaria del cliente; agente detenido.",
    traceCompleta: "at BankingAuthClient.refreshToken() → respuesta 401 del proveedor bancario\nat SentinelFraudRunner.validateSession() → credenciales rechazadas para canal transaccional\nat AgentSupervisor.haltAgent() → ejecución detenida por política de seguridad",
    severidad: "Rojo"
  },
  {
    timestamp: "10/09/2026 22:47",
    agente: "Vault",
    tipo: "Advertencia",
    descripcion: "Tiempo de respuesta elevado al generar el reporte de cierre mensual.",
    traceCompleta: "at RegulatoryDataGateway.fetchMonthlySnapshot() → latencia superior a 4500ms\nat VaultReportBuilder.composeClosingReport() → reintento programado con caché parcial\nat PerformanceMonitor.warn() → umbral de respuesta excedido",
    severidad: "Ámbar"
  },
  {
    timestamp: "08/09/2026 16:03",
    agente: "Ledger",
    tipo: "Error crítico",
    descripcion: "Excepción no controlada al conciliar el lote de facturas del día.",
    traceCompleta: "at InvoiceBatchParser.normalizeRows() → fila 128 sin identificador fiscal\nat LedgerReconciliation.matchPayments() → no se pudo completar la conciliación\nat JobRunner.failCurrentBatch() → lote marcado para revisión manual",
    severidad: "Rojo"
  },
  {
    timestamp: "05/09/2026 11:30",
    agente: "RiskGuard",
    tipo: "Advertencia",
    descripcion: "Límite de tasa alcanzado al consultar el buró de crédito externo.",
    traceCompleta: "at CreditBureauClient.requestScore() → rate limit 429 recibido\nat RiskGuardEvaluator.queueRetry() → consulta diferida por ventana de cuota\nat ComplianceLogger.recordWarning() → evaluación continuará con datos cacheados",
    severidad: "Ámbar"
  },
  {
    timestamp: "02/09/2026 08:15",
    agente: "Auditor",
    tipo: "Info",
    descripcion: "Ciclo de nómina procesado correctamente sin incidencias.",
    traceCompleta: "at PayrollProcessor.validateCycle() → 42 registros verificados\nat AuditorReconciliation.closePayrollRun() → conciliación de nómina sin diferencias\nat AuditTrail.persistInfo() → evidencia operativa registrada",
    severidad: "Gris azulado"
  },
  {
    timestamp: "30/08/2026 19:58",
    agente: "Sentinel",
    tipo: "Error crítico",
    descripcion: "El modelo de detección de fraude no pudo cargar el dataset de transacciones.",
    traceCompleta: "at FraudDatasetLoader.openPartition() → partición transactions_2026_08 no disponible\nat SentinelModelRuntime.loadFeatures() → matriz de variables incompleta\nat AgentSupervisor.haltAgent() → modelo detenido para evitar inferencias parciales",
    severidad: "Rojo"
  },
  {
    timestamp: "27/08/2026 13:20",
    agente: "Vault",
    tipo: "Resuelto",
    descripcion: "Conexión con el proveedor de datos regulatorios restablecida.",
    traceCompleta: "at RegulatoryDataGateway.healthCheck() → proveedor respondió 200 OK\nat VaultConnector.restoreSession() → sesión de datos regulatorios restablecida\nat IncidentResolver.markResolved() → conectividad confirmada y evento cerrado",
    severidad: "Verde"
  }
];

const METRICAS_DASHBOARD = {
  ingresosTotales: "$24,300.00",
  perdidaDescuentos: "$1,875.00",
  agentesActivos: 47,
  agentesFallando: 3
};