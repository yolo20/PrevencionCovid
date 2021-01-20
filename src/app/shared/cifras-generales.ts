export interface CifrasGenerales {
    features: Array<Object>,
}

export interface Object {
    geometry: null,
    id: number,
    properties: Properties,
    type: string,
}


export interface Properties{
    ACTIVOS_COL: number,
    CASA: number,
    CASOS_ESTUDIO: number,
    CASOS_IMPORTADOS_COL: number,
    CASOS_RELACIONADOS: number,
    // CONFIRMADOS_AME: null
    CONFIRMADOS_COL: number,
    CONFIRMADOS_MUNDO: number,
    DESCARTADOS_COL: number,
    ETAREO_F: number,
    ETAREO_M: number,
    GlobalID: string,
    HOSPITAL: number,
    HOSPITAL_UCI: number,
    MUERTES_COL: number,
    OBJECTID: number,
    // PAISES_CASOS: null
    RECUPERADOS_COL: number,
}
