const Enum_Role = {
  PENDIENTE: "PENDIENTE",
  ESTUDIANTE: "ESTUDIANTE",
  ADMINISTRADOR: "ADMINISTRADOR",
};

const Enum_StatusUsers = {
  ACTIVO: "ACTIVO",
  INACTIVO: "INACTIVO",
};

const Enum_AFP = {
  COLPENSIONES: "COLPENSIONES",
  COLFONDOS: "COLFONDOS",
  PORVENIR: "PORVENIR",
  PROTECCION: "PROTECCION",
  SKANDIA: "SKANDIA",
};

const Enum_ARL = {
  COLPATRIA: "COLPATRIA",
  COLMENA_SEGUROS: "COLMENA_SEGUROS",
  LA_EQUIDAD_SEGUROS: "LA_EQUIDAD_SEGUROS",
  LIBERTY_SEGUROS_DE_VIDA_SA: "LIBERTY_SEGUROS_DE_VIDA_SA",
  MAPFRE_SEGUROS: "MAPFRE_SEGUROS",
  POSITIVA: "POSITIVA",
  SEGUROS_BOLIVAR_SA: "SEGUROS_BOLIVAR_S.A",
};

const Enum_EPS = {
  MEDIMAS: "MEDIMAS",
  FAMISANAR: "FAMISANAR",
  NUEVA_EPS: "NUEVA_EPS",
  SALUD_TOTAL: "SALUD_TOTAL",
  SURA: "SURA",
  ALIANSALUD: "ALIANSALUD",
  SANITAS: "SANITAS",
  COMPENSAR: "COMPENSAR",
  COOMEVA: "COOMEVA",
  SALUDVIDA: "SALUDVIDA",
  CAFESALUD: "CAFESALUD",
  COMFANDI: "COMFANDI",
};

const Enum_RH = {
  A_POSITIVO: "A -",
  A_NEGATIVO: "A -",
  B_POSITIVO: "B +",
  B_NEGATIVO: "B -",
  AB_POSITIVO: "AB +",
  AB_NEGATIVO: "AB -",
  O_POSITIVO: "O +",
  O_NEGATIVO: "O -",
};

const Enum_Issuance = {
  MADRE: "MADRE",
  PADRE: "PADRE",
  TIO: "TIO",
  HERMANO: "HERMANO",
  ABUELA: "ABUELA",
  ABUELO: "ABUELO",
  OTRO: "OTRO",
};

const Enum_Locality = {
  ANTONIO_NARINIO: "ANTONIO NARIÑO",
  BARRIOS_UNIDOS: "BARRIOS UNIDOS",
  BOSA: "BOSA",
  CHAPINERO: "CHAPINERO",
  CIUDAD_BOLIVAR: "CIUDAD BOLIVAR",
  ENGATIVA: "ENGATIVÁ",
  FONTIBON: "FONTIBÓN",
  KENNEDY: "KENNEDY",
  CANDELARIA: "CANDELARIA",
  MARTIRES: "MÁRTIRES",
  PUENTE_ARANDA: "PUENTE ARANDA",
  RAFAEL_URIBE_URIBE: "RAFAEL URIBE URIBE",
  SAN_CRISTOBAL: "SAN CRISTOBAL",
  SANTA_FE: "SANTA FÉ",
  SUBA: "SUBA",
  SUMAPAZ: "SUMAPAZ",
  TEUSAQUILLO: "TEUSAQUILLO",
  TUNJUELITO: "TUNJUELITO",
  USAQUEN: "USAQUÉN",
  USME: "USME",
};

const Enum_User_Key = {
  nameUser: "Nombres",
  lastName: "Apellidos",
  identification: "Identificación",
  email: "Email",
  movil: "Móvil",
  phone: "Teléfono",
  nationality: "Nacionalidad",
  birthDay: "Cumpleaños",
  cityBirth: "Ciudad de Nacimiento",
  photo: "Foto",
  emergencyContact: "Emergencia",
  issuance: "Parentezco",
  address: "Dirección",
  locality: "Localidad",
  strata: "Estrato",
  afp: "AFP",
  arl: "ARL",
  eps: "EPS",
  rh: "RH",
  upz: "UPZ",
  role: "Role",
  statusUser: "Estado",
  nameGuardian: "Nombre Acudiente",
  lastNameGuardian: "Apellidos Acudiente",
  identificationGuardian: "Identificación Acudiente",
  phoneGuardian: "Teléfono Acudiente",
  emailGuardian: "Email Acudiente",
  addressGuardian: "Dirección Acudiente",
};

export {
  Enum_Role,
  Enum_StatusUsers,
  Enum_AFP,
  Enum_ARL,
  Enum_EPS,
  Enum_RH,
  Enum_Issuance,
  Enum_Locality,
  Enum_User_Key,
};
