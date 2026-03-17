export interface EPSProvider {
  id: string;
  name: string;
  shortName: string;
  color: string;
  loginUrl: string;
  documentTypes: string[];
}

export const EPS_PROVIDERS: EPSProvider[] = [
  {
    id: "sura",
    name: "EPS Sura",
    shortName: "SURA",
    color: "#0033A0",
    loginUrl: "https://www.epssura.com",
    documentTypes: ["CC", "TI", "CE", "PA"],
  },
  {
    id: "coomeva",
    name: "Coomeva EPS",
    shortName: "Coomeva",
    color: "#00843D",
    loginUrl: "https://www.coomeva.com.co",
    documentTypes: ["CC", "TI", "CE"],
  },
  {
    id: "famisanar",
    name: "EPS Famisanar",
    shortName: "Famisanar",
    color: "#E31937",
    loginUrl: "https://www.famisanar.com.co",
    documentTypes: ["CC", "TI", "CE", "RC"],
  },
  {
    id: "sanitas",
    name: "EPS Sanitas",
    shortName: "Sanitas",
    color: "#00A3E0",
    loginUrl: "https://www.epssanitas.com",
    documentTypes: ["CC", "TI", "CE", "PA"],
  },
  {
    id: "compensar",
    name: "Compensar EPS",
    shortName: "Compensar",
    color: "#FF6600",
    loginUrl: "https://www.compensar.com",
    documentTypes: ["CC", "TI", "CE"],
  },
  {
    id: "nueva-eps",
    name: "Nueva EPS",
    shortName: "Nueva EPS",
    color: "#6B2D8B",
    loginUrl: "https://www.nuevaeps.com.co",
    documentTypes: ["CC", "TI", "CE", "RC"],
  },
];

export const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  CC: "Cédula de Ciudadanía",
  TI: "Tarjeta de Identidad",
  CE: "Cédula de Extranjería",
  PA: "Pasaporte",
  RC: "Registro Civil",
};
