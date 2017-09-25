const HTTP_TIMEOUT: number = 60000;

export const LANGUAGE = {
    ENGLISH: "en",
    HINDI: "hi"
};

export interface Environment {
    mainApi: string;
    imgApi?:string;
    language: string;
    timeout: number;
    debug: boolean;
    bypass: boolean;
    angularProd: boolean;
}

export const LOCAL: Environment = {
    mainApi: '',
    language: LANGUAGE.ENGLISH,
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: true,
    angularProd: false
};

export const TEST: Environment = {
    mainApi: 'http://europa.promaticstechnologies.com/bidwork/api',
    imgApi: 'http://europa.promaticstechnologies.com/bidwork',
    language: LANGUAGE.ENGLISH,
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: true,
    angularProd: false
};



export const ENV: Environment = TEST;