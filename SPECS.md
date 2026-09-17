## 1. Descripción del producto

AgentHub es una startup SaaS que permite a empresas del sector financiero alquilar agentes de IA preconfigurados para automatizar tareas operativas, analíticas y regulatorias. La plataforma centraliza la entrega de asistentes especializados con capacidades reutilizables llamadas skills, como navegación web, lectura de documentos, conciliación financiera, análisis de riesgos y gestión de calendarios, y los despliega en entornos de negocio para apoyar procesos críticos. En el contexto del prototipo solicitado, el producto se presenta como una solución B2B dirigida a bancos, fintechs, aseguradoras, gestoras de inversión y firmas contables que buscan operar con agentes IA escalables sin depender de un equipo interno de desarrollo para integrarlos de forma manual.

La experiencia que se debe construir aquí no es la del cliente final de AgentHub, sino la del usuario administrador interno: el equipo de la empresa que supervisa clientes, agentes, skills, contrataciones y errores. Este panel funciona como una consola operativa para revisar el estado de cada cliente, controlar la salud de los agentes desplegados, comparar habilidades habilitadas por negocio, evaluar contratos vigentes y detectar incidencias técnicas o operativas en tiempo real. El objetivo es ofrecer una visión panorámica, clara y accionable del negocio de AgentHub sin requerir un backend real ni integración con APIs externas.

## 2. Stack tecnológico y restricciones

- HTML5 semántico puro.
- Tailwind CSS cargado ÚNICAMENTE vía CDN (`<script src="https://cdn.tailwindcss.com">`), sin build tools, sin archivos .css personalizados, sin atributos `style` en línea.
- JavaScript vanilla únicamente (sin frameworks como React/Vue, sin jQuery, sin librerías de terceros para interactividad).
- Iconos: SVG inline estilo Heroicons (outline, stroke-width 1.5–2), embebidos directamente en el HTML — no se carga ninguna librería de iconos externa.
- Sin backend, sin fetch, sin API: todos los datos están hardcodeados directamente en el HTML.
- Estructura multi-archivo: un archivo HTML por sección (ver siguiente punto), enlazados mediante la barra lateral de navegación.
- Idioma de la interfaz: español.
- Layout responsive orientado a escritorio y tablet (no es prioridad el diseño mobile-first, pero no debe romperse en tablet ≥768px).

## 3. Estructura de archivos

Se entregará una estructura multi-archivo con los siguientes archivos en la raíz del proyecto:

- `index.html` → Dashboard principal del panel administrativo. Debe resumir el estado general del negocio con métricas, salud general y un placeholder visual para actividad.
- `usuarios.html` → Gestión de usuarios. Aquí se gestionan los clientes de AgentHub, su plan, su estado y sus detalles asociados.
- `agentes.html` → Gestión de agentes. En esta vista se supervisan los agentes alquilados por cliente y sus habilidades habilitadas.
- `skills.html` → Catálogo de skills disponibles. Muestra qué capacidades puede reutilizar AgentHub para cubrir tareas empresariales del sector financiero.
- `contrataciones.html` → Contrataciones de agentes. Muestra el historial de acuerdos empresariales, fechas, precios y skills vinculadas.
- `errores.html` → Log de errores. Centraliza incidencias, advertencias y eventos de salud de los agentes.

La barra lateral, el header superior (con el toggle de modo oscuro) y los componentes reutilizables (modal, dropdown, badges) deben replicarse de forma idéntica en cada archivo HTML, ya que no hay sistema de plantillas ni includes (JS vanilla puro). Esto implica que la estructura visual debe mantenerse consistente en todas las secciones para asegurar coherencia y reutilización de patrones, sin depender de fragmentos compartidos.

## 4. Modelo de datos de referencia (dataset hardcodeado — sector financiero)

Este dataset debe usarse exactamente tal cual en todas las vistas para garantizar consistencia entre secciones, nombres, planes, estados y contrataciones. Si un nombre aparece en una vista, debe coincidir exactamente en otra para evitar desalineaciones visuales o semánticas.

### Usuarios

