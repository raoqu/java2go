import yaml from 'js-yaml'

const DEFAULT_CONFIG_TEXT = `package:
  ignore:
    - java.util.List
    - java.util.Map
    - java.util.Set
  mapping:
    - {from: com.raeiou, to: raoqu.cc}
type:
  primitive:
    - string
    - int
    - int64
    - map
  mapping:
    - {from: String, to: string}
    - {from: boolean, to: bool}
    - {from: long, to: int64}
    - {from: void, to: ""}
    - {from: Object, to: "interface{}"}
settings:
  thisName: me`


export let CONVERTER_CONFIG: any = {}

export function initParserConfig() {
  try {
    const result = yaml.load(DEFAULT_CONFIG_TEXT)
    CONVERTER_CONFIG = result
    console.log('Converter configuration:', result)
    return result
  } catch (e) {
    console.error('Failed parse yaml config.', e);
    return {}
  }
}