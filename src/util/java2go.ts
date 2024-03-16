import {ParseJava} from './lang/JavaParser'

const Java2Go = (java:string):string => {
    ParseJava(java)
    return java + "\n\nfunc main() {\n\n}"
}

export default Java2Go;