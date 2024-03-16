class PathDetail {
    dir : string
    pathSymbol : string
    filename : string
    extension : string

    constructor(dir:string, symbol:string, filename:string, extension:string) {
        this.dir = dir
        this.pathSymbol = symbol
        this.filename = filename
        this.extension = extension
    }

    clone():PathDetail {
        return new PathDetail(this.dir, this.pathSymbol, this.filename, this.extension)
    }

    compose():string {
        return this.dir + this.pathSymbol + this.filename + this.extension
    }

    setFileName(fileName:string) {
        this.filename = fileName
        return this
    }

    setExtension(extention:string) {
        this.extension = extention
        return this
    }

}

const splitPath = (path: string) :PathDetail => {
    
    const [dir_or_file, symbol, file_or_emtpy] = splitByLastSymbol(path, ['/', '\\'])
    const dir = symbol ? dir_or_file : ''
    const file = symbol ? file_or_emtpy : dir_or_file
    const [filename, dot, ext] = splitByLastSymbol(file, ['.'])
    const extension = dot + ext;

    return new PathDetail(dir, symbol, filename, extension)
}

const splitByLastSymbol = (str:string, symbols:string[]): string[] => {
    let max = -1
    let symbol = ''
    let pre = ''
    let post = ''

    if ( ! str ) {
        return ['', '', '']
    }

    for(let i=0; i<symbols.length; i ++) {
        const index = str.lastIndexOf(symbols[i])
        if (index > max) {
            max = index
            symbol = symbols[i]
            pre = str.substring(0, index)
            post = str.substring(index + symbols[i].length)
        }
    }
    if ( max < 0 ) {
        pre = str
    }
    
    return [pre, symbol, post]
}

export {PathDetail, splitPath}