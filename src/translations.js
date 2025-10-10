export const translations = {
  en: {
    // Header
    headerTitle: "Major Safety Hazards",
    headerSubtitle: "Mining Operations Safety Guide",

    // Search and Filter
    searchPlaceholder: "Search hazards...",
    filterLabel: "Filter:",
    filterAll: "All",
    filterEngineering: "Engineering",
    filterAdministrative: "Administrative",
    filterPpe: "PPE",
    resultsCounter: "Showing {count} of {total} hazards",
    openSearch: "Open Search",
    closeSearch: "Close Search",

    // Table Headers
    tableHeaderHazard: "Major Safety Hazard",
    tableHeaderSymbol: "Symbol",
    tableHeaderControls: "Critical Controls",

    // Control Types
    controlEngineering: "Engineering",
    controlAdministrative: "Administrative",
    controlPpe: "PPE",

    // Footer
    footerText:
      "Always follow safety protocols and report any hazards immediately.",

    // Hazards Data
    hazards: [
      {
        id: 1,
        name: "Ground Instability",
        controls: {
          engineering: "Installation and maintenance of ground support.",
          administrative:
            "Exclusion zones and regular visual monitoring of the roof and walls.",
        },
      },
      {
        id: 2,
        name: "Human-Equipment Interaction",
        controls: {
          engineering:
            "Installing proximity warnings systems in key pathways to alert workers to the presence of moving equipment including demonstration machinery.",
          administrative:
            "Clearly marked pedestrian pathways and visitors guidelines, including special areas for demonstration equipment.",
        },
      },
      {
        id: 3,
        name: "Air Quality",
        controls: {
          engineering:
            "Adequate mechanical ventilation to dilute and remove contaminants.",
          administrative:
            "Regular monitoring of air quality (dust, diesel gases, toxic gases, etc).",
        },
      },
      {
        id: 4,
        name: "Slips, Trips, and Falls",
        controls: {
          administrative:
            "Housekeeping and area maintenance; unsafe conditions report form.",
          ppe: "Slip resistant footwear.",
        },
      },
      {
        id: 5,
        name: "Electrical Hazards",
        controls: {
          engineering:
            "Use of ground fault circuit interruptors (GFCI) and ensuring that electric boxes are closed and protected.",
          administrative:
            "Regular inspections of cable and electrical equipment.",
        },
      },
      {
        id: 6,
        name: "Fire",
        controls: {
          engineering:
            "Properly marked and adequate fire extinguishers on mobile equipment and in key areas.",
          administrative:
            "Prohibition of unauthorized flammable materials and emergency response plan.",
        },
      },
      {
        id: 7,
        name: "Confined Spaces",
        controls: {
          administrative:
            "Entry permits for confined spaces; testing the surroundings before entry.",
          engineering: "Forced ventilation if necessary.",
        },
      },
      {
        id: 8,
        name: "Wildlife",
        controls: {
          administrative:
            "Keeping surface areas clear and without trash; training about local wildlife and response protocols.",
          engineering: "Sealing off unauthorized entrances to the mine.",
        },
      },
    ],

    // Notes System
    notes: "Notes",
    addNote: "Add Note",
    noNotes: "No notes yet",
    notePlaceholder: "Enter your note here...",
    author: "Author",
    optional: "optional",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    viewNotes: "View Notes",
    hideNotes: "Hide Notes",
    noteAdded: "on",

    // Checklist System
    checklist: "Checklist",
    controlsVerified: "controls verified",
    of: "of",
    markAllComplete: "Mark All Complete",
    clearAll: "Clear All",
    lastVerified: "Last verified",
    notVerified: "Not verified yet",
    verified: "Verified",
    progress: "Progress",
  },
  es: {
    // Header
    headerTitle: "Principales Peligros de Seguridad",
    headerSubtitle: "Guía de Seguridad en Operaciones Mineras",

    // Search and Filter
    searchPlaceholder: "Buscar peligros...",
    filterLabel: "Filtrar:",
    filterAll: "Todos",
    filterEngineering: "Ingeniería",
    filterAdministrative: "Administrativo",
    filterPpe: "EPP",
    resultsCounter: "Mostrando {count} de {total} peligros",
    openSearch: "Abrir Búsqueda",
    closeSearch: "Cerrar Búsqueda",

    // Table Headers
    tableHeaderHazard: "Peligro Principal de Seguridad",
    tableHeaderSymbol: "Símbolo",
    tableHeaderControls: "Controles Críticos",

    // Control Types
    controlEngineering: "Ingeniería",
    controlAdministrative: "Administrativo",
    controlPpe: "EPP",

    // Footer
    footerText:
      "Siga siempre los protocolos de seguridad e informe de cualquier peligro inmediatamente.",

    // Hazards Data
    hazards: [
      {
        id: 1,
        name: "Inestabilidad del Terreno",
        controls: {
          engineering: "Instalación y mantenimiento de soporte del terreno.",
          administrative:
            "Zonas de exclusión y monitoreo visual regular del techo y las paredes.",
        },
      },
      {
        id: 2,
        name: "Interacción Humano-Equipo",
        controls: {
          engineering:
            "Instalación de sistemas de advertencia de proximidad en vías clave para alertar a los trabajadores sobre la presencia de equipos en movimiento, incluyendo maquinaria de demostración.",
          administrative:
            "Vías peatonales claramente marcadas y pautas para visitantes, incluyendo áreas especiales para equipos de demostración.",
        },
      },
      {
        id: 3,
        name: "Calidad del Aire",
        controls: {
          engineering:
            "Ventilación mecánica adecuada para diluir y eliminar contaminantes.",
          administrative:
            "Monitoreo regular de la calidad del aire (polvo, gases diésel, gases tóxicos, etc.).",
        },
      },
      {
        id: 4,
        name: "Resbalones, Tropezones y Caídas",
        controls: {
          administrative:
            "Mantenimiento y limpieza del área; formulario de informe de condiciones inseguras.",
          ppe: "Calzado antideslizante.",
        },
      },
      {
        id: 5,
        name: "Peligros Eléctricos",
        controls: {
          engineering:
            "Uso de interruptores de circuito por falla a tierra (GFCI) y asegurarse de que las cajas eléctricas estén cerradas y protegidas.",
          administrative:
            "Inspecciones regulares de cables y equipos eléctricos.",
        },
      },
      {
        id: 6,
        name: "Incendio",
        controls: {
          engineering:
            "Extintores de incendios adecuados y debidamente señalizados en equipos móviles y en áreas clave.",
          administrative:
            "Prohibición de materiales inflamables no autorizados y plan de respuesta a emergencias.",
        },
      },
      {
        id: 7,
        name: "Espacios Confinados",
        controls: {
          administrative:
            "Permisos de entrada para espacios confinados; prueba del entorno antes de entrar.",
          engineering: "Ventilación forzada si es necesario.",
        },
      },
      {
        id: 8,
        name: "Fauna Silvestre",
        controls: {
          administrative:
            "Mantener las áreas de superficie despejadas y sin basura; capacitación sobre la fauna local y protocolos de respuesta.",
          engineering: "Sellar las entradas no autorizadas a la mina.",
        },
      },
    ],

    // Notes System
    notes: "Notas",
    addNote: "Agregar Nota",
    noNotes: "Aún no hay notas",
    notePlaceholder: "Escribe tu nota aquí...",
    author: "Autor",
    optional: "opcional",
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    viewNotes: "Ver Notas",
    hideNotes: "Ocultar Notas",
    noteAdded: "el",

    // Checklist System
    checklist: "Lista de Verificación",
    controlsVerified: "controles verificados",
    of: "de",
    markAllComplete: "Marcar Todo Completo",
    clearAll: "Limpiar Todo",
    lastVerified: "Última verificación",
    notVerified: "No verificado aún",
    verified: "Verificado",
    progress: "Progreso",
  },
};