| Nombre | Email | Plan | Estado |
|---|---|---|---|
| Laura Gómez | laura.gomez@bancomeridiano.com | Enterprise | Activo |
| Carlos Méndez | carlos.mendez@fintechnebula.io | Pro | Activo |
| Ana Torres | ana.torres@aseguradoraandes.com | Starter | Pendiente |
| Diego Ramírez | diego.ramirez@capitalbluerock.com | Enterprise | Suspendido |
| Sofía Herrera | sofia.herrera@contadoresasociados.com | Pro | Activo |
| Martín Ibáñez | martin.ibanez@bancomeridiano.com | Starter | Activo |

### Agentes

| Nombre del agente | Propietario (empresa) | Estado | Skills asignadas |
|---|---|---|---|
| Ledger | Banco Meridiano | Activo | Conciliación de facturas, Generación de reportes financieros |
| Sentinel | Fintech Nébula | Fallando | Detección de fraude, Monitoreo de cumplimiento normativo |
| RiskGuard | Grupo Asegurador Andes | Activo | Análisis de riesgo crediticio, Generación de reportes financieros, Monitoreo de cumplimiento normativo |
| Vault | Capital BlueRock | Inactivo | Monitoreo de cumplimiento normativo, Generación de reportes financieros |
| Auditor | Contadores & Asociados | Activo | Conciliación de facturas, Procesamiento de nómina |

### Skills (catálogo)

| Skill | Descripción | Agentes que la tienen habilitada |
|---|---|---|
| Conciliación de facturas | Detecta y concilia automáticamente discrepancias entre facturas, órdenes de compra y pagos registrados. | 2 |
| Generación de reportes financieros | Genera reportes periódicos de estados financieros, flujo de caja y KPIs contables. | 3 |
| Detección de fraude | Analiza patrones de transacciones para identificar actividad potencialmente fraudulenta. | 1 |
| Monitoreo de cumplimiento normativo | Verifica que las operaciones cumplan con regulaciones financieras vigentes (AML, KYC, etc.). | 3 |
| Análisis de riesgo crediticio | Evalúa el perfil de riesgo de clientes y contrapartes a partir de datos históricos. | 1 |
| Procesamiento de nómina | Automatiza el cálculo, validación y programación de pagos de nómina. | 1 |

### Contrataciones de agentes

| Cliente | Agente alquilado | Skills contratadas | Inicio | Fin | Importe total |
|---|---|---|---|---|---|
| Banco Meridiano | Ledger | Conciliación de facturas ($900.00), Generación de reportes financieros ($1,100.00) | 01/03/2026 | 01/03/2027 | $2,000.00 |
| Fintech Nébula | Sentinel | Detección de fraude ($1,600.00), Monitoreo de cumplimiento normativo ($1,300.00) | 15/01/2026 | 15/01/2027 | $2,900.00 |
| Grupo Asegurador Andes | RiskGuard | Análisis de riesgo crediticio ($1,500.00), Monitoreo de cumplimiento normativo ($1,300.00) | 10/11/2025 | 10/11/2026 | $2,800.00 |
| Capital BlueRock | Vault | Monitoreo de cumplimiento normativo ($1,300.00) | 05/06/2025 | 05/06/2026 | $1,300.00 |
| Contadores & Asociados | Auditor | Conciliación de facturas ($900.00), Procesamiento de nómina ($850.00) | 20/02/2026 | 20/02/2027 | $1,750.00 |

### Log de errores

| Timestamp | Agente | Tipo de error | Descripción | Severidad (color) |
|---|---|---|---|---|
| 14/09/2026 09:12 | Sentinel | Error crítico | Fallo de autenticación con la API bancaria del cliente; agente detenido. | Rojo |
| 10/09/2026 22:47 | Vault | Advertencia | Tiempo de respuesta elevado al generar el reporte de cierre mensual. | Ámbar |
| 08/09/2026 16:03 | Ledger | Error crítico | Excepción no controlada al conciliar el lote de facturas del día. | Rojo |
| 05/09/2026 11:30 | RiskGuard | Advertencia | Límite de tasa alcanzado al consultar el buró de crédito externo. | Ámbar |
| 02/09/2026 08:15 | Auditor | Info | Ciclo de nómina procesado correctamente sin incidencias. | Gris azulado |
| 30/08/2026 19:58 | Sentinel | Error crítico | El modelo de detección de fraude no pudo cargar el dataset de transacciones. | Rojo |
| 27/08/2026 13:20 | Vault | Resuelto | Conexión con el proveedor de datos regulatorios restablecida. | Verde |

