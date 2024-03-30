import TypeNode from "@/util/java/types/Type";
import VariableNode from "@/util/java/types/Variable";

export default class ScopeContext {
    private variableStack: VariableNode[][] = [[]]

    add(variable: VariableNode): VariableNode {
        this.variableStack[this.variableStack.length - 1].push(variable)
        return variable
    }

    enter() {
        this.variableStack.push([])
    }

    exit() {
        this.variableStack.pop()
    }

    get(varName: string): VariableNode | undefined {
        for (let i = this.variableStack.length - 1; i >= 0; i--) {
            const arr = this.variableStack[i]
            for (let j = 0; j < arr.length; j++) {
                const v = arr[j]
                if (v.name == varName) {
                    return v
                }
            }
        }
        return undefined
    }

    getTypeName(varName: string): string | undefined {
        const v = this.get(varName)
        if (!v) return undefined
        if (!v.vtype) return undefined
        return (v.vtype as TypeNode).name
    }
}