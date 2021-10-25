export interface reguser{
    rname : string,
    remail : string,
    rpw : string,
    rcpw : string
}
export interface loguser{
    lemail : string,
    lpw : string
}
export interface url{
    _id? : string,
    shorturl : string,
    longurl : string,
    clicks : number
}