### Métricas del Dashboard

- Ingresos totales generados (este mes): $24,300.00
- Pérdida total por descuentos y cupones: $1,875.00
- Agentes activos en todos los clientes: 47
- Agentes actualmente marcados como fallando: 3

Formato: moneda en USD con símbolo $, separador de miles con coma y 2 decimales; fechas en formato DD/MM/AAAA.

## 5. Paleta visual y branding

- Filosofía: diseño monocromático en escala de grises (Tailwind gray-50 a gray-950), con texto negro (gray-900) sobre fondos claros y texto blanco (gray-50) sobre fondos oscuros, para máximo contraste.
- Fondos: gray-50/white en modo claro, gray-900/gray-950 en modo oscuro. Sidebar y header en un gris ligeramente más oscuro que el contenido (gray-100 claro / gray-800 oscuro) para crear jerarquía visual sin usar color.
- Bordes y separadores: gray-200 (claro) / gray-700 (oscuro).
- Botones primarios: fondo gray-900 con texto blanco (claro) / fondo white con texto gray-900 (oscuro) — es decir, siempre alto contraste, nunca un color de marca.
- EXCEPCIÓN funcional (única): los badges de estado (Activo/Inactivo/Fallando/Suspendido/Pendiente) y los badges de severidad del Log de errores SÍ usan color con significado semántico, ya que el brief del proyecto exige codificación visual por color en esos casos: verde (emerald-500) = activo/resuelto, ámbar (amber-500) = advertencia/pendiente, rojo (red-500) = error/fallando/suspendido, gris azulado (slate-400) = info/inactivo. Estos son los ÚNICOS elementos de la interfaz que usan color; todo lo demás (tarjetas, iconos, botones, sidebar, headers) se mantiene en escala de grises.
- Tipografía: la que trae Tailwind por defecto (system-ui / sans-serif), sin fuentes externas.
- Modo oscuro: usar el prefijo dark: de Tailwind en todos los componentes (fondos, textos, bordes).

## 6. Especificaciones por sección (mínimo 3 por sección, con el nivel de detalle del ejemplo del Dashboard)

### Dashboard

1. Cuadrícula responsive 2×2 (1 columna en tablet) con 4 tarjetas de métrica: Ingresos totales, Pérdidas por descuentos, Agentes activos, Agentes fallando — cada una con icono SVG en gris oscuro, etiqueta y valor hardcodeado del modelo de datos.
2. Todas las tarjetas comparten el mismo estilo gris (fondo white/gray-800, borde gray-200/gray-700, sombra sutil shadow-sm, esquinas redondeadas rounded-xl); se diferencian solo por el icono y la etiqueta, no por color.
3. Debajo de las tarjetas, un div de ancho completo (min-height 250px) con borde discontinuo (border-dashed border-gray-300/dark:border-gray-600), fondo gray-50/dark:gray-800 y una etiqueta centrada "Gráfico de actividad semanal (próximamente)" — es solo un placeholder, no un gráfico funcional.
4. El header de la sección incluye un título "Dashboard" y un texto resumido de contexto operativo, manteniendo la misma estructura visual y jerarquía que el resto de las páginas.
5. El dashboard no debe usar color de marca ni gráficos reales; la intención es transmitir estado operativo con métricas simples y un placeholder de actividad que deje claro que la visualización aún está en desarrollo.

### Gestión de usuarios

1. Tabla con columnas Nombre, Email, Plan, Estado, Acciones — poblada con las 6 filas del modelo de datos; el Estado se muestra como badge de color (Activo=verde, Pendiente=ámbar, Suspendido=rojo), único elemento con color en la tabla.
2. Cada fila tiene un botón ⋮ (gris, sin fondo) que abre un dropdown de acciones (fondo blanco/gray-800, borde gray-200/gray-700) con las opciones "Ver detalle" y "Eliminar".
3. "Ver detalle" abre un modal overlay centrado (backdrop negro semitransparente) con el registro completo del usuario seleccionado; el modal se cierra con un botón "X" y al hacer clic fuera del contenido (backdrop).
4. El plan del usuario se muestra como texto principal en la celda correspondiente y no como botón de acción; el contenido se mantiene alineado en una tabla legible con columnas proporcionales para escritorio.
5. El estado no se puede editar desde la misma fila; la acción principal de interacción es abrir el detalle o eliminar el cliente, manteniendo el flujo operativo del panel interno.

### Gestión de agentes

1. Listado (tabla o tarjetas grises) con los 5 agentes del modelo de datos, mostrando nombre, propietario, badge de estado con color (Activo/Inactivo/Fallando) y un control expandible (icono chevron gris) para mostrar/ocultar sus skills.
2. Al hacer clic en el control expandible, la lista de skills del agente se revela con una transición CSS (max-height + transition, o clases de Tailwind transition-all), y las skills se muestran como chips grises (fondo gray-100/dark:gray-700, texto gray-900/dark:gray-100 — sin color).
3. Dropdown de acciones (⋮) con "Configurar" — abre un modal con un `<textarea>` editable prellenado con un prompt de sistema de ejemplo para ese agente (relacionado con su función financiera) — y "Eliminar".
4. El estado se representa con badge semántico usando los mismos códigos de color definidos en la paleta: Activo=verde, Fallando=rojo, Inactivo=gris azulado.
5. La vista debe mantener una jerarquía clara: nombre del agente, empresa propietaria, estado, skills y acciones; todo sin romper el layout en tablet o escritorio.

### Skills

1. Catálogo en formato de tarjetas grises (grid responsive) con las 6 skills del modelo de datos, cada una mostrando nombre, descripción y un contador "X agentes habilitados" con estilo de badge gris (fondo gray-100/dark:gray-700, sin color).
2. Un bloque de texto destacado (banner con fondo gray-100/dark:gray-800 y borde izquierdo gray-900/dark:gray-100) que explica brevemente qué es una "skill" en AgentHub: una capacidad reutilizable que se puede adjuntar a uno o más agentes para ampliar lo que pueden hacer en procesos financieros.
3. Dropdown de acciones (⋮) en cada tarjeta con "Ver detalle" y "Eliminar".
4. Todas las cards usan el mismo estilo base de fondo gris claro/oscuro, borde sutil y sombra mínima para mantener una identidad visual coherente.
5. La descripción de cada skill debe reutilizar el texto exacto del dataset hardcodeado para asegurar consistencia entre catálogo y el resto del panel.

### Contrataciones de agentes

1. Tabla con columnas Cliente, Agente, Skills contratadas, Fecha inicio, Fecha fin, Imparte total, Acciones — poblada con los 5 contratos del modelo de datos.
2. Las skills contratadas se muestran como chips grises separados dentro de la celda (no como texto plano con comas, y sin color).
3. Dropdown de acciones (⋮) con "Ver detalle", que abre un modal con el desglose completo del contrato: cliente, agente, fechas, y una lista de las skills contratadas con su precio individual (según el modelo de datos) y el total.
4. El importe total debe mostrarse siempre con formato USD, usando el símbolo $ y dos decimales, tal como se define en el dataset.
5. El modal de detalle debe incluir una sección de desglose con cada skill y sus precios individuales para hacer visible la composición económica del contrato.

### Log de errores

1. Tabla o lista con columnas Timestamp, Agente, Tipo de error, Descripción — poblada con las 7 entradas del modelo de datos.
2. El tipo de error se muestra como badge con código de color (rojo=Error crítico, ámbar=Advertencia, gris azulado=Info, verde=Resuelto) — junto con los badges de estado, es de los pocos elementos con color en toda la interfaz.
3. Dropdown de acciones (⋮) con "Ver detalle" (abre un modal con una traza de error simulada, tipo stack trace, en fuente monoespaciada sobre fondo gray-900/texto gray-100) y "Marcar como resuelto".
4. La tabla debe permitir escanear rápidamente la severidad y la descripción del incidente, manteniendo texto legible y un orden cronológico descendente por fecha/hora.
5. El botón "Marcar como resuelto" debe cambiar el estado visual del registro sin requerir persistencia real, solo para la simulación de UX del prototipo.

## 7. Inventario de componentes reutilizables

- Sidebar de navegación persistente en gris oscuro (con indicador de sección activa mediante fondo/borde, sin color)
- Header superior gris con toggle de modo claro/oscuro
- Tarjeta de métrica gris (Dashboard)
- Badge de estado/severidad (única fuente de color en la interfaz, con variantes semánticas)
- Dropdown de acciones (menú contextual activado por botón ⋮)
- Modal overlay con backdrop
- Lista de skills colapsable (chevron + transición)
- Chip de skill (gris, sin color)

## 8. Criterios de aceptación

1. Las seis secciones existen como archivos HTML separados y son accesibles desde la barra lateral, con indicador visual de sección activa.
2. Todos los estilos usan clases utilitarias de Tailwind cargado vía CDN; no existen archivos .css ni atributos `style` en línea.
3. Toda la interactividad (dropdowns, modales, colapsables, modo oscuro) funciona con JavaScript vanilla, sin librerías externas.
4. Todos los dropdowns de acciones se abren al hacer clic en el botón ⋮, y se cierran al hacer clic fuera de su área o al seleccionar una opción.
5. "Ver detalle" abre un modal funcional en al menos 4 secciones distintas (Usuarios, Agentes/Configurar, Contrataciones, Errores).
6. Todos los modales se cierran con su botón de cierre y al hacer clic en el backdrop.
7. Las listas de skills de los agentes están colapsadas por defecto y se expanden/colapsan con una transición visible al hacer clic.
8. El toggle de modo claro/oscuro cambia todo el panel usando clases `dark:` de Tailwind, y el modo elegido persiste al navegar entre archivos HTML (usando `localStorage`).
9. Los datos hardcodeados son idénticos y consistentes entre secciones (mismo nombre de agente, cliente y skill en Gestión de agentes, Contrataciones y Log de errores, según el modelo de datos de la sección 4).
10. Toda la interfaz respeta la paleta de grises definida, y el color solo se usa en los badges de estado/severidad, nunca en botones, tarjetas, sidebar o iconos genéricos.
11. El HTML usa etiquetas semánticas (`header`, `nav`, `main`, `section`, `table`, `footer`) en lugar de divs genéricos donde corresponda.
12. El layout se mantiene usable y sin overflow horizontal en viewports de escritorio (≥1280px) y tablet (≥768px).
13. `SPECS.md` está commiteado en un commit separado, anterior a cualquier archivo HTML.

## 9. Recomendaciones de implementación y guardrails finales

- Mantener una convención de nomenclatura consistente entre archivos HTML y elementos con IDs/classes, para que el JavaScript vanilla pueda seleccionar y manipular elementos sin depender de frameworks.
- Priorizar la consistencia visual sobre la creatividad: el prototipo debe sentirse como un panel de administración institucional, serio, visualmente oscuro/claro con fuerte legibilidad y poca ornamentación.
- Repetir la misma estructura base en cada archivo: sidebar, header, contenido principal y footer mínimo, para garantizar una experiencia uniforme al navegar entre secciones.
- Usar la misma lógica semántica de estados y severidades en todas las vistas para reforzar la identidad operativa del producto.
- Evitar cualquier dependencia externa no permitida por estas especificaciones; la entrega debe respetar estrictamente las limitaciones del stack propuesto.

El presente documento funciona como una especificación técnica de implementación para el prototipo del panel administrativo de AgentHub. Cualquier desarrollador o agente de IA puede construir el panel completo siguiendo exactamente estos lineamientos sin necesidad de aclaraciones adicionales.